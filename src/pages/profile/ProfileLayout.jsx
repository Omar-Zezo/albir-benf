import { Outlet } from "react-router-dom";
import UpperProfile from "../../components/Profile/UpperProfile";
import Navbar from "../../components/Profile/Navbar"
import Statistics from "../../components/Profile/Statistics";
import BottomNavigation from "../../utils/BottomNavigation";
import MobileNav from "../../components/Profile/MobileNav";
import { useState } from "react";
import MobileMenu from "../../utils/MobileMenu";

const ProfileLayout = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="max-xl:pb-20">
      <div className="xl:pt-10">
        <div className="container flex flex-col max-xl:gap-10 gap-20">
          <UpperProfile />
          <MobileNav setShowMenu={setShowMenu}/>
          <Statistics/>
          <Navbar/>
          <Outlet />
        </div>
      </div>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      <BottomNavigation/>
    </div>
  );
};

export default ProfileLayout;
