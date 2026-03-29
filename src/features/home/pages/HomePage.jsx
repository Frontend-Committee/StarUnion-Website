import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Sponsors from "../components/Sponsers";
import UpcomingSection from "../components/UpcomingSection";

export default function HomePage() {
  return (
    <div className="container min-h-screen flex flex-col gap-20 mb-20">
      <HeroSection />
      <AboutSection />
      <UpcomingSection />
      <Sponsors />
    </div>
  );
}
