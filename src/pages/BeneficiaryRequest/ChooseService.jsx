import { Link } from "react-router-dom";
import { Pattern } from "../../images/imgs";
import { useState } from "react";

const ChooseService = () => {
  const [beneficiary, setBeneficiary] = useState("");

  return (
    <div className="container flex flex-col gap-10 my-10 rounded-xl bg-white shadow-md p-10 relative">
      <img
        src={Pattern}
        alt="pattern"
        className="w-[65%] rounded-t-xl absolute top-0 left-0"
      />
      <h3 className="text-secondryColor z-10 text-3xl font-semibold">
        إختيار الخدمة
      </h3>
      <div className="z-10">
        <form>
          <div className="flex flex-wrap gap-5">
            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                إختيار الخدمة
              </label>
              <select className="bg-field p-4 text-base rounded-xl outline-none">
                <option value="">-- تحديد --</option>
                <option value="">متأخرات إيجار</option>
                <option value="">كفالة أسرة</option>
              </select>
            </div>

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">
                المُستفيد من الخدمة
              </label>
              <select
                className="bg-field p-4 text-base rounded-xl outline-none"
                onChange={(e) => setBeneficiary(e.target.value)}
              >
                <option value="">-- تحديد --</option>
                <option value="me">أنا وعائلتي</option>
                <option value="client">مفوضي / موكلي</option>
              </select>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            {beneficiary !== "" ? (
              beneficiary === "me" ? (
                <div className="max-md:w-full lg:w-2/3 flex flex-col gap-4">
                  <label className="text-base text-secondryColor font-bold pr-2">
                    هوية عائل الأبناء
                  </label>
                  <input
                    type="number"
                    className="bg-field p-4 text-base rounded-xl outline-none"
                    placeholder="هوية عائل الأبناء"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div className="w-full flex flex-wrap gap-5">
                    <div className="max-md:w-full w-[48%] flex flex-col gap-4">
                      <label className="text-base text-secondryColor font-bold pr-2">
                        هوية المستفيد
                      </label>
                      <input
                        type="number"
                        className="bg-field p-4 text-base rounded-xl outline-none"
                        placeholder="هوية عائل الأبناء"
                      />
                    </div>

                    <div className="max-md:w-full w-[48%] flex flex-col gap-4">
                      <label className="text-base text-secondryColor font-bold pr-2">
                        هوية أحد التابعين
                      </label>
                      <input
                        type="number"
                        className="bg-field p-4 text-base rounded-xl outline-none"
                        placeholder="هوية عائل الأبناء"
                      />
                    </div>
                  </div>
                  <p className="text-base text-red-600 font-medium">
                    بإختيارك تقديم طلب فانت تتعهد قانونيا انك مفوض وموكل عن
                    المستفيد من هذا الطلب وتخلي مسؤوليتنا من أي مسائله.
                  </p>
                </div>
              )
            ) : null}
          </div>

          <div className="flex justify-between mt-10">
            <div className="w-[48%] max-xl:w-full mx-auto flex flex-col gap-4">
              <Link
                to="/make-beneficiary-request/terms-and-conditions"
                className="bg-mainColor p-4 text-lg text-white text-center cursor-pointer font-semibold rounded-xl"
              >
                التالي
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChooseService;
