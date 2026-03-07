import Footer from "@/components/common/Footer";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./../components/ProfileCard";
import HorizontalScrollSection from "@/components/common/HorizontalScrollSection";
import logo from "./../../../assets/images/AboutHero.jpg";
import imgSrc1 from "./../../../assets/images/ProfilePage/2d3905db88064d93a2ebc114979738c00d8b2df2.jpg";
import imgSrc2 from "./../../../assets/images/ProfilePage/36665f265adb2a4b8feaa41ec7a2b361cd2989fa.jpg";
import imgSrc3 from "./../../../assets/images/ProfilePage/4614abb8f38efe719a43dfd420bb46d90a34ae8f.jpg";
const ApplicationStatus = [
  { title: "UI/UX Workshop", status: "Accepted", date: "March 2025", imgSrc:imgSrc1 },
  { title: "Backend Workshop", status: "Pending", date: "March 2025",imgSrc:imgSrc2 },
  { title: "Frontend Workshop", status: "Rejected", date: "March 2025", imgSrc:imgSrc3 },
]
const myActivities = [
  { title: "UI/UX Workshop", role: "Attendee", date: "March 2025" , imgSrc:imgSrc3},
  { title: "Tech Awareness Event", role: "Organizer", date: "March 2025",imgSrc:imgSrc1 },
  { title: "UX Design Sprint", role: "Attendee", date: "April 2025" , imgSrc:imgSrc2},
]
const attendedSessions = [
  { title: "Figma", date: "March 2025", imgSrc:imgSrc2 ,rate:4.5},
  { title: "wireframe", date: "March 2025",imgSrc:imgSrc1 ,rate:4.5},
  { title: "Basic Design", date: "April 2025", imgSrc:imgSrc3,rate:4.5 },
]
export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <div className="relative">
        <div className="relative w-full min-h-[250px] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className="container mx-auto relative h-full w-full min-h-[250px]">
            <button 
              onClick={() => navigate("/")}
              className="absolute top-6 left-4 md:left-0 text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center p-1.5 rounded-full z-10 opacity-70 hover:opacity-100"
              aria-label="Go back"
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
            <button className="absolute top-6 right-4 md:right-0 bg-white text-[#452798] p-1.5 rounded-lg shadow-xl hover:bg-white/90 transition-all cursor-pointer z-10">
              <i className="fa-regular fa-pen-to-square text-base"></i>
            </button>
          </div>
        </div>

        <div className="container mx-auto">
          <ProfileCard />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6">

        <div className="mt-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
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
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6">Application Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-sm">
              {ApplicationStatus.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  date={item.date}
                  dotColor={
                    item.status === "Accepted" ? "bg-[#03DF20]" :
                      item.status === "Pending" ? "bg-[#FCDD00]" :
                        "bg-[#FF0505]"
                  }
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6">My Activities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-sm">
              {myActivities.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  date={item.date}
                  role={item.role}
                  dotColor={
                    item.status === "Accepted" ? "bg-[#03DF20]" :
                      item.status === "Pending" ? "bg-[#FCDD00]" :
                        "bg-[#FF0505]"
                  }
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>  
          </section>
          <section className="mb-16">
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6">Attendee Sessions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-sm">
              {attendedSessions.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  date={item.date}
                  rate={item.rate}
                  dotColor={
                    item.status === "Accepted" ? "bg-[#03DF20]" :
                      item.status === "Pending" ? "bg-[#FCDD00]" :
                        "bg-[#FF0505]"
                  }
                  imgSrc={item.imgSrc}
                />
              ))}
            </div>
            <div className="icon text-center mt-10">
              <i className="fa-solid fa-chevron-down fa-2xl text-[#FCDD00] cursor-pointer animate-bounce"></i>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const FeatureBox = ({ title, desc }) => (
  <div className="bg-[#7441FE] p-5 rounded-md text-white shadow-lg relative group cursor-pointer transition-transform hover:scale-[1.02]">
    <h4 className="text-[#FCDD00] font-bold text-lg">{title}</h4>
    <div className="flex mt-2 items-start justify-between">
      <p className="mt-1 opacity-90 text-sm leading-relaxed pr-4">{desc}</p>
      <div className="shrink-0 mt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 group-hover:translate-x-1 transition-transform"
        >
          <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
    </div>
  </div>
);

const Card = ({ title, status, date, dotColor, imgSrc, rate, role }) => (
  <div className="transition-all overflow-hidden rounded-xl text-white shadow-2xl relative group cursor-pointer border border-white/5">
    <div 
      className="bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
      style={{ backgroundImage: `url(${imgSrc || ""})` }}
    >
      <div className="p-8 backdrop-blur-[2px] bg-[#452798]/40 h-full flex flex-col justify-center min-h-[220px]">
        <h4 className="text-[#FCDD00] text-center font-bold text-2xl mb-4 group-hover:scale-105 transition-transform">
          {title}
        </h4>
        
        <div className="space-y-3 font-semibold text-lg">
          {status && (
            <div className="flex items-center gap-3">
              <span>Status: {status}</span>
              <span className={`w-6 h-6 rounded-full ${dotColor || "bg-[#03DF20]"} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}></span>
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