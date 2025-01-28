import {Link} from "react-router-dom"


const FamilyData = () => {
    return (
      <div className="z-10">
        <form>
          <div className="flex gap-5 flex-wrap">
            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                اسم الزوج
              </label>
              <input type="text" className="bg-field p-4 text-base rounded-xl outline-none" placeholder="اسم الزوج"/>
            </div>
  
  
            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                جنسية الزوج
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">أمي</option>
                <option value="">يقرأ ويكتب</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                وظيفة الزوج
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">أمي</option>
                <option value="">يقرأ ويكتب</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                اسم الزوجة
              </label>
              <input type="text" className="bg-field p-4 text-base rounded-xl outline-none" placeholder="اسم الزوجة"/>
            </div>
  
  
            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                جنسية الزوجة
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">أمي</option>
                <option value="">يقرأ ويكتب</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                وظيفة الزوجة
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">أمي</option>
                <option value="">يقرأ ويكتب</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                عدد أفراد الأسرة كاملة
              </label>
              <input type="number" className="bg-field p-4 text-base rounded-xl outline-none" placeholder="عدد أفراد الأسرة كاملة"/>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                عدد الأبناء تحت سن 24
              </label>
              <input type="number" className="bg-field p-4 text-base rounded-xl outline-none" placeholder="عدد الأبناء تحت سن 24"/>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                هل تملك أبناء عاملين؟
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">أمي</option>
                <option value="">يقرأ ويكتب</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-1/2 xl:w-1/4 grow flex flex-col gap-4">
            <label className="text-base text-secondryColor font-bold pr-2">
              كارت العائلة
            </label>
            <input
              type="file"
              className="bg-field p-4 text-base rounded-xl outline-none"
            />
          </div>
  
            
          </div>
  
          <div className="flex flex-wrap gap-5 justify-between mt-10">
          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link to="/make-beneficiary-request/fill-data?tab=socialData"
              className="bg-field  p-4 text-lg text-gray-500 cursor-pointer text-center font-semibold rounded-xl"
            >السابق</Link>
          </div>

          <div className="max-md:w-full max-lg:w-[48%] grow flex flex-col gap-4">
            <Link
              to="/make-beneficiary-request/fill-data?tab=income-statements"
              className="bg-mainColor p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
            >التالي</Link>
          </div>
        </div>
        </form>
      </div>
    );
  };
  
  export default FamilyData;
  