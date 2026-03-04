import React, { useRef, useState } from 'react';

import userImg from "./../../../assets/images/ProfilePage/portfolioImg.jpg"
import { Button } from '@/components/ui/Button';

export default function ProfileCard() {
  const [image, setImage] = useState(userImg);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[93%] mx-auto">

    <div className="relative">
      <div className="relative -mt-28 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 pb-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div 
            className="size-60 aspect-square rounded-full gradient-content overflow-hidden shadow-2xl mb-4 cursor-pointer group relative"
            onClick={handleImageClick}
style={{

    background: `
      linear-gradient(#111, #111) padding-box,
      linear-gradient(180deg, #4D3398, #6D44E2, #7A4BFF) border-box
    `,
    border:"5px solid "
  }}          >
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

          <div>
            <h2 className="text-3xl font-bold text-[#FCDD00]">Mohammed Ali</h2>
            <p className="text-white opacity-90">UI UX Designer</p>
            <p className="text-white mt-1">Egypt, Cairo</p>
            
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <Button className="bg-white text-[#452798] rounded-md shadow-md hover:bg-white/90 border-2 border-[#7A4BFF]">
                Edit Profile
              </Button>
              <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF]">
                Setting
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center self-center mt-10 md:items-end gap-5 w-full md:w-auto">
          <div className="text-center md:text-right my-3">
           <span className="text-white flex items-center justify-center gap-2 my-2 text-center">
  Current Role

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
    <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
    <path d="M12 12l0 .01" />
    <path d="M3 13a20 20 0 0 0 18 0" />
  </svg>
</span>
            <div className="bg-[#FFFFFF33] text-white px-6 py-1.5 rounded-md">
              UI UX - Member
            </div>
          </div>

          <div className="text-center md:text-right">
            <span className="text-white block mb-1">
              Skills <i className="fa-regular fa-star ml-1"></i>
            </span>
             <Button className="text-[#452798] bg-white rounded-md hover:bg-white/90 border-2 border-[#7A4BFF]">
                Add Your Skills
              </Button>
          </div>
        </div>

            </div>
      </div>
    </div>
  );
}