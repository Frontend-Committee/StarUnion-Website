import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/hooks/useAuth";
import { emailValidation, passwordValidation } from "@/utils/validators.js";

function LoginForm() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fakeLogin = (data) => {
    loginUser("123");
    navigate("/", { replace: true });
  };

  return (
    <div className="bg-white/60 backdrop-blur-xs border border-white/50 p-10 rounded-3xl shadow-2xl w-full max-w-md">
      <h1
        className="text-5xl font-extrabold mb-3 text-center tracking-tight"
        style={{
          background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Star Union
      </h1>
      <p className="text-[#452798]/70 mb-9 text-center text-md font-medium">Please enter your details to sign in</p>

      <Form onSubmit={handleSubmit(fakeLogin)}>
        <div className="flex flex-col mb-6 group">
          <Label htmlFor="email" className="font-bold text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1">
            <i className="fa-regular fa-envelope mr-2"></i>
            Email Address
          </Label>

          <Input
            type="email"
            id="email"
            placeholder="e.g. name@example.com"
            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50"
            {...register("email", emailValidation)}
            error={errors.email}
          />

          {errors.email && (
            <p className="text-rose-600 font-medium text-xs mt-1.5 ml-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-6 group">
          <Label htmlFor="pass" className="font-bold text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1">
            <i className="fa-solid fa-lock mr-2"></i>
            Password
          </Label>

          <PasswordInput
            id="pass"
            placeholder="••••••••"
            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50"
            {...register("password", passwordValidation)}
          />

          {errors.password && (
            <p className="text-rose-600 font-medium text-xs mt-1.5 ml-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center mb-8 text-sm font-semibold">
          <Link to="/auth/forgot-password" size="sm" className="text-[#452798] hover:underline transition-colors">
            Forgot Password?
          </Link>
          <Link to="/auth/register" className="text-[#452798] hover:underline">
            Create Account
          </Link>
        </div>

        <Button
          type="submit"
          className="text-lg w-full h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;