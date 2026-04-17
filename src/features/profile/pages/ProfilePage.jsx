import Footer from "@/components/common/Footer";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./../components/ProfileCard";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import logo from "./../../../assets/images/AboutHero.png";
import imgSrc1 from "./../../../assets/images/ProfilePage/2d3905db88064d93a2ebc114979738c00d8b2df2.jpg";
import imgSrc2 from "./../../../assets/images/ProfilePage/36665f265adb2a4b8feaa41ec7a2b361cd2989fa.jpg";
import imgSrc3 from "./../../../assets/images/ProfilePage/4614abb8f38efe719a43dfd420bb46d90a34ae8f.jpg";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";
import * as authApi from "@/lib/api/authApi.js";
import { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

const ApplicationStatus = [
  {
    title: "UI/UX Workshop",
    status: "Accepted",
    date: "March 2025",
    imgSrc: imgSrc1,
  },
  {
    title: "Backend Workshop",
    status: "Pending",
    date: "March 2025",
    imgSrc: imgSrc2,
  },
  {
    title: "Frontend Workshop",
    status: "Rejected",
    date: "March 2025",
    imgSrc: imgSrc3,
  },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [bgImage, setBgImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const bgInputRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        let loggedInId = null;
        const token = localStorage.getItem("access");
        if (token) {
          const decoded = jwtDecode(token);
          loggedInId = decoded.user_id;
          setCurrentUserId(loggedInId);
        }

        const targetUserId = id || loggedInId;

        if (targetUserId) {
          const res = await authApi.getUserProfileById(targetUserId);
          setUserData(res);
          if (res?.background_photo) {
            setBgImage(res.background_photo);
          }
        } else {
          navigate("/auth/login");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id, navigate]);

  const handleBgClick = () => {
    bgInputRef.current.click();
  };

  const handleBgChange = async (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setBgImage(e.target.result);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("background_photo", file);

    try {
      await authApi.updateCurrentUser(formData);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <LoadingSpinner fullScreen={true} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <div className="relative">
        <div
          className="relative w-full min-h-[250px] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage || logo})` }}
        >
          <div className="container mx-auto relative h-full w-full min-h-[250px]">
            <button
              onClick={() => navigate("/")}
              className="absolute top-6 left-4 md:left-0 text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center p-1.5 rounded-full z-10 opacity-70 hover:opacity-100"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleBgClick}
              className="absolute top-6 right-4 md:right-0 bg-white text-[#452798] p-1.5 rounded-lg shadow-xl hover:bg-white/90 transition-all cursor-pointer z-10"
            >
              <i className="text-base fa-regular fa-pen-to-square"></i>
            </button>

            <input
              type="file"
              ref={bgInputRef}
              onChange={handleBgChange}
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>

        <div className="container mx-auto">
          {userData && (
            <ProfileCard
              userData={userData}
              isOwnProfile={!id || String(id) === String(currentUserId)}
            />
          )}
        </div>
      </div>

      <div className="container px-4 mx-auto md:px-6">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 mb-16 sm:grid-cols-2 md:grid-cols-3">
            <FeatureBox
              title="Join the Community"
              desc="Be part of a supportive student community and start your journey with STAR Union."
            />
            <FeatureBox
              title="Attend Workshops"
              desc="Learn practical technical and non-technical skills through hands-on workshops."
            />
            <FeatureBox
              title="Build Your Skills"
              desc="Develop your technical and soft skills with real projects and mentors."
            />
          </div>

          <section className="mb-12">
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6">
              Application Status
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {ApplicationStatus.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  date={item.date}
                  dotColor={
                    item.status === "Accepted"
                      ? "bg-[#03DF20]"
                      : item.status === "Pending"
                        ? "bg-[#FCDD00]"
                        : "bg-[#FF0505]"
                  }
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6">
              My Memberships & Activities
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {userData?.memberships?.length > 0 ? (
                userData.memberships.map((m, index) => (
                  <Card
                    key={m.id || index}
                    title={`${m.committee || "Member"}`}
                    status={m.is_highboard ? "High Board" : "Member"}
                    date={m.year?.split("-")[0] || "N/A"}
                    role={m.role}
                    dotColor="bg-[#03DF20]"
                    // You can add logic here to match logos/images based on committee
                    imgSrc={logo}
                  />
                ))
              ) : (
                <p className="text-lg italic text-white/60">
                  No membership activities records found.
                </p>
              )}
            </div>
          </section>

          <section className="mb-16"></section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
const FeatureBox = ({ title, desc }) => (
  <div className="bg-[#7441FE] p-5 rounded-md text-white shadow-lg relative group cursor-pointer transition-transform hover:scale-[1.02]">
    <h4 className="text-[#FCDD00] font-bold text-lg">{title}</h4>
    <div className="flex items-start justify-between mt-2">
      <p className="pr-4 mt-1 text-sm leading-relaxed opacity-90">{desc}</p>
      <div className="mt-1 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 transition-transform group-hover:translate-x-1"
        >
          <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
    </div>
  </div>
);

const Card = ({ title, status, date, dotColor, imgSrc, rate, role }) => (
  <div className="relative overflow-hidden text-white transition-all border shadow-2xl cursor-pointer rounded-xl group border-white/5">
    <div
      className="transition-transform duration-700 bg-center bg-cover group-hover:scale-110"
      style={{ backgroundImage: `url(${imgSrc || ""})` }}
    >
      <div className="p-8 backdrop-blur-[2px] bg-[#452798]/40 h-full flex flex-col justify-center min-h-[220px]">
        <h4 className="text-[#FCDD00] text-center font-bold text-2xl mb-4 group-hover:scale-105 transition-transform">
          {title}
        </h4>

        <div className="space-y-3 text-lg font-semibold">
          {status && (
            <div className="flex items-center gap-3">
              <span>Status: {status}</span>
              <span
                className={`w-6 h-6 rounded-full ${dotColor || "bg-[#03DF20]"} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              ></span>
            </div>
          )}
          {date && (
            <p className="flex items-center gap-2">
              <span className="opacity-80">Date:</span>
              <span>{date}</span>
            </p>
          )}
          {rate && (
            <p className="flex items-center gap-2">
              <span className="opacity-80">Rate:</span>
              <span className="text-[#FCDD00]">{rate} / 5.0</span>
            </p>
          )}
          {role && (
            <p className="flex items-center gap-2">
              <span className="opacity-80">Role:</span>
              <span>{role}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);
