import { faBell, faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowLeft } from "../../images/svg";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";

const RequestNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full mx-auto max-xl:mt-24  rounded-xl bg-white shadow-md p-5">
      <ul className="w-full mx-auto flex overflow-x-auto pb-2 items-center gap-10">
        <li className="xl:w-1/4">
          <div
            className={`max-xl:w-[200px] flex items-center gap-3 px-3 py-4 rounded-2xl ${
              pathname === "/make-beneficiary-request"
                ? "gradient-orange text-white"
                : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500"
            }`}
          >
            <FontAwesomeIcon className="text-xl" icon={faUser} />
            <p className="text-lg font-medium">إختيار الخدمة</p>
          </div>
        </li>

        <img width={30} src={ArrowLeft} alt="arrow-left" />

        <li className="xl:w-1/4">
          <div
            className={`max-xl:w-[200px] flex items-center gap-3 px-3 py-4 rounded-2xl ${
              pathname === "/make-beneficiary-request/terms-and-conditions"
                ? "gradient-orange text-white"
                : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500"
            }`}
          >
            <FontAwesomeIcon className="text-xl" icon={faBell} />
            <p className="text-lg font-medium">تنويه</p>
          </div>
        </li>

        <img width={30} src={ArrowLeft} alt="arrow-left" />

        <li className="xl:w-1/4">
          <div
            className={`max-xl:w-[200px] flex items-center gap-3 px-3 py-4 rounded-2xl ${
              pathname === "/make-beneficiary-request/fill-data"
                ? "gradient-orange text-white"
                : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faFile} className="text-xl" />
            <p className="text-lg font-medium">ملئ البيانات</p>
          </div>
        </li>

        <img width={30} src={ArrowLeft} alt="arrow-left" />

        <li className="xl:w-1/4">
          <div
            className={`max-xl:w-[200px] flex items-center gap-3 px-3 py-4 rounded-2xl ${
              pathname === "/make-beneficiary-request/finish"
                ? "gradient-orange text-white"
                : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faCircleCheck} className="text-xl" />
            <p className="text-lg font-medium">إنهاء الطلب</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RequestNavigation;
