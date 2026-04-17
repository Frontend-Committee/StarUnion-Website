import React, { useEffect, useState } from "react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import * as authApi from "@/lib/api/authApi";
import { useForm } from "react-hook-form";


function EditProfileForm({ userData, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    if (userData) {
      setValue("full_name", userData.full_name);
      setValue("college", userData.college);
      setValue("university", userData.university);
      setValue("facebook", userData.facebook);
      setValue("linkedin", userData.linkedin);
      setValue("github", userData.github);
      setValue("whatsapp", userData.whatsapp);
      setSkills(userData.skills || []);
    }
  }, [userData, setValue]);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // Include the skills array in the submission
      const payload = { ...data, skills };
      const res = await authApi.updateCurrentUser(payload);

      onSuccess(res);
      console.log("Update Success:", res);
    } catch (error) {
      setServerError(error.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-500 my-4">
        <div className="text-center mb-6">
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
          <p className="text-[#452798]/80 text-xs md:text-sm font-semibold">Keep your professional details up to date</p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Full Name */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-regular fa-user mr-2"></i> FULL NAME
              </Label>
              <Input
                type="text"
                placeholder="e.g. John Doe"
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("full_name", { required: "Full Name is required" })}
              />
            </div>

            {/* Whatsapp */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-brands fa-whatsapp mr-2"></i> WHATSAPP
              </Label>
              <Input
                type="text"
                placeholder="e.g. +201234567890"
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("whatsapp")}
              />
            </div>

            {/* College */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-solid fa-graduation-cap mr-2"></i> COLLEGE
              </Label>
              <Input
                type="text"
                placeholder="e.g. Faculty of Engineering"
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("college")}
              />
            </div>

            {/* University */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-solid fa-building-columns mr-2"></i> UNIVERSITY
              </Label>
              <Input
                type="text"
                placeholder="e.g. Cairo University"
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("university")}
              />
            </div>

            {/* Facebook */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-brands fa-facebook mr-2"></i> FACEBOOK URL
              </Label>
              <Input
                type="url"
                placeholder="https://facebook.com/..."
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("facebook")}
              />
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-brands fa-linkedin mr-2"></i> LINKEDIN URL
              </Label>
              <Input
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("linkedin")}
              />
            </div>

            {/* GitHub */}
            <div className="flex flex-col group">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-brands fa-github mr-2"></i> GITHUB URL
              </Label>
              <Input
                type="url"
                placeholder="https://github.com/..."
                className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl"
                {...register("github")}
              />
            </div>

            {/* Skills Section */}
            <div className="flex flex-col md:col-span-2 mt-4">
              <Label className="text-[#452798] text-xs font-bold uppercase tracking-wider mb-2 ml-1">
                <i className="fa-regular fa-star mr-2"></i> SKILLS
              </Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  placeholder="e.g. React, Python"
                  className="bg-[#452798] border-none text-white h-12 px-4 rounded-xl flex-grow"
                />
                <Button 
                  type="button" 
                  onClick={addSkill}
                  className="bg-[#7A4BFF] hover:bg-[#6D44E2] text-white rounded-xl px-6"
                >
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-[#452798] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    {skill}
                    <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-400">
                      <i className="fa-solid fa-xmark text-xs"></i>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {serverError && <p className="text-red-500 text-center mt-4 font-bold">{serverError}</p>}

          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="w-full md:w-1/2 text-lg h-12 bg-[#452798] text-white hover:bg-[#683CE3] transition-all font-bold rounded-xl shadow-lg"
            >
              {loading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}


export default EditProfileForm;