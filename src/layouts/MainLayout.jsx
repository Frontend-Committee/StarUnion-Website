import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
import LoadingSpinner from '../components/ui/LoadingSpinneer';

export default function MainLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div
      className="relative flex flex-col min-h-screen bg-gradientBg3"
    >
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <ScrollTop />

      <Navbar />
      <main className={`flex-1 ${isNavigating ? "opacity-50 pointer-events-none " : "opacity-100"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}