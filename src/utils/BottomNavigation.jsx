import { NavLink } from "react-router-dom";
import { CustomerService, Donate, Home, Services, User } from "../images/svg";

const BottomNavigation = () => {

  return (
    <div className="xl:w-[70%] xl:right-1/2 xl:translate-x-[-20%] xl:mt-10 xl:mb-5 xl:rounded-[50px] max-xl:fixed bottom-0 left-0 z-30 w-full py-2 px-3 gradient-gray">
      <ul className="list-none bottom-nav w-full flex items-center justify-around">
      <li className="relative" onClick={() => setOpenSearch(true)}>
          <NavLink to="/" className="block p-2 rounded-full duration-300">
          <img width={25} height={25} src={Home} alt={"services"} />
          </NavLink>
        </li>
        <li className="relative" onClick={() => setOpenSearch(true)}>
          <NavLink to="/profile" className="block p-2 rounded-full duration-300">
          <img width={25} height={25} src={User} alt={"CustomerService"} />
          </NavLink>
        </li>
        <li className="relative" onClick={() => setOpenSearch(true)}>
          <NavLink to="/b" className="block p-2 rounded-full duration-300">
          <img width={25} height={25} src={CustomerService} alt={"CustomerService"} />
          </NavLink>
        </li>
        <li className="relative" onClick={() => setShowMenu(true)}>
          <NavLink to="/make-beneficiary-request" className="p-2 block rounded-full duration-300">
          <img width={30} height={30} src={Donate} alt={"donate"} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigation;
