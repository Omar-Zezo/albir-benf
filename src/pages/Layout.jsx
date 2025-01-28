import { Outlet } from "react-router-dom"
// import Footer from "../utils/Footer"
import BottomNavigation from "../utils/BottomNavigation"

const Layout = () => {
  return (
    <div>
    <Outlet/>
    {/* <Footer/> */}
    <BottomNavigation/>
    </div>
  )
}

export default Layout