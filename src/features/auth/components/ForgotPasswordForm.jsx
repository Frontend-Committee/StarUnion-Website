import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { emailValidation } from "@/utils/validators.js";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/auth/otp");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white/60 backdrop-blur-xs border border-white/50 p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
      <h1
        className="text-4xl font-extrabold mb-3 tracking-tight"
        style={{
          background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Reset Password
      </h1>
      <p className="text-[#452798]/70 mb-9 text-sm font-medium">Enter your email and we'll send you a code</p>

      <Form onSubmit={handleSubmit(handleContinue)}>
        <div className="flex flex-col mb-8 group text-left">
          <Label htmlFor="email" className="text-[#452798] text-xs uppercase tracking-wider mb-2.5 ml-1">
            <i className="fa-regular fa-envelope mr-2"></i>
            Email Address
          </Label>

          <Input
            type="email"
            id="email"
            placeholder="e.g. john@example.com"
            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-2 focus:ring-[#452798]/50"
            {...register("email", emailValidation)}
            error={errors.email}
          />

          {errors.email && (
            <p className="text-rose-600 font-medium text-xs mt-1.5 ml-1">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20"
        >
          Continue
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

export default ForgotPasswordForm;