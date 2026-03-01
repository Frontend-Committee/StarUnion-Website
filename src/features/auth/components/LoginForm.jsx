import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { emailValidation, passwordValidation } from "@/utils/validators.js"; 

function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fakeLogin = (data) => {
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit(fakeLogin)}>
      <div className="flex flex-col mb-4">
        <Label htmlFor="email">
          <i className="fa-regular fa-envelope fa-lg"></i>
          Email Address
        </Label>

        <Input
          type="email"
          id="email"
          {...register("email", emailValidation)}
          error={errors.email}
        />

        {errors.email && (
          <p className="text-[#EF4444] font-semibold text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <Label htmlFor="pass">
          <i className="fa-solid fa-lock"></i>
          Password
        </Label>

        <Input
          type="password"
          id="pass"
          {...register("password", passwordValidation)}
          error={errors.password}
        />

        {errors.password && (
          <p className="text-[#EF4444] font-semibold text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="text-sm text-[#452798] text-start mb-4 font-semibold">
        <p>
          Forgot Password?{" "}
          <Link to="/auth/forgot-password" className="underline">
            Forgot
          </Link>
        </p>

        <p>
          Don't have an Account?{" "}
          <Link to="/auth/register" className="underline">
            Register
          </Link>
        </p>
      </div>

      <Button
        type="submit"
        className="w-1/3 py-2 border-2 hover:bg-white/60 border-[#452798] hover:text-[#452798] bg-[#452798] text-white font-semibold rounded-md"
      >
        Log In
      </Button>
    </Form>
  );
}

export default LoginForm;