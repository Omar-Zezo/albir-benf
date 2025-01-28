import { Paper } from "../../images/imgs";
import { UsersGroup } from "../../images/svg";

const Statistics = () => {
  return (
    <div className="w-full flex max-lg:flex-col max-xl:pt-28 items-center justify-center gap-5">
      <div className="w-1/4 max-lg:w-full min-h-[174px] rounded-md bg-white flex items-center flex-col gap-4 p-6 shadow-md">
        <img src={Paper} alt="document" width={40} height={40} />
        <h3 className="text-base text-gray-700 font-bold">عدد الطلبات</h3>
        <p className="text-mainColor text-2xl font-bold">1</p>
      </div>

      <div className="w-1/4 max-lg:w-full min-h-[174px] rounded-md bg-white flex items-center flex-col gap-4 p-6 shadow-md">
        <img src={Paper} alt="document" width={40} height={40} />
        <h3 className="text-base text-gray-700 font-bold">عدد السندات</h3>
        <p className="text-mainColor text-2xl font-bold">1</p>
      </div>

      <div className="w-1/4 max-lg:w-full min-h-[174px] rounded-md bg-white flex items-center flex-col gap-4 shadow-md">
        <h3 className="w-full py-2 text-base rounded-t-md text-center bg-mainColor text-white font-bold">
          إجمالي المبلغ
        </h3>
        <div className="flex items-center justify-center my-auto gap-1">
          <p className="text-gray-800 text-2xl font-bold">1000.00</p>
          <p className="text-gray-500 text-xs font-bold">ريال سعودي</p>
        </div>
      </div>

      <div className="w-1/4 max-lg:w-full min-h-[174px] rounded-md bg-white flex items-center flex-col gap-4 p-6 shadow-md">
        <img src={UsersGroup} alt="document" width={40} height={40} />
        <h3 className="text-base text-gray-700 font-bold">عدد السندات</h3>
        <p className="text-mainColor text-2xl font-bold">1</p>
      </div>
    </div>
  );
};

export default Statistics;
