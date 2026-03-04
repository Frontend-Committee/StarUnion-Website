import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

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
        <div className="bg-white/60 backdrop-blur-xs border border-white/50 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-4xl animate-in fade-in zoom-in duration-500">
            <div className="text-center mb-10">
                <h1 
                    className="text-3xl md:text-5xl font-black mb-3 tracking-tighter inline-block"
                    style={{
                        background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Become A Star <span className="text-[#FCDD00] text-3xl md:text-4xl align-middle">✨</span>
                </h1>
                <p className="text-[#452798]/70 text-sm font-medium px-2">Please fill in your details to create an account</p>
            </div>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

                    {/* Full Name */}
                    <div className="flex flex-col group">
                        <Label htmlFor="user-name" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-regular fa-user mr-2 text-sm"></i> FULL NAME
                        </Label>
                        <Input 
                            type="text" 
                            id="user-name" 
                            placeholder="e.g. John Doe"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("fullName", { required: "Full Name is required" })} 
                        />
                        {errors.fullName && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col group">
                        <Label htmlFor="email" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-regular fa-envelope mr-2 text-sm"></i> EMAIL ADDRESS
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="e.g. john@example.com"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("email", emailValidation)}
                        />
                        {errors.email && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col group">
                        <Label htmlFor="phone" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-phone mr-2 text-sm"></i> PHONE
                        </Label>
                        <Input 
                            type="tel" 
                            id="phone" 
                            placeholder="e.g. +20 123 456 789"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("phone", phoneValidation)} 
                        />
                        {errors.phone && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col relative group">
                        <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-venus-mars mr-2 text-sm"></i> GENDER
                        </Label>

                        <div
                            onClick={() => setIsGenderOpen(!isGenderOpen)}
                            className="h-12 px-4 rounded-xl bg-[#452798] text-white flex justify-between items-center cursor-pointer select-none transition-all hover:bg-[#452798]/95 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                        >
                            <span className={selectedGender ? "text-white font-medium" : "text-white/40"}>
                                {selectedGender || "Select Gender"}
                            </span>
                            <div className={`w-2 h-2 border-r-2 border-b-2 border-white rotate-45 mr-1 mb-1 transition-transform duration-300 ${isGenderOpen ? "rotate-[225deg]" : ""}`}></div>
                        </div>

                        {isGenderOpen && (
                            <ul className="absolute top-[100%] left-0 w-full bg-white border border-purple-100 rounded-xl mt-3 z-20 overflow-hidden shadow-2xl p-1 animate-in slide-in-from-top-2">
                                <li
                                    onClick={() => handleGenderSelect("male", "Male")}
                                    className="p-3 text-[#452798] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors font-bold text-sm"
                                >
                                    Male
                                </li>
                                <li
                                    onClick={() => handleGenderSelect("female", "Female")}
                                    className="p-3 text-[#452798] hover:bg-purple-50 rounded-lg cursor-pointer transition-colors font-bold text-sm mt-1"
                                >
                                    Female
                                </li>
                            </ul>
                        )}
                        <input type="hidden" {...register("gender", { required: "gender is required" })} />
                        {errors.gender && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.gender.message}</p>
                        )}
                    </div>

                    {/* University */}
                    <div className="flex flex-col group">
                        <Label htmlFor="uni" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-building-columns mr-2 text-sm"></i> UNIVERSITY
                        </Label>
                        <Input 
                            type="text" 
                            id="uni" 
                            placeholder="e.g. Cairo University"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("university", { required: "University is required" })} 
                        />
                        {errors.university && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.university.message}</p>
                        )}
                    </div>

                    {/* College */}
                    <div className="flex flex-col group">
                        <Label htmlFor="college" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-graduation-cap mr-2 text-sm"></i> COLLEGE
                        </Label>
                        <Input 
                            type="text" 
                            id="college" 
                            placeholder="e.g. Faculty of Engineering"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("college", { required: "College is required" })} 
                        />
                        {errors.college && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.college.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="flex flex-col group">
                        <Label htmlFor="pass" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-lock mr-2 text-sm"></i> PASSWORD
                        </Label>
                        <PasswordInput
                            id="pass"
                            placeholder="••••••••"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("password", passwordValidation)}
                        />
                        {errors.password && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col group">
                        <Label htmlFor="confirmPassword" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62]">
                            <i className="fa-solid fa-lock mr-2 text-sm"></i> CONFIRM PASSWORD
                        </Label>
                        <PasswordInput
                            id="confirmPassword"
                            placeholder="••••••••"
                            className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                            {...register("confirmPassword", confirmPasswordValidation(() => getValues("password")))}
                        />
                        {errors.confirmPassword && (
                            <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                </div>

                <div className="mt-12 flex flex-col items-center">
                    <Button
                        type="submit"
                        className="w-full md:w-80 h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg shadow-[#452798]/20 text-lg mb-6"
                    >
                        Register
                    </Button>
                    
                    <button 
                        type="button"
                        onClick={() => navigate("/auth/login")}
                        className="text-sm font-semibold text-[#452798]/80 hover:text-[#452798] hover:underline transition-all"
                    >
                        Already have an account? <span className="text-[#452798]">Sign In</span>
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default RegisterForm;