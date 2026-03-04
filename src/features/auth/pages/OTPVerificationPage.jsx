import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { otpValidation } from "@/utils/validators.js";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function OTPVerificationPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const firstInput = document.getElementById("otp-0");
    firstInput?.focus();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const onSubmit = () => {
    navigate("/auth/new-password");
  };

  const handleKeyDown = (e, index) => {
    const otp = [...getValues("otp")];
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      otp[index] = "";
      setValue("otp", otp);
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };

  const handleChange = (e, index) => {
    const val = e.target.value;
    const otp = [...getValues("otp")];
    if (/^\d?$/.test(val)) {
      otp[index] = val;
      setValue("otp", otp);
      if (val && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    setTimeLeft(60);
    setCanResend(false);
  };

  return (
    <div className="bg-white/60 backdrop-blur-xs border border-white/50 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md text-center animate-in fade-in zoom-in duration-500">
      {/* Header */}
      <h1
        className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight"
        style={{
          background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Verify Code
      </h1>
      <p className="text-[#452798]/70 mb-9 text-sm font-medium">
        Enter the 6-digit code sent to your email
      </p>

      <Form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* OTP Inputs */}
        <div className="flex gap-2 sm:gap-3 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength={1}
              {...register(`otp.${i}`, otpValidation)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-bold border-2 border-[#452798]/30 bg-white text-[#452798] rounded-xl outline-none focus:ring-2 focus:ring-[#6D44E2] focus:border-[#6D44E2] transition-all shadow-sm"
            />
          ))}
        </div>

        {errors.otp && (
          <p className="text-rose-600 font-semibold text-[10px] mb-3 uppercase tracking-wider">
            {errors.otp.message}
          </p>
        )}

        {/* Timer */}
        <p className="text-[#452798] font-semibold text-sm mb-6">
          {timeLeft > 0
            ? `Code expires in 00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`
            : "Code expired"}
        </p>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20 text-lg mb-4"
        >
          Continue
        </Button>

        {/* Resend */}
        <button
          type="button"
          onClick={handleResend}
          disabled={!canResend}
          className={`text-sm font-semibold transition ${
            canResend
              ? "text-[#452798] hover:underline cursor-pointer"
              : "text-[#452798]/40 cursor-not-allowed"
          }`}
        >
          <i className="fa-solid fa-arrow-rotate-right text-xs mr-1"></i>
          Resend Code
        </button>
      </Form>
    </div>
  );
}

export default OTPVerificationPage;