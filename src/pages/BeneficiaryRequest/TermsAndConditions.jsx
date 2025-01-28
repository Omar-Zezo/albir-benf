import { Link } from "react-router-dom";
import { Pattern } from "../../images/imgs";

const TermsAndConditions = () => {
  return (
    <div className="container flex flex-col gap-10 my-10 rounded-xl bg-white shadow-md xl:p-10 p-5 relative">
      <img
        src={Pattern}
        alt="pattern"
        className="w-[50%] rounded-t-xl absolute top-0 left-0"
      />
      <h3 className="text-secondryColor z-10 text-3xl font-semibold">تنوية</h3>
      <div className="z-10 flex flex-col gap-5">
        <div className="rounded-lg border p-5 bg-field border-gray-300">
          <div className="flex flex-col gap-4">
            <h2 className="text-secondryColor text-2xl font-semibold">
              الشروط والأحكام
            </h2>
            <p className="text-base text-gray-700 font-medium">
              يتم دراسة وضع الاسرة اجتماعياً وتحديد درجة استحقاقها عن طريق البحث
              الاجتماعي والميداني من قبل باحثات متخصصات ثم يسوق عن طريق علاقات
              المتبرعين ثم يودع مبلغ الكفالة في الحساب البنكي.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <h3 className="text-secondryColor text-xl font-semibold">
              الشروط اللازمة لتقديم الخدمة
            </h3>
            <ul className="flex flex-col gap-4 list-disc mr-5">
              <li className="text-base font-medium">
                أن يكون المتقدم من سكان محافظة جدة
              </li>
              <li className="text-base font-medium">
                ان يكون عائل الأسرة لديه عجز مهني يمنعه عن العمل
              </li>
              <li className="text-base font-medium">
                أن يكون المتقدم أحد الزوجين سعودي الجنسية
              </li>
              <li className="text-base font-medium">
                أن لا يكون للمتقدم أبناء لديهم وظائف
              </li>
              <li className="text-base font-medium">
                أن لا يكون للمتقدم سجل تجاري
              </li>
              <li className="text-base font-medium">
                أن تكون الهوية سارية المفعول
              </li>
              <li className="text-base font-medium">
                أن تكون الاستفادة مرة واحدة فقط لإحدى البرامج
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border p-5 bg-field border-gray-300">
          <div className="flex flex-col gap-4">
            <h2 className="text-secondryColor text-2xl font-semibold">
              الملفات المطلوبة
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <h3 className="text-secondryColor text-xl font-semibold">
              المرفقات المطلوبة للخدمة
            </h3>
            <ul className="flex flex-col gap-4 list-disc mr-5">
              <li className="text-base font-medium">البيانات الأسرية</li>
              <li className="text-base font-medium">بيانات السكن</li>
              <li className="text-base font-medium">البيانات الاجتماعية</li>
              <li className="text-base font-medium">بيانات الدخل</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="w-[48%] flex flex-col gap-4">
          <Link to="/make-beneficiary-request" className="bg-field p-4 text-lg text-gray-500 text-center cursor-pointer font-semibold rounded-xl outline-none">السابق</Link>
          </div>

          <div className="w-[48%] flex flex-col gap-4">
            <Link to="/make-beneficiary-request/fill-data" className="bg-mainColor p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl outline-none">أوافق</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
