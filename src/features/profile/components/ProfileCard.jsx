import * as jwtDecode from "jwt-decode";
import React, { useRef, useState, useEffect } from 'react';
import userImg from "./../../../assets/images/ProfilePage/defaultImg.png"
import { Button } from '@/components/ui/button';
import * as authApi from "@/lib/api/authApi.js";
import EditProfileForm from "./EditProfileForm";
import { current } from "@reduxjs/toolkit";

export default function ProfileCard() {
  const [image, setImage] = useState(userImg);
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [memberships, setMemberships] = useState([]);
  const fileInputRef = useRef(null);
 const [open , setOpen] = useState(false);
    
    

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode.jwtDecode(token);
          const res = await authApi.getUserProfileById(decoded.user_id);
          if (res) {
            setFullName(res.full_name || "");
            setCollege(res.college || "");
            setUniversity(res.university || "");
            if (res.memberships.length !== 0) {
              setMemberships(res.memberships);
            }
            if (res.profile_photo) setImage(res.profile_photo);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchProfile();
  }, []);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      console.log("Selected file:", file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
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
  return (
    <>
    <div className="w-full">
      <div className="relative">
        <div className="relative -mt-16 md:-mt-28 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pb-6 px-4 md:px-0">

          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div
              className="size-48 md:size-60 aspect-square rounded-full gradient-content overflow-hidden shadow-2xl mb-4 cursor-pointer group relative"
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
                src={image}
                alt="User"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-camera text-white text-2xl"></i>
              </div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
              />

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FCDD00]">{fullName}</h2>
<p className="text-white opacity-90">
  {memberships?.[0]?.committee || "no committee"}
</p>              <p className="text-white mt-1">Egypt, Cairo</p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                <Button onClick ={()=>setOpen(true)} className="bg-white text-[#452798] rounded-md shadow-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap">
                  Edit Profile
                </Button>
                <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap">
                  Setting
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-5 w-full md:w-auto mt-6 md:mt-0">
            <div className="text-center md:text-right">
              <span className="text-white flex items-center justify-center md:justify-end gap-2 mb-2">
                current role

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
                  <span>No memberships</span>
                )}
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-white block mb-2">
                Skills <i className="fa-regular fa-star ml-1 text-yellow-300"></i>
              </span>
              <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF] whitespace-nowrap">
                Add Your Skills
              </Button>
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
        fullName={fullName}
        college={college}
        university={university}
        onSuccess={(data) => {
          setFullName(data.full_name);
          setCollege(data.college);
          setUniversity(data.university);
          setOpen(false);
        }}
      />

    </div>
  </div>
)}                  </>
  );
}

