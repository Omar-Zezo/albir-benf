import React from "react";
import { LogoService } from "../images/imgs";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0E1726] mt-10">
      <div className="container">
        <div className="pt-20 pb-20 px-3 flex gap-20">
          <div className="flex flex-col w-1/4 gap-8">
            <img width={135} height={128} src={LogoService} alt="logo" />
            <p className="text-xl leading-8 text-white">
              تسعى جمعية البر لاستفادة الأسر من المواد الغذائية لإعداد الإفطار
              في رمضان في بيوتهم
            </p>
            <div className="w-fit flex gap-8">
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faXTwitter}
              />
              <FontAwesomeIcon
                className="text-3xl text-white"
                icon={faLinkedin}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              className="text-xl text-white font-semibold hover:text-mainColor duration-300"
            >
              الرئيسية
            </Link>
            <Link
              to="/"
              className="text-xl text-white font-semibold hover:text-mainColor duration-300"
            >
              تبرع
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
