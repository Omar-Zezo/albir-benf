import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const UserInputs = ({ showUserData, setShowUserData }) => {
    const [showEditIndex, setShowEditIndex] = useState(false)
  return (
    <div
      className={`size-full bg-black/50 fixed top-0 left-0 ${
        showUserData ? "block" : "hidden"
      }`}
    >
      <div className="w-[500px] h-[90%] overflow-y-auto mx-auto mt-10 p-5 flex flex-col gap-4 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <p className="text-lg text-secondryColor font-medium">
            مراجعة الطلب #000025
          </p>
          <div
            className="size-8 flex justify-center items-center rounded-full bg-gray-200"
            onClick={() => setShowUserData(false)}
          >
            <FontAwesomeIcon
              className="text-sm font-semibold text-zinc-500 cursor-pointer"
              icon={faX}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-mainColor p-4 rounded-xl">
          <p className="w-1/3 text-xl text-white font-semibold">الاسم</p>
          <p className="w-1/3 text-xl text-white font-semibold">القيمة</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3 items-center border-b border-gray-300 p-4">
            <p className="w-1/3 text-lg text-secondryColor font-medium">
              الحالة الإجتماعية
            </p>
            <p className="w-1/3 text-lg text-text-secondryColor font-medium">
              أرمل / ة
            </p>
            <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold"
            onClick={()=> setShowEditIndex(true)}
            >
              تعديل
            </button>
          </div>
          <div className={`${showEditIndex ? "block":"hidden"}`}>
            <form className="flex gap-5 justify-center w-full">
                <select className="w-[150px] p-2 border border-gray-400 text-base text-secondryColor font-medium rounded-xl outline-mainColor">
                    <option value="أرمل/ة">أرمل/ة</option>
                </select>
                <div className="w-fit flex gap-2">
                <button type="submit" className="px-3 py-1 rounded-lg bg-green-600 text-white text-base font-semibold">حفظ</button>
                <button type="button" className="px-3 py-1 rounded-lg bg-gray-600 text-white text-base font-semibold"
                onClick={()=> setShowEditIndex(false)}
                >إلغاء</button>
                </div>
            </form>
          </div>
        </div>

        <div className="flex gap-3 items-center border-b border-gray-300 p-4">
          <p className="w-1/3 text-lg text-secondryColor font-medium">
            إثبات الحالة الإجتماعية
          </p>
          <div className="w-1/3 relative text-lg text-text-secondryColor font-medium">
            <label
              htmlFor="uplod-marital"
              className="text-lg text-mainColor font-medium cursor-pointer"
            >
              تحميل الملف
            </label>
            <input id="uplod-marital" className="hidden" type="file" />
          </div>
          <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold">
            تعديل
          </button>
        </div>

        <div className="flex gap-3 items-center border-b border-gray-300 p-4">
          <p className="w-1/3 text-lg text-secondryColor font-medium">
            المستوى التعليمي
          </p>
          <p className="w-1/3 text-lg text-text-secondryColor text-center font-medium">
            أمي
          </p>
          <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold">
            تعديل
          </button>
        </div>

        <div className="flex gap-3 items-center border-b border-gray-300 p-4">
          <p className="w-1/3 text-lg text-secondryColor font-medium">
            وثيقة التعليم
          </p>
          <div className="w-1/3 relative text-lg text-text-secondryColor font-medium">
            <label
              htmlFor="uplod-marital"
              className="text-lg text-mainColor font-medium cursor-pointer"
            >
              تحميل الملف
            </label>
            <input id="uplod-marital" className="hidden" type="file" />
          </div>
          <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold">
            تعديل
          </button>
        </div>

        <div className="flex gap-3 items-center border-b border-gray-300 p-4">
          <p className="w-1/3 text-lg text-secondryColor font-medium">
            الحالة المهنية
          </p>
          <p className="w-1/3 text-lg text-text-secondryColor text-center font-medium">
            موظف
          </p>
          <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold">
            تعديل
          </button>
        </div>

        <div className="flex gap-3 items-center border-b border-gray-300 p-4">
          <p className="w-1/3 text-lg text-secondryColor font-medium">
            إثبات العمل
          </p>
          <div className="w-1/3 relative text-lg text-text-secondryColor font-medium">
            <label
              htmlFor="uplod-marital"
              className="text-lg text-mainColor font-medium cursor-pointer"
            >
              تحميل الملف
            </label>
            <input id="uplod-marital" className="hidden" type="file" />
          </div>
          <button className="px-4 py-2 mr-auto rounded-lg bg-mainColor text-white font-semibold">
            تعديل
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInputs;
