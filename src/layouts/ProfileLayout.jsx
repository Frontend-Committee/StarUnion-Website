import { Outlet } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "@/components/common/Footer";

export default function ProfileLayout() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(77,51,152,0.25) 0%, rgba(77,51,152,0) 60%), linear-gradient(to bottom, #1E1A2B 0%, #241352 45%, #4D3398 100%)",
      }}
    >
      <ScrollTop />

      {/* <div className="container px-6 py-8"> */}

          <Outlet />
      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}
