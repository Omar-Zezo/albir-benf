import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Auth } from '../images/imgs'

const BeneficiariesLogin = ({showLogin, setShowLogin}) => {

  return (
    <div className={`fixed top-0 left-0 z-50 ${showLogin ? "flex":"hidden"} justify-center items-center size-full bg-black/70`}>
        <div className='bg-white pb-5 w-[500px] rounded-xl'>
            <div className='flex items-center justify-between px-4 py-5 rounded-t-xl bg-gray-200'>
                <p className='text-xl text-secondryColor font-bold'>دخول / تسجيل</p>
                <FontAwesomeIcon className='text-xl text-zinc-500 cursor-pointer' icon={faX} 
                onClick={()=> setShowLogin(false)}
                />
            </div>
            <div className='flex flex-col items-center gap-2 mt-5'>
                <p className='text-xl text-secondryColor'>رقم الجوال</p>
                <form className='flex flex-col gap-2 w-full px-4'>
                    <input type='number' className='w-full p-3 rounded-md border border-mainColor' placeholder='أدخل رقم الجوال'/>
                    <img width={40} height={20} src={Auth} alt='absheer'/>
                    <p className='w-[80%] text-base text-[#808080] font-medium'>سوف يتم التحقق من البيانات التي أدخلتها بواسطة منصة أبشر ووزارة الداخلية</p>
                    <input type='submit' value="إرسال رمز التحقق" className='w-full p-3 rounded-md text-white font-semibold cursor-pointer gradient-orange hover:bg-secondryColor duration-300'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BeneficiariesLogin