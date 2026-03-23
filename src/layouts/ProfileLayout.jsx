import { Outlet, useNavigation } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "@/components/common/Footer";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function ProfileLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 35%, rgba(77,51,152,0.25) 0%, rgba(77,51,152,0) 60%), linear-gradient(to bottom, #1E1A2B 0%, #241352 45%, #4D3398 100%)",
      }}
    >
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <ScrollTop />

      <div
        className={
          isNavigating ? "opacity-50 pointer-events-none" : "opacity-100"
        }
      >
        {/* <div className="container px-6 py-8"> */}

        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}
