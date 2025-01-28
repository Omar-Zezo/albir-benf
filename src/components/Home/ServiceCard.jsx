import { Link } from "react-router-dom"
import { Service1 } from "../../images/imgs"

const ServiceCard = () => {
  return (
    <div className='rounded-3xl pb-5 bg-white'>
            <Link to="/">
            <img src={Service1} alt='service-1' className='w-full h-[240px] object-cover rounded-3xl'/>
            </Link>
            <div className='flex flex-col gap-5 p-6 pb-5 border-b border-black'>
                <h3 className='text-secondryColor text-2xl font-semibold'>متأخرات الايجار</h3>
                <p className='min-h-20 text-base text-[#808080] font-semibold'>
                يتم دراسة وضع الاسرة اجتماعياً وتحديد درجة استحقاقها عن طريق البحث الاجتماعي والميداني من قبل باحثات متخصصات ثم يسوق عن طريق علاقات المتبرعين ثم يودع مبلغ المساعدة عبر منصة ايجار
                </p>
            </div>
            <div className='flex justify-between p-6 pb-2'>
                <Link to="" className='text-lg text-[#808080] hover:text-mainColor duration-300'>أعرف المزيد</Link>
                <Link to="/make-beneficiary-request" className='min-w-[128px] gradient-orange text-white text-base p-2 rounded-xl font-bold flex justify-center items-center hover:bg-secondryColor hover:text-white duration-300'>
                أطلب الأن
                </Link>
            </div>
        </div>
  )
}

export default ServiceCard