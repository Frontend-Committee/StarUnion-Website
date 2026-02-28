import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import ProfileLayout from "../layouts/ProfileLayout";

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

import HomePage from "../features/home/pages/HomePage";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";
import OTPVerificationPage from "../features/auth/pages/OTPVerificationPage";

import HighBoardPage from "../features/board/pages/HighBoardPage";

import CommitteesPage from "../features/committees/pages/CommitteesPage";
import CommitteeDetailsPage from "../features/committees/pages/CommitteeDetailsPage";
import AboutUsPage from "../features/about/pages/AboutUsPage";

import ContactUsPage from "../features/contact/pages/ContactUsPage";

import EventsPage from "../features/events/pages/EventsPage";
import EventDetailsPage from "../features/events/pages/EventDetailsPage";

import ProfilePage from "../features/profile/pages/ProfilePage";

import ProjectsPage from "../features/projects/pages/ProjectsPage";
import ProjectDetailsPage from "../features/projects/pages/ProjectDetailsPage";

import ServicesPage from "../features/services/pages/ServicesPage";
import ServiceDetailsPage from "../features/services/pages/ServiceDetailsPage";

import WorkShopsPage from "../features/workshops/pages/WorkShopsPage";
import WorkShopDetailsPage from "../features/workshops/pages/WorkShopDetailsPage";
import NewPasswordPage from "@/features/auth/pages/NewPasswordPage";

const NotFound = () => <div>404 - Not Found</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: PATHS.PUBLIC.ABOUT, element: <AboutUsPage /> },

      { path: PATHS.PUBLIC.COMMITTEES, element: <CommitteesPage /> },
      {
        path: PATHS.PUBLIC.COMMITTEE_DETAILS,
        element: <CommitteeDetailsPage />,
      },

      { path: PATHS.PUBLIC.EVENTS, element: <EventsPage /> },
      { path: PATHS.PUBLIC.EVENT_DETAILS, element: <EventDetailsPage /> },

      { path: PATHS.PUBLIC.PROJECTS, element: <ProjectsPage /> },
      { path: PATHS.PUBLIC.PROJECT_DETAILS, element: <ProjectDetailsPage /> },

      { path: PATHS.PUBLIC.SERVICES, element: <ServicesPage /> },
      { path: PATHS.PUBLIC.SERVICE_DETAILS, element: <ServiceDetailsPage /> },

      { path: PATHS.PUBLIC.WORKSHOPS, element: <WorkShopsPage /> },
      { path: PATHS.PUBLIC.WORKSHOP_DETAILS, element: <WorkShopDetailsPage /> },

      { path: PATHS.PUBLIC.CONTACT, element: <ContactUsPage /> },
      { path: PATHS.PUBLIC.BOARD_HIGH, element: <HighBoardPage /> },
    ],
  },

  {
    path: PATHS.AUTH,
    element: <GuestRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: PATHS.AUTH_PAGES.LOGIN, element: <LoginPage /> },
          { path: PATHS.AUTH_PAGES.REGISTER, element: <RegisterPage /> },
          {
            path: PATHS.AUTH_PAGES.FORGOT_PASSWORD,element: <ForgotPasswordPage />},
          {
            path: PATHS.AUTH_PAGES.NEW_PASSWORD,
            element: <NewPasswordPage />,
          },
          { path: PATHS.AUTH_PAGES.OTP, element: <OTPVerificationPage /> },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <ProfileLayout />,
        children: [{ path: PATHS.PROFILE, element: <ProfilePage /> }],
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);
