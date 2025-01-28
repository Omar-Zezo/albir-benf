import React, { useState } from "react";
import { CircleOrange, Icon1, LogoService } from "../../images/imgs";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";
import HeroSlidrCards from "./HeroSlidrCards";
import BeneficiariesLogin from "../../utils/BeneficiariesLogin";

const Hero = () => {
const [showLogin, setShowLogin] = useState(false)

  return (
    <header className="w-full h-[830px] xl:mt-10">
      <div className="md:container h-full flex">
        <div className="w-[60%] max-lg:w-full h-full bg-[#DCDCDC] relative xl:rounded-tr-[50px] xl:rounded-br-[50px] overflow-hidden">
          <img
            src={CircleOrange}
            alt="img"
            className="absolute rounded-tr-[50px] top-0 right-[-15%] max-md:right-[-30%] opacity-80"
          />
          <div className="flex flex-col gap-10 absolute right-20 max-lg:right-5 max-lg:top-10 top-[60px]">
            <div className="flex max-lg:flex- max-lg:w-full items-center gap-10">
              <div className="w-[135px] max-lg:w-[85px]">
              <img width={135} height={128} className="object-cover size-full" src={LogoService} alt="logo" />
              </div>
              <h1 className="text-[60px] max-lg:text-[40px] text-[#333333] font-bold">
                أهلا بكم في
              </h1>
            </div>
            <p className="w-[50%] max-lg:text-[30px] max-lg:w-[85%] text-[36px] text-[#333333] font-semibold">
              نظام المستفيدين لجمعية البر بجدة
            </p>
            <div className="w-full max-lg:w-[90%] flex max-lg:flex-col xl:items-center gap-2">
                <div
                  className="w-full cursor-pointer flex items-center gap-2 bg-white hover:bg-secondryColor hover:text-white duration-300 py-1 pr-2 pl-3 rounded-full"
                  onClick={()=> setShowLogin(true)}
                >
                  <img className="size-[48px]" src={Icon1} alt="icon-1" />
                  <p className="text-lg font-semibold">دخول مستفيد</p>
                </div>

              <div className="w-full">
                <Link
                  className="flex items-center gap-2 bg-white hover:bg-secondryColor hover:text-white duration-300 py-1 pr-2 pl-3 rounded-full"
                  to="/auth/login"
                >
                  <img className="size-[48px]" src={Icon1} alt="icon-1" />
                  <p className="text-lg font-semibold">دخول المشرفيين</p>
                </Link>
              </div>
            </div>

            <div className="max-md:w-[350px] w-[620px]">
              <HeroSlidrCards/>
            </div>
          </div>
        </div>
        <div className="w-[40%] max-lg:hidden rounded-tl-[50px] rounded-bl-[50px] overflow-hidden">
          <HeroSlider/>
        </div>
      </div>
      <BeneficiariesLogin showLogin={showLogin} setShowLogin={setShowLogin}/>
    </header>
  );
};

export default Hero;
