import { Outlet, useNavigation } from "react-router-dom";
import ScrollTop from "../components/common/ScrollTop";
import Footer from "@/components/common/Footer";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function ProfileLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="relative min-h-screen bg-gradientBg3">
      {isNavigating && <LoadingSpinner fullScreen={true} />}

      <ScrollTop />

      <div
        className={
          isNavigating
            ? "opacity-50 pointer-events-none bg-gradientBg3"
            : "opacity-100"
        }
      >
        {/* <div className="container px-6 py-8"> */}

        <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}
