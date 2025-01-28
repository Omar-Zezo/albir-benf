import { Outlet } from "react-router-dom";
import UpperProfile from "../../components/Profile/UpperProfile";
import BottomNavigation from "../../utils/BottomNavigation";
import RequestNavigation from "../../components/Profile/RequestNavigation";
import MobileNav from "../../components/Profile/MobileNav";
import MobileMenu from "../../utils/MobileMenu";
import { useState } from "react";

const BeneficiaryRequestLayout = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="max-xl:pb-20">
      <div className="xl:pt-10">
        <div className="container flex flex-col xl:gap-20 gap-10">
          <UpperProfile />
          <MobileNav setShowMenu={setShowMenu}/>
          <RequestNavigation />
          <Outlet />
        </div>
      </div>
      <BottomNavigation />
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  );
};

export default BeneficiaryRequestLayout;
