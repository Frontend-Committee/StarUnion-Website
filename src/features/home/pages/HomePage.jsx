import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Sponsors from "../components/Sponsers";
import UpcomingSection from "../components/UpcomingSection";

export default function HomePage() {
  return (
    <div className="container flex flex-col min-h-screen gap-16 py-10">
      <HeroSection />
      <AboutSection />
      <UpcomingSection />
      <Sponsors />
    </div>
  );
}
