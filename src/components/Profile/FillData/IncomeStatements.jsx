import {Link} from "react-router-dom"


const IncomeStatements = () => {
  return (
    <div className="z-10">
      <form>
        <div className="flex gap-5 flex-wrap">
          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              الراتب الشهري
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="الراتب الشهري"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              تعريف الراتب
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              راتب التقاعد
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="راتب التقاعد"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              تعريف التقاعد
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              الضمان الإجتماعي
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="الضمان الإجتماعي"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              المشهد الضماني
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              التأمينات الإجتماعية
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="التأمينات الإجتماعية"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              تعريف التأمينات الإجتماعية
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              حساب المواطن
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="حساب المواطن"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              كشف حساب المواطن
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              التأهيل الشامل
            </label>
            <input
              type="number"
              className="bg-field p-4 text-base rounded-xl outline-none"
              placeholder="التأهل الشامل"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              كشف التأهيل الشامل
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              السجل التجاري
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أعزب / باء</option>
              <option value="">متزوج / ة</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to="/make-beneficiary-request/fill-data?tab=family-data"
              className="bg-field  p-4 text-lg text-gray-500 cursor-pointer text-center font-semibold rounded-xl"
            >
              السابق
            </Link>
          </div>

          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to="/make-beneficiary-request/fill-data?tab=housing-data"
              className="bg-mainColor p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
            >
              التالي
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IncomeStatements;
