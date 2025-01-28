import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import ProfileLayout from "./pages/profile/ProfileLayout";
import PersonalInfo from "./pages/profile/PersonalInfo"
import MyFamily from "./pages/profile/MyFamily";
import MyServices from "./pages/profile/MyServices";
import Bonds from "./pages/profile/Bonds";
import ChooseService from "./pages/BeneficiaryRequest/ChooseService";
import TermsAndConditions from "./pages/BeneficiaryRequest/TermsAndConditions";
import FillData from "./pages/BeneficiaryRequest/FillData";
import ProjectDeatils from "./components/Home/ProjectDeatils";
import BeneficiaryRequestLayout from "./pages/BeneficiaryRequest/BeneficiaryRequestLayout";


const router = createBrowserRouter([
  {
    Component: Layout,
    path: "/",
    children : [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "auth/login",
        element: <Login/>
      },
      {
        path: "project-details",
        element: <ProjectDeatils/>
      },
    ]
  },
  {
    Component: ProfileLayout,
    path: "/profile",
    children : [
      {
        index: true,
        element: <PersonalInfo/>
      },
      {
        path: "my-family",
        element: <MyFamily/>
      },
      {
        path: "my-services",
        element: <MyServices/>
      },
      {
        path: "bonds",
        element: <Bonds/>
      },
    ]
  },
  {
    Component: BeneficiaryRequestLayout,
    path: "/make-beneficiary-request",
    children : [
      {
        index: true,
        element: <ChooseService/>
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions/>
      },
      {
        path: "fill-data",
        element: <FillData/>
      },
    ]
  }
])


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
