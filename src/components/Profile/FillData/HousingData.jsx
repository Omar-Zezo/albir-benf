import { useState } from "react";
import {Link} from "react-router-dom"

const HousingData = () => {
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="z-10">
      <form>
        <div className="flex gap-5 flex-wrap">
          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              نوع السكن
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أعزب / باء</option>
              <option value="">متزوج / ة</option>
            </select>
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              تكلفة السكن
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="إيجار  / قسط"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              وثيقة السكن
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              صورة المبنى
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              موقع السكن الجغرافي
            </label>
            <div
              className="bg-field flex flex-col gap-1 p-4 text-base cursor-pointer rounded-xl outline-none"
              onClick={() => setShowMap(true)}
            >
              <p className="text-base text-secondryColor font-semibold">
                أضغط هنا لتحديد موقعك الحالي
              </p>
              <p className="text-sm text-gray-600 font-medium">
                عند الضغط على الزر، سيتم أخذ موقعكم الحالي. يُرجى التواجد في محل
                إقامتكم لتسهيل إرسال الموظف بشكل أسرع.
              </p>
            </div>
            <div className={`${showMap ? "block" : "hidden"} bg-slate-300 p-1`}>
              Map
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to="/make-beneficiary-request/fill-data?tab=income-statements"
              className="bg-field  p-4 text-lg text-gray-500 cursor-pointer text-center font-semibold rounded-xl"
            >
              السابق
            </Link>
          </div>

          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to=""
              onClick={(e)=> e.preventDefault()}
              className="bg-mainColor p-4 text-lg cursor-not-allowed text-white text-center opacity-70 font-semibold rounded-xl"
            >
              التالي
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HousingData;
