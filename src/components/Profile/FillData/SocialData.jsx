import {Link} from "react-router-dom"

const SocialData = () => {
  return (
    <div className="z-10">
      <form>
        <div className="flex gap-5 flex-wrap">
          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              الحالة الإجتماعية
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أعزب / باء</option>
              <option value="">متزوج / ة</option>
            </select>
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              إثبات الحالة الإجتماعية
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              المستوى التعليمي
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أمي</option>
              <option value="">يقرأ ويكتب</option>
            </select>
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              وثيقة التعليم
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              الحالة المهنية
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أمي</option>
              <option value="">يقرأ ويكتب</option>
            </select>
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              إثبات العمل
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>

          <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              هل أنت من منسوبي الضمان الإجتماعي
            </label>
            <select className="bg-field p-4 text-base rounded-xl outline-none">
              <option value="">-- تحديد --</option>
              <option value="">أمي</option>
              <option value="">يقرأ ويكتب</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between mt-10">
          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link to=""
              className="bg-field cursor-not-allowed  p-4 text-lg text-gray-500 opacity-80 text-center font-semibold rounded-xl"
            >السابق</Link>
          </div>

          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to="/make-beneficiary-request/fill-data?tab=family-data"
              className="bg-mainColor p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
            >التالي</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialData;
