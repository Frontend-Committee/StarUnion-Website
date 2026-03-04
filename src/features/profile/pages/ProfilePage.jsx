import Footer from "@/components/common/Footer";
import ProfileCard from "./../components/ProfileCard";
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
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <div className="relative">
        <div className="relative w-full min-h-[250px] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${logo})` }}
        >

          <i className="fa-solid fa-arrow-up-right-from-square absolute top-6 right-8 rounded size-6 p-1 bg-white text-[#452798] cursor-pointer"></i>
        </div>

        <ProfileCard />
      </div>
      <div className="w-[94%] mx-auto">

        <div className="px-4 mt-8 pb-20">

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
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6  pl-3">Application Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-sm">
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
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6  pl-3">My Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-sm">
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
          <section className="mb-12">
            <h3 className="text-[#FCDD00] font-semibold text-2xl mb-6  pl-3">Attendee Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-sm">
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
          </section>

          

        </div>

      </div>
      <Footer />
    </div>
  );
}


const FeatureBox = ({ title, desc }) => (
  <div className={`bg-[#7441FE] p-5 rounded-xl  text-white shadow-lg relative group cursor-pointer`}>
    <h4 className=" text-[#FCDD00] font-bold">
      {title} <i className="fa-solid bg-transparent text-white fa-circle-arrow-right opacity-0 group-hover:opacity-100 transition-all"></i>
    </h4>
    <p className="mt-2">{desc}</p>
  </div>
);

const Card = ({ title, status, date, dotColor, imgSrc ,rate , role}) => (
  <div className="transition-all hover:scale-[1.003] overflow-hidden rounded-xl text-white shadow-2xl relative group cursor-pointer">
    <div className="group">
      <div
        className="bg-center pointer-events-none transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imgSrc || ""})` }}
      >


      <div className="z-10 p-7 bg-[#7A4BFF4D]">
        <h4 className="text-[#FCDD00] text-center font-semibold text-2xl mb-2">
          {title}
        </h4>
        {status && (
          <p className="text-white font-semibold flex items-center gap-2">
            Status: {status}
            <span className={`w-5 h-5 rounded-full ${dotColor || "bg-[#03DF20]"} shadow-[0_0_10px]`}></span>
          </p>
        )}
        {date && (
          <p className="text-white font-semibold mt-4">
            Date: {date}
          </p>
        )}
        {rate && (
          <p className="text-white font-semibold mt-4">
            Rate: {rate}
          </p>
        )}
        {role && (
          <p className="text-white font-semibold mt-4">
            Role: {role}
          </p>
        )}
      </div>
    </div>
  </div>
        </div>


);

// const ActivityCard = ({ title, role, date }) => (
//   <div className="bg-[#1A0B48] border border-white/5 p-6 rounded-2xl shadow-xl hover:bg-[#22105a] transition-all">
//     <h4 className="text-[#FCDD00] text-sm font-bold mb-1">{title}</h4>
//     <p className="text-white ">Role: {role}</p>
//     <p className="text-white mt-4">Date: {date}</p>
//   </div>
// );