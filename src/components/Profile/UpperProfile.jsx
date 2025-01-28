import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { LogoH } from "../../images/imgs";

const UpperProfile = () => {
  return (
    <div className="flex max-xl:hidden justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="flex justify-center items-center size-[112px] border border-mainColor rounded-full">
          <div className="flex items-center justify-center text-4xl text-white font-semibold bg-slate-400 size-[105px] rounded-full">
            OA
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-base text-secondryColor">مرحبا بك</p>
          <p className="text-3xl font-semibold text-secondryColor">
            مشاعل الدوسري
          </p>
          <p className="text-[#808080] text-base font-semibold mt-1">
            966540936802
          </p>
        </div>
      </div>
      <div className="w-[285px] h-20">
        <Link to="/">
          <img src={LogoH} alt="logo" className="size-full object-cover" />
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <div className="size-[64px] rounded-3xl text-mainColor hover:text-white hover:bg-secondryColor duration-300 bg-white flex justify-center items-center">
          <Link to="">
            <FontAwesomeIcon className="text-3xl" icon={faRightFromBracket} />
          </Link>
        </div>
        <div className="size-[64px] text-mainColor hover:text-white cursor-pointer rounded-3xl hover:bg-secondryColor duration-300 bg-white flex justify-center items-center">
          <FontAwesomeIcon className="text-3xl" icon={faUser} />
        </div>
      </div>
    </div>
  );
};

export default UpperProfile;
