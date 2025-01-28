import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CircleOrange, Serv2 } from "../../images/imgs"
import { faHandPointer } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

const ProjectDeatils = () => {
  return (
    <>
        <div className="w-full h-[830px] xl:mt-10">
      <div className="md:container h-full flex">
        <div className="w-[60%] max-lg:w-full h-full bg-white relative xl:rounded-tr-[50px] xl:rounded-br-[50px] overflow-hidden">
          <img
            src={CircleOrange}
            alt="img"
            className="absolute rounded-tr-[50px] top-0 right-[-15%] max-md:right-[-30%] opacity-80"
          />
          <img
            src={CircleOrange}
            alt="img"
            className="absolute bottom-[-10%] rotate-90 rounded-t-[50%] right-[-15%] max-md:right-[-30%] opacity-80"
          />
          <div className="w-[70%] flex flex-col gap-10 absolute right-20 max-lg:right-5 max-lg:top-10 top-[60px]">
            <div className="flex flex-col max-lg:w-full gap-8">
              <h1 className="text-5xl max-lg:text-[40px] text-[#333333] font-bold">
                مستودع البر
              </h1>
              <p className="text-lg text-gray-500 font-medium">
              يتم دراسة وضع الاسرة اجتماعياً وتحديد درجة استحقاقها عن طريق البحث الاجتماعي والميداني من قبل باحثات متخصصات ثم يسوق عن طريق علاقات المتبرعين ثم يودع مبلغ الكفالة في الحساب البنكي.
              </p>
            </div>
            
            <div className="w-full max-lg:w-[90%] flex flex-col gap-6">
                <h2 className="text-secondryColor text-xl font-semibold">الشروط اللازمة لتقديم الخدمة:</h2>
                <ul className="list-disc mr-5 flex flex-col gap-3">
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                    <li className="text-gray-500 text-lg font-medium">أن يكون  المتقدم من سكان محافظة جدة</li>
                </ul>
                <div className="flex flex-wrap justify-between mt-20">
                    <div className="w-[49%] mb-5 flex items-center justify-center gap-2 py-4 text-lg text-secondryColor font-semibold bg-slate-100 shadow-md rounded-[50px]">
                        عدد الحالات المقبولة:
                        <span className="text-mainColor">0</span>
                    </div>


                    <div className="w-[49%] mb-5 flex items-center justify-center gap-2 py-4 text-lg text-secondryColor font-semibold bg-slate-100 shadow-md rounded-[50px]">
                        نسبة المبالغ المجمعة:
                        <span className="text-mainColor">0%</span>
                    </div>

                    <div className="w-full flex items-center justify-center gap-2 py-4 text-lg text-secondryColor font-semibold bg-slate-100 shadow-md rounded-[50px]">
                        إجمالي المبالغ المطلوبة:
                        <span className="text-mainColor">1000.00 ريال سعودي</span>
                    </div>

                </div>
            </div>

          </div>
        </div>
        <div className="w-[40%] max-lg:hidden rounded-tl-[50px] rounded-bl-[50px] overflow-hidden">
          <img src={Serv2} alt="project-img" className="size-full object-cover"/>
        </div>
      </div>
    </div>
    <Link to="/make-beneficiary-request" className="w-fit px-10 py-5 mx-auto mt-10 rounded-3xl bg-white shadow-md flex flex-col gap-10">
        <FontAwesomeIcon className="text-[60px] text-white p-5 bg-mainColor opacity-80 rounded-3xl" icon={faHandPointer} />
        <p className="text-2xl text-secondryColor font-bold">طلب الخدمة</p>
    </Link>
    </>
  )
}

export default ProjectDeatils