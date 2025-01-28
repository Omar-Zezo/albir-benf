import { NavLink } from 'react-router-dom'
import { Paper } from '../../images/imgs'
import { Services2, UsersGroup } from '../../images/svg'

const Navbar = () => {
  return (
    <div className="w-full max-w-6xl overflow-x-auto mx-auto rounded-xl bg-white shadow-md p-5">
    <ul className="profile-nav w-fit mx-auto flex  gap-10 max-xl:gap-5">
        <li className='min-w-[200px]'>
            <NavLink end to="/profile" className="flex items-center gap-2 p-2 font-semibold hover:bg-gray-100 duration-300 rounded-md bg-gradient-to-l from-white to-[#e6e6e6]">
            <div className="p-2 bg-white rounded-full">
            <img src={Paper} width={20} height={20}/>
            </div>
            <p className="text-base text-gray-700 font-medium">البيانات الشخصية</p>
            </NavLink>
        </li>

        <li className='min-w-[200px]'>
            <NavLink to="/profile/my-family" className="flex items-center gap-2 p-2 font-semibold hover:bg-gray-100 duration-300 rounded-md bg-gradient-to-l from-white to-[#e6e6e6]">
            <div className="p-2 bg-white rounded-full">
            <img src={UsersGroup} width={25} height={25}/>
            </div>
            <p className="text-base text-gray-700 font-medium">عائلتي</p>
            </NavLink>
        </li>

        <li className='min-w-[200px]'>
            <NavLink to="/profile/my-services" className="flex items-center gap-2 p-2 font-semibold rounded-md hover:bg-gray-100 duration-300 bg-gradient-to-l from-white to-[#e6e6e6]">
            <div className="p-2 bg-white rounded-full">
            <img src={Services2} width={25} height={25}/>
            </div>
            <p className="text-base text-gray-700 font-medium">خدماتي</p>
            </NavLink>
        </li>

        <li className='min-w-[200px]'>
            <NavLink to="/profile/bonds" className="flex items-center gap-2 font-semibold hover:bg-gray-100 duration-300 p-2 rounded-md bg-gradient-to-l from-white to-[#e6e6e6]">
            <div className="p-2 bg-white rounded-full">
            <img src={Paper} width={20} height={20}/>
            </div>
            <p className="text-base text-gray-700 font-medium">السندات</p>
            </NavLink>
        </li>

    </ul>
</div>
  )
}

export default Navbar