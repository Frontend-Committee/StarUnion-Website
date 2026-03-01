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
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold bg-gradient-to-t from-[#4D3398] via-[#6D44E2] to-[#1E1A2B] bg-clip-text text-transparent mb-6">
        OTP
      </h1>

      <Form
        className="w-[450px] p-10 flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength={1}
              {...register(`otp.${i}`, otpValidation)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 text-center border border-[#452798] bg-white text-[#452798] rounded-xl outline-none focus:ring-2 focus:ring-[#6D44E2]"
            />
          ))}
        </div>
        {errors.otp && (
          <p className="text-red-500 text-sm mb-3">
            {errors.otp.message}
          </p>
        )}
        <p className="text-[#452798] font-medium mb-3">
          {timeLeft > 0
            ? `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`
            : "00:00"}
        </p>
        <button
          type="submit"
          className="w-1/3 py-2 border-2 hover:bg-white/60 border-[#452798] hover:text-[#452798] bg-[#452798] text-white font-semibold rounded-md transition"
        >
          Continue
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={!canResend}
          className={`mt-4 text-sm font-semibold transition ${
            canResend
              ? "text-[#452798] hover:underline cursor-pointer"
              : "text-[#1E1A2B] cursor-not-allowed"
          }`}
        >
          <i className="fa-solid fa-arrow-rotate-right text-xs mr-1"></i>
          Resend
        </button>
      </Form>
    </div>
  );
}

export default OTPVerificationPage;