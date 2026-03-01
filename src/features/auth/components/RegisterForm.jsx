import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { confirmPasswordValidation, emailValidation, passwordValidation, phoneValidation } from "@/utils/validators.js";

function RegisterForm() {
    const navigate = useNavigate();
    const [isGenderOpen, setIsGenderOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState("");

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: { gender: "" }
    });

    const onSubmit = () => {
        localStorage.setItem("token", "123");
        navigate("/", { replace: true });
    };

    const handleGenderSelect = (value, label) => {
        setSelectedGender(label);
        setValue("gender", value);
        setIsGenderOpen(false);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} className="md:w-[900px] sm:w-[500px]">
                <div className="grid grid-cols-2 gap-5">

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="user-name">
                            <i className="fa-regular fa-user mr-2"></i> Full Name
                        </Label>
                        <Input type="text" id="user-name" {...register("fullName", { required:"Full Name is required"  })} />
                        {errors.fullName && (
                            <p className="error-validation">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="email">
                            <i className="className-regular fa-envelope fa-lg mr-2"></i> Email Address
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            {...register("email", emailValidation)}
                            error={errors.email}
                        />
                        {errors.email && (
                            <p className="error-validation">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="phone">
                            <i className="fa-solid fa-phone mr-2"></i> Phone
                        </Label>
                        <Input type="tel" id="phone" {...register("phone", phoneValidation)} 
  error={errors.phone} />
  {errors.phone && (
                            <p className="error-validation">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4 relative">
                        <Label>
                            <i className="fa-solid fa-venus-mars mr-2"></i> Gender
                        </Label>

                        <div
                            onClick={() => setIsGenderOpen(!isGenderOpen)}
                            className="p-2 rounded-md bg-[#452798] text-white flex justify-between items-center cursor-pointer select-none"
                        >
                            <span>{selectedGender}</span>
                            <div className={`w-2 h-2 border-r-2 border-b-2 border-white rotate-45 mr-1 mb-1 transition-transform ${isGenderOpen ? "rotate-[225deg]" : ""}`}></div>
                        </div>

                        {isGenderOpen && (
                            <ul className="absolute top-[100%] left-0 w-full bg-white border-2 border-[#452798] rounded-md mt-1 z-10 overflow-hidden shadow-lg">
                                <li
                                    onClick={() => handleGenderSelect("male", "Male")}
                                    className="p-2 text-[#452798] hover:bg-[#452798] hover:text-white cursor-pointer transition-colors"
                                >
                                    Male
                                </li>
                                <li
                                    onClick={() => handleGenderSelect("female", "Female")}
                                    className="p-2 text-[#452798] hover:bg-[#452798] hover:text-white cursor-pointer transition-colors border-t border-purple-50"
                                >
                                    Female
                                </li>
                            </ul>
                        )}
                        <input type="hidden" {...register("gender", { required:"gender is required"  })} />
                        {errors.gender && (
                            <p className="error-validation">{errors.gender.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="uni">
                            <i className="fa-solid fa-building-columns mr-2"></i> University
                        </Label>
                        <Input type="text" id="uni" {...register("university", { required: "University is required" })} />
                        {errors.university && (
                            <p className="error-validation">{errors.university.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="college">
                            <i className="fa-solid fa-graduation-cap mr-2"></i> College
                        </Label>
                        <Input type="text" id="college" {...register("college", { required: "College is required" })} />
                        {errors.college && (
                            <p className="error-validation">{errors.college.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="pass">
                            <i className="fa-solid fa-lock mr-2"></i> Password
                        </Label>
                        <Input
                            type="password"
                            id="pass"
                            {...register("password", passwordValidation)}
                            error={errors.password}
                        />
                        {errors.password && (
                            <p className="error-validation">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-4">
                        <Label htmlFor="confirmPassword">
                            <i className="fa-solid fa-lock mr-2"></i> Confirm Password
                        </Label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            {...register("confirmPassword", confirmPasswordValidation(() => getValues("password")))}
                            variant={errors.confirmPassword ? "error" : undefined}
                        />
                        {errors.confirmPassword && (
                            <p className="error-validation">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                </div>

                <Button
                    type="submit"
                    className="border-2 w-1/4 mt-4 hover:bg-white/60 border-[#452798] hover:text-[#452798] bg-[#452798] text-white font-semibold rounded-md transition-all"
                >
                    Register
                </Button>
            </Form>
        </div>
    );
}

export default RegisterForm;