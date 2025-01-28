import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    <div className="w-[350px] xl:w-[300px] bg-white rounded-xl flex flex-col gap-5 py-8 px-5">
      <h3 className="text-secondryColor text-3xl font-medium">
        كفالة يتيم
      </h3>
      <p className="text-base text-[#808080] font-semibold pb-5 border-b border-black description3">
        يتم دراسة وضع الاسرة اجتماعياً وتحديد درجة استحقاقها عن طريق البحث
        الاجتماعي والميداني من قبل
      </p>
      <div className="flex items-center justify-between">
        <Link
          className="text-base text-[#808080] hover:text-mainColor duration-300 font-medium"
          to=""
        >
          أعرف المزيد
        </Link>
        <Link to="/make-beneficiary-request" className="min-w-[128px] flex items-center justify-center rounded-xl p-2 gradient-orange text-white text-base font-bold hover:bg-secondryColor hover:text-white duration-300">
          أطلب الأن
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
