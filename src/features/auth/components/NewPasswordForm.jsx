import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

import { passwordValidation, confirmPasswordValidation } from "@/utils/validators.js";

function NewPasswordForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    mode: "onChange",
  });

  const fakeSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("token", "123");
    navigate("/", { replace: true });
  };

  return (
    <div className="bg-white/60 backdrop-blur-xs border border-white/50 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md text-center animate-in fade-in zoom-in duration-500">
      <h1
        className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight"
        style={{
          background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        New Password
      </h1>
      <p className="text-[#452798]/70 mb-9 text-sm font-medium">Enter your new password below</p>

      <Form onSubmit={handleSubmit(fakeSubmit)}>
        {/* Password */}
        <div className="flex flex-col mb-6 group text-left">
          <Label htmlFor="password" className="text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1">
            <i className="fa-solid fa-lock mr-2"></i>
            Password
          </Label>

          <PasswordInput
            id="password"
            placeholder="••••••••"
            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50"
            {...register("password", passwordValidation)}
          />

          {errors.password && (
            <p className="text-rose-600 font-medium text-xs mt-1.5 ml-1">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col mb-8 group text-left">
          <Label htmlFor="confirmPassword" className="text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1">
            <i className="fa-solid fa-lock mr-2"></i>
            Confirm Password
          </Label>

          <PasswordInput
            id="confirmPassword"
            placeholder="••••••••"
            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50"
            {...register("confirmPassword", confirmPasswordValidation(() => getValues("password")))}
          />

          {errors.confirmPassword && (
            <p className="text-rose-600 font-medium text-xs mt-1.5 ml-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20 text-lg"
        >
          Confirm
        </Button>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="text-xs font-semibold text-[#452798] hover:underline transition-colors"
          >
            ← Back to Sign In
          </button>
        </div>
      </Form>
    </div>
  );
}

export default NewPasswordForm;