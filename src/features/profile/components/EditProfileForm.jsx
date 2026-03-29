import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as authApi from "@/lib/api/authApi";
import { useForm } from "react-hook-form";


function EditProfileForm({ fullName, college, university, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("full_name", fullName);
    setValue("college", college);
    setValue("university", university);
  }, [fullName, college, university]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await authApi.updateCurrentUser(data);

      onSuccess(data);
      console.log({data});
      console.log({res});
      

    } catch (error) {
      setServerError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
    return (
        <>

            <div className="bg-white/70 backdrop-blur-md border  border-white/50  sm:p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl  max-w-2xl animate-in fade-in zoom-in duration-500 my-4">
                <div className="text-center mb-3 md:mb-10">
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-black mb-2 md:mb-3 tracking-tighter inline-block"
                        style={{
                            background: "radial-gradient(313.53% 95.11% at 15.23% 95.11%, #7A4BFF 0%, #6D44E2 25.96%, #4D3398 55.29%, #1E1A2B 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Update Your Profile
                    </h1>
                    <p className="text-[#452798]/80 text-xs md:text-sm font-semibold px-2">Please provide your details so that we can update your profile</p>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">

                        {/* Full Name */}
                        <div className="flex flex-col group">
                            <Label htmlFor="user-name" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62] my-3">
                                <i className="fa-regular fa-user mr-2 text-sm"></i> FULL NAME
                            </Label>
                            <Input
                                type="text"
                                id="user-name"
                                placeholder="e.g. John Doe"
                                className="bg-[#452798] border-none text-white placeholder:text-white/40 h-12 px-4 rounded-xl transition-all outline-none ring-0 focus:ring-4 focus:ring-[#452798]/20 shadow-lg"
                                {...register("full_name", { required: "Full Name is required" })}
                            />
                            {errors.full_name && (
                                <p className="text-rose-600 font-semibold text-[10px] mt-1.5 ml-1 uppercase tracking-wider">{errors.full_name.message}</p>
                            )}
                        </div>


                        {/* College */}
                        <div className="flex flex-col group">
                            <Label htmlFor="college" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62] my-3">
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
                        <div className="flex flex-col group">
                            <Label htmlFor="uni" className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2.5 ml-1 transition-colors group-focus-within:text-[#311f62] my-3">
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





                    </div>

                    <div className="mt-12 flex flex-col items-center">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="text-lg h-12 bg-[#452798] text-white hover:bg-[#683CE3] active:scale-[0.98] transition-all font-bold rounded-xl shadow-lg"
                        >
                            {loading ? "update..." : "Update"}
                        </Button>


                    </div>
                </Form>
            </div>
        </>
    );
}


export default EditProfileForm;