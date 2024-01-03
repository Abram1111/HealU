import RouteModel from "./RouteModel";
import AppRoutes from "./AppRoutes";
import { ReactElement } from "react";
import { Route } from "react-router-dom";
import LandingPage from "../../modules/landing-page/pages";
import DentalClinicPortal from "../../modules/clinics-portals/dental/pages";
import DermatologyClinicPortal from "../../modules/clinics-portals/dermatology/pages";
import NutritionClinicPortal from "../../modules/clinics-portals/nutrition/pages";
import OphthalmologyClinicPortal from "../../modules/clinics-portals/ophthalmology/pages";
import PediatricClinicPortal from "../../modules/clinics-portals/pediatric/pages";
import PatientPortal from "../../modules/patient-portal/pages/profile-page";
import AdminPortal from "../../modules/admin-portal";
import Analytics from "../../modules/admin-portal/pages/analytics";
import Login from "../../modules/auth/pages";
import AppointmentsPage from "../../modules/patient-portal/pages/appointments-page";
import PreviousAppointments from "../../modules/patient-portal/pages/appointments";
import AboutUs from "../../modules/landing-page/pages/AboutUs";
import ContactUs from "../../modules/landing-page/pages/ContactUs";
import SecondaryLayout from "../../modules/landing-page/layouts/SecondaryLayout";
import Signup from "../../modules/user/pages/signup/SignUp";

class Router {
  static readonly routes: RouteModel[] = [
    {
      path: AppRoutes.home,
      element: <LandingPage />,
    },
    {
      path: AppRoutes.aboutUs,
      element: (
        <SecondaryLayout>
          {" "}
          <AboutUs />{" "}
        </SecondaryLayout>
      ),
    },
    {
      path: AppRoutes.contactUs,
      element: (
        <SecondaryLayout>
          {" "}
          <ContactUs />{" "}
        </SecondaryLayout>
      ),
    },
    {
      path: AppRoutes.clinicDental,
      element: <DentalClinicPortal />,
    },
    {
      path: AppRoutes.clinicDermatology,
      element: <DermatologyClinicPortal />,
    },
    {
      path: AppRoutes.clinicNutrition,
      element: <NutritionClinicPortal />,
    },
    {
      path: AppRoutes.clinicOphthalmolgy,
      element: <OphthalmologyClinicPortal />,
    },
    {
      path: AppRoutes.clinicPediatric,
      element: <PediatricClinicPortal />,
    },
    {
      path: AppRoutes.patientPortalProfile,
      element: <PatientPortal />,
    },
    {
      path: AppRoutes.patientPortalAppointments,
      element: <AppointmentsPage />,
    },
    {
      path: AppRoutes.patientPortalPreviousAppointments,
      element: <PreviousAppointments />,
    },
    {
      path: AppRoutes.adminPortal,
      element: <AdminPortal />,
    },
    {
      path: AppRoutes.login,
      element: <Login />,
    },
    {
      path: AppRoutes.signup,
      element: <Signup />,
    },
    {
      path: AppRoutes.Analytics,
      element: <Analytics />,
    },
  ];

  static getRoutes(): ReactElement[] {
    return Router.routes.map((route: RouteModel) => {
      return Router.handelRoutes(route);
    });
  }

  private static handelRoutes(route: RouteModel): ReactElement {
    // check if route has children
    if (route.children) {
      return (
        // return route with children
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children.map((child: RouteModel) => {
            // check if child has children
            return Router.handelRoutes(child);
          })}
        </Route>
      );
    } else {
      return (
        // return route without children
        <Route key={route.path} path={route.path} element={route.element} />
      );
    }
  }
}

export default Router;
