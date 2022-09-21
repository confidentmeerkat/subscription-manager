import { TextField, Typography, Button } from "@mui/material";
import "./register.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface RegisterInput {
  email: string;
  password: string;
  fullName: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterInput>();

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
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
          label="Full Name"
          fullWidth
          className="form-control"
          {...register("fullName")}
        />
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

        <Button className="form-control" variant="contained" fullWidth>
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default Register;
