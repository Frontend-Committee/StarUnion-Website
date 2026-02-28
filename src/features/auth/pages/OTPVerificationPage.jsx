import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { otpValidation } from "@/utils/validators.js"; 
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
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
useEffect(() => {
    const firstInput = document.getElementById("otp-0");
    firstInput?.focus();
  }, []);
  const onSubmit = (data) => {
    const otpCode = data.otp.join("");
    console.log("OTP Entered:", otpCode);
    navigate("/auth/new-password");
  };

 const handleKeyDown = (e, index) => {
  const otp = getValues("otp");

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
  const otp = getValues("otp");

  if (/^\d?$/.test(val)) {
    otp[index] = val;
    setValue("otp", otp);

    if (val && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }
};

  return (
  <div>
   
            <h1 className="text-3xl font-bold bg-gradient-to-t from-[#4D3398] via-[#452798] via-[#6D44E2] to-[#1E1A2B] bg-clip-text text-transparent">
              OTP
            </h1>
    <Form className="w-[450] p-10"
  onSubmit={handleSubmit(onSubmit)}
>
  <div className="flex  gap-1 mb-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <Input
        key={i}
        id={`otp-${i}`}
        type="text"
        maxLength={1}
        focus
        {...register(`otp.${i}`, otpValidation)}
        onChange={(e) => handleChange(e, i)}
        onKeyDown={(e) => handleKeyDown(e, i)}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 text-center border  border-[#452798] text-[#452798] rounded-xl outline-none focus:outline-none bg-white"
      />
    ))}
  </div>
  {errors.otp && (
    <p className="text-red-500 text-sm mb-3">{errors.otp.message}</p>
  )}
  <button
    type="submit"
        className="w-1/3 py-2 border-2 hover:bg-white/60 border-[#452798] hover:text-[#452798] bg-[#452798] text-white font-semibold rounded-md"
  >
    Continue
  </button>
</Form>
  </div>
  );
}
export default OTPVerificationPage;