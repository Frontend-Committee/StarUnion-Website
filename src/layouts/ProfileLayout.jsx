import { Outlet, useNavigation } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "@/components/common/Footer";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function ProfileLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="relative min-h-screen starry-night-bg">
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <ScrollTop />

      <div
        className={
          isNavigating ? "opacity-50 pointer-events-none " : "opacity-100"
        }
      >
        {/* <div className="container px-6 py-8"> */}

        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}
