import { useEffect } from "react";
import { TextField, Typography, Button } from "@mui/material";
import "./login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router";
import { login } from "../store/features/auth";
import { Link } from "react-router-dom";

interface LoginInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginInput>();

  const authInfo = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (authInfo.token) navigate("/");
  }, [authInfo]);

  const auth = getAuth(app);

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const token = await user.getIdToken();
    const email = user.email || "";
    dispatch(login({ token, email }));
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 border border-gray-200 shadow-md p-4 mt-6 flex flex-col items-center"
      >
        <div className="form-control">
          <Typography variant="h4" color="primary">
            Sign In
          </Typography>
        </div>
        <TextField
          label="Email"
          fullWidth
          className="form-control"
          {...register("email")}
          type="email"
        />
        <TextField
          label="Password"
          fullWidth
          className="form-control"
          {...register("password")}
          type="password"
        />
        <Button
          type="submit"
          className="form-control"
          variant="contained"
          fullWidth
        >
          SIGN IN
        </Button>
        <Link className="form-control text-blue-500" to="/register">
          <u>SignUp</u>
        </Link>
      </form>
    </div>
  );
};

export default Login;
