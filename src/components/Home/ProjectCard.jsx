import { Link } from "react-router-dom";
import { Serv2 } from "../../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
  return (
    <div className="w-[48%] max-lg:w-full rounded-3xl h-[400px] relative">
      <img
        className="rounded-3xl size-full object-cover absolute"
        src={Serv2}
        alt=""
      />
      <div className="absolute top-0 left-0 size-full bg-black/40 rounded-3xl"></div>
      <div className="w-[90%] max-md:w-[85%] mx-auto flex justify-between absolute bottom-8 right-8">
        <Link
          to=""
          className="text-3xl text-white font-bold hover:text-mainColor duration-300"
        >
          مستودع البر
        </Link>
        <Link
          to="/project-details"
          className="size-[50px] flex items-center justify-center gradient-orange text-white rounded-xl hover:bg-white hover:text-mainColor duration-300"
        >
          <FontAwesomeIcon className="text-[20px]" icon={faArrowLeftLong} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
