import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Sponsors from "../components/Sponsers";
import UpcomingSection from "../components/UpcomingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <UpcomingSection />
      <Sponsors />
    </div>
  );
}
