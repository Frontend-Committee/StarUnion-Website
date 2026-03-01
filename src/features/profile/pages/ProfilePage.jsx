import Footer from "@/components/common/Footer";
import ProfileCard from "./../components/ProfileCard";
import logo from "./../../../assets/images/AboutHero.jpg";
import imgSrc from "./../../../assets/images/ProfilePage/2d3905db88064d93a2ebc114979738c00d8b2df2.jpg"
export default function ProfilePage() {
  return (
    <div className="bg-[#0F0728] min-h-screen font-sans overflow-x-hidden">
      <div className="relative">
        <div className="w-full h-[250px] overflow-hidden relative">
           <img src={logo} className="w-full h-full object-cover brightness-75" alt="Banner" />
           <i className="fa-solid fa-arrow-up-right-from-square absolute top-6 right-8 text-white/50 cursor-pointer"></i>
        </div>

        <ProfileCard />
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
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
          <h3 className="text-[#FCDD00] font-bold text-lg mb-6 uppercase tracking-widest  pl-3">Application Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatusCard title="UI/UX Workshop" status="Accepted" dotColor="bg-green-500" date="March 2025" imgSrc={imgSrc} />
            <StatusCard title="Backend Workshop" status="Pending" dotColor="bg-yellow-500" date="March 2025" imgSrc={imgSrc} />
            <StatusCard title="Frontend Workshop" status="Rejected" dotColor="bg-red-500" date="March 2025" imgSrc={imgSrc} />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-[#FCDD00] font-bold text-lg mb-6 uppercase tracking-widest pl-3">My Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActivityCard title="UI/UX Workshop" role="Attendee" date="March 2025" />
            <ActivityCard title="Tech Awareness Event" role="Organizer" date="January 2025" />
            <ActivityCard title="UX Design Sprint" role="Attendee" date="April 2025" />
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}


const FeatureBox = ({ title, desc }) => (
  <div className={`bg-[#7441FE] p-5 rounded-xl text-white shadow-lg relative group cursor-pointer`}>
    <h4 className=" text-[#FCDD00] font-bold  flex justify-between items-center">
      {title} <i className="fa-solid text-white fa-circle-arrow-right opacity-0 group-hover:opacity-100 transition-all"></i>
    </h4>
    <p className="mt-2">{desc}</p>
  </div>
);

const StatusCard = ({ title, status, dotColor, date, imgSrc }) => (
  <div className="p-[1px] rounded-2xl shadow-xl transition-all hover:scale-[1.02]">
    <div className="p-6 rounded-[inherit] relative overflow-hidden h-full group">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-[#7A4BFF4D] pointer-events-none transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>

      <div className="relative z-10 text-left">
        <h4 className="text-[#FCDD00] text-sm font-bold mb-1 tracking-wide uppercase">
          {title}
        </h4>
        <p className="text-white  flex items-center gap-2">
          Status: {status} 
          <span className={`w-2.5 h-2.5 rounded-full ${dotColor} shadow-[0_0_10px] animate-pulse`}></span>
        </p>
        <p className="text-white mt-4">
          Date: {date}
        </p>
      </div>
    </div>
  </div>
);

const ActivityCard = ({ title, role, date }) => (
  <div className="bg-[#1A0B48] border border-white/5 p-6 rounded-2xl shadow-xl hover:bg-[#22105a] transition-all">
    <h4 className="text-[#FCDD00] text-sm font-bold mb-1">{title}</h4>
    <p className="text-white ">Role: {role}</p>
    <p className="text-white mt-4">Date: {date}</p>
  </div>
);