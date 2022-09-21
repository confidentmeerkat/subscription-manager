import { TextField, Typography, Button } from "@mui/material";
import "./register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { app } from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

interface RegisterInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const auth = getAuth(app);

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate("/login");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="w-full flex flex-row justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 border border-gray-200 shadow-md p-4 mt-6 flex flex-col items-center"
      >
        <div className="form-control">
          <Typography variant="h4" color="primary">
            Sign Up
          </Typography>
        </div>

        <TextField
          label="Email"
          fullWidth
          className="form-control"
          {...register("email")}
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          label="Password"
          fullWidth
          className="form-control"
          {...register("password")}
          type="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <Button
          type="submit"
          className="form-control"
          variant="contained"
          fullWidth
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Register;
