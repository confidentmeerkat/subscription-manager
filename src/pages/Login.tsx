import { TextField, Typography, Button } from "@mui/material";
import "./login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface LoginInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginInput>();

  const auth = getAuth(app);

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password).then(
      (response) => {
        console.log(response.user);
      }
    );
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

        <Button type="submit" className="form-control" variant="contained" fullWidth>
          SIGN IN
        </Button>
      </form>
    </div>
  );
};

export default Login;
