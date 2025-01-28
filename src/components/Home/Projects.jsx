import { Link } from "react-router-dom";
import { Banner2, Serv2, StoreImg } from "../../images/imgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="relative">
      <img src={Banner2} className="size-full absolute bottom-0 left-0" alt="banner-2"/>
      <div className="container flex max-lg:flex-col max-lg:gap-5 justify-between">
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </section>
  );
};

export default Projects;
