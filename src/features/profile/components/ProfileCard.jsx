import React, { useRef, useState } from 'react';
import userImg from "./../../../assets/images/ProfilePage/Ellipse 1.png"
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
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="relative -mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6">
        
        <div className="flex flex-col items-center md:items-start">
          <div 
            className="w-40 h-40 rounded-full gradient-content overflow-hidden  shadow-2xl mb-4 cursor-pointer group relative"
            onClick={handleImageClick}
          >
            <img 
              src={image}
              alt="User" 
              className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
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
            <h2 className="text-3xl font-bold text-[#FCDD00]">Mohammed Ali</h2>
            <p className="text-white text-sm opacity-90 italic">UI UX Designer</p>
            <p className="text-gray-400 text-xs mt-1">Egypt, Cairo</p>
            
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <Button className="bg-white text-[#7A4BFF] rounded-md text-sm shadow-md hover:bg-white/60 border-[#452798] hover:text-[#452798]">
                Edit Profile
              </Button>
              <Button className=" text-[#7A4BFF] bg-white rounded-md text-sm hover:bg-white/60 border-[#452798] hover:text-[#452798]">
                Setting
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-5 w-full md:w-auto">
          <div className="text-center md:text-right">
            <span className="text-[10px] text-gray-400 block mb-1">
              Current Role <i className="fa-solid fa-lock text-[8px] ml-1"></i>
            </span>
            <div className="bg-[#FFFFFF33] text-white text-xs px-6 py-1.5 rounded-md border border-white/10 italic">
              UI UX - Member
            </div>
          </div>

          <div className="text-center md:text-right">
            <span className="text-[10px] text-gray-400 block mb-1">
              Skills <i className="fa-regular fa-star text-[8px] ml-1"></i>
            </span>
             <Button className=" text-[#7A4BFF] bg-white rounded-md text-sm hover:bg-white/60 border-[#452798] hover:text-[#452798]">
                Add Your Skills
              </Button>
          </div>
        </div>

      </div>
    </div>
  );
}