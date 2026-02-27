import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import AboutUsPage from "../features/committees/pages/AboutUsPage";
import HomePage from "../features/home/pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Route>
    </Routes>
  );
}
