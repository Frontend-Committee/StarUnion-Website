import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";
export default function MainLayout() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(77,51,152,0.35) 0%, rgba(77,51,152,0) 60%), linear-gradient(to bottom, #1E1A2B 0%, #241352 45%, #4D3398 100%)",
      }}
    >
      <ScrollTop />

      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
