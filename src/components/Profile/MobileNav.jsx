import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LogoV } from "../../images/svg"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const MobileNav = ({setShowMenu}) => {
  return (
    <div className='w-full fixed z-50 shadow-sm flex items-center xl:hidden justify-between left-0 px-5 py-2 bg-white'>
        <div className="size-[60px] border flex items-center justify-center border-mainColor rounded-full">
            <div className="size-[55px] rounded-full flex justify-center items-center bg-slate-500">
            <p className="text-2xl text-white font-semibold">OA</p>
            </div>
        </div>
        <div className="w-[150px]">
            <img src={LogoV} alt="logo" className="size-full"/>
        </div>
        <div className="size-12 flex justify-center items-center rounded-lg border border-gray-300"
        onClick={()=> setShowMenu(true)}
        >
        <FontAwesomeIcon className="text-gray-500 text-2xl" icon={faBars} />
        </div>
    </div>
  )
}

export default MobileNav