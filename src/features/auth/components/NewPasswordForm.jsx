import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/ui/Form";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";

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
    <Form onSubmit={handleSubmit(fakeSubmit)} className="w-[410px]">
      
      <div className="flex flex-col mb-4">
        <Label htmlFor="password">
          <i className="fa-solid fa-lock"></i>
          Password
        </Label>

        <Input
          type="password"
          id="password"
          {...register("password", passwordValidation)}
          variant={errors.password ? "error" : undefined}
        />

        {errors.password && (
          <p className="text-[#EF4444] font-semibold text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <Label htmlFor="confirmPassword">
          <i className="fa-solid fa-lock"></i>
          Confirm Password
        </Label>

        <Input
          type="password"
          id="confirmPassword"
          {...register(
            "confirmPassword",
            confirmPasswordValidation(() => getValues("password"))
          )}
          variant={errors.confirmPassword ? "error" : undefined}
        />

        {errors.confirmPassword && (
          <p className="text-[#EF4444] font-semibold text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="border-2 hover:bg-white/60 border-[#452798] hover:text-[#452798] bg-[#452798] text-white"
      >
        Confirm
      </Button>
    </Form>
  );
}

export default NewPasswordForm;