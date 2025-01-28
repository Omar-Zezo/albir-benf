import { NavLink } from "react-router-dom";
import { Close, LogoV } from "../images/svg";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`bottom-nav fixed right-0 top-0 z-50 w-full h-screen bg-white flex flex-col gap-5 items-center justify-start pt-10 ${
        showMenu ? "mr-0" : "mr-[-100%]"
      } duration-300`}
    >
      <img
        width={20}
        height={20}
        src={Close}
        alt="close"
        onClick={() => setShowMenu(false)}
      />
      <img width={250} src={LogoV} alt="logo" className="mt-10" />
      <ul className="flex mobile-menu flex-col mt-10 items-center gap-5">
        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/"}
            onClick={() => setShowMenu(false)}
          >
            الرئيسية
          </NavLink>
        </li>


        <li className="text-black-200 text-xl">
          <NavLink
            end
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/profile"}
            onClick={() => setShowMenu(false)}
          >
            البيانات الشخصية
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/profile/my-family"}
            onClick={() => setShowMenu(false)}
          >
            عائلتي
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/profile/my-services"}
            onClick={() => setShowMenu(false)}
          >
            خدماتي
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/profile/bonds"}
            onClick={() => setShowMenu(false)}
          >
            السندات
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <NavLink
            className="px-8 pt-3 pb-2 font-semibold rounded-lg"
            to={"/make-beneficiary-request"}
            onClick={() => setShowMenu(false)}
          >
            تقديم طلب
          </NavLink>
        </li>

        <li className="text-black-200 text-xl">
          <div
            className="px-8 pt-3 pb-2 font-semibold rounded-lg text-white bg-red-600"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon className="text-xl ml-2" icon={faRightFromBracket} />
            تسجيل الخروج
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
