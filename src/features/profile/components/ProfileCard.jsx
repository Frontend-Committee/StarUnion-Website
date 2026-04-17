import React, { useRef, useState } from 'react';
import userImg from "./../../../assets/images/ProfilePage/defaultImg.png"
import { Button } from '@/components/ui/button';
import * as authApi from "@/lib/api/authApi.js";
import EditProfileForm from "./EditProfileForm";

export default function ProfileCard({ userData, isOwnProfile }) {
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);

  const displayImage = previewImage || userData?.profile_photo || userImg;

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("Selected file:", file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("profile_photo", file);

      try {
        const res = await authApi.updateCurrentUser(formData);
        console.log({ data: res });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const {
    full_name: fullName = "",
    college = "",
    university = "",
    memberships = [],
    facebook,
    linkedin,
    github,
    whatsapp,
    skills = []
  } = userData || {};

  return (
    <>
    <div className="w-full">
      <div className="relative">
        <div className="relative -mt-16 md:-mt-28 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pb-6 px-4 md:px-0">

          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div
              className={`size-48 md:size-60 aspect-square rounded-full overflow-hidden shadow-2xl mb-4 relative ${isOwnProfile ? "cursor-pointer group" : ""}`}
              onClick={handleImageClick}
              style={{
                background: `
                linear-gradient(#111, #111) padding-box,
                  linear-gradient(180deg, #4D3398, #6D44E2, #7A4BFF) border-box
                  `,
                border: "5px solid transparent"
              }}
            >
              <img
                src={displayImage}
                alt="User"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              {isOwnProfile && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-camera text-white text-2xl"></i>
                </div>
              )}
            </div>

            {isOwnProfile && (
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
            )}

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FCDD00]">{fullName}</h2>
              <p className="text-white opacity-90">
                {memberships?.[0]?.committee || "General Member"}
              </p>              
              <p className="text-white mt-1">{university} {college ? `• ${college}` : ""}</p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                {isOwnProfile ? (
                  <>
                    <Button onClick={() => setOpen(true)} className="bg-white text-[#452798] rounded-md shadow-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap">
                      Edit Profile
                    </Button>
                    <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap">
                      Settings
                    </Button>
                  </>
                ) : (
                  <div className="flex gap-4 items-center mt-2">
                     {facebook && <a href={facebook} target="_blank" rel="noreferrer" className="text-white hover:text-[#FCDD00] transition-colors"><i className="fa-brands fa-facebook text-2xl"></i></a>}
                     {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-[#FCDD00] transition-colors"><i className="fa-brands fa-linkedin text-2xl"></i></a>}
                     {github && <a href={github} target="_blank" rel="noreferrer" className="text-white hover:text-[#FCDD00] transition-colors"><i className="fa-brands fa-github text-2xl"></i></a>}
                     {whatsapp && <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="text-white hover:text-[#FCDD00] transition-colors"><i className="fa-brands fa-whatsapp text-2xl"></i></a>}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-5 w-full md:w-auto mt-6 md:mt-0">
            <div className="text-center md:text-right">
              <span className="text-white flex items-center justify-center md:justify-end gap-2 mb-2">
                Current Role

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 md:h-6 md:w-6 shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
                  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                  <path d="M12 12l0 .01" />
                  <path d="M3 13a20 20 0 0 0 18 0" />
                </svg>
              </span>
              <div className="bg-[#FFFFFF33] text-white px-6 py-2 rounded-md inline-block">
                {memberships?.length > 0 ? (
                  <span>
                    {memberships[0].committee} - {memberships[0].role}
                  </span>
                ) : (
                  <span>No active memberships</span>
                )}
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-white block mb-2 font-semibold">
                Skills <i className="fa-regular fa-star ml-1 text-yellow-300"></i>
              </span>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end max-w-xs">
                {skills?.length > 0 ? (
                  skills.map((skill, idx) => (
                    <span key={idx} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))
                ) : (
                  isOwnProfile && (
                    <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap text-xs h-8">
                      Add Your Skills
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
{open && (
  <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/50 z-20 h-screen">
    
    <div
      className="h-full flex justify-center items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >

      <EditProfileForm
        userData={userData}
        onSuccess={() => {
          window.location.reload();
        }}
      />

    </div>
  </div>
)}                  </>
  );
}

