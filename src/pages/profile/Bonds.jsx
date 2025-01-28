import { useState } from "react";
import QRCode from "../../components/Profile/QRCode";

const Bonds = () => {
const [showQR, setShowQR] = useState(false)

  return (
    <div className="container overflow-x-auto flex flex-col gap-10 rounded-xl bg-white shadow-md p-10 max-xl:p-5">
      <h3 className="text-secondryColor text-3xl font-semibold">السندات</h3>

      <table className={`w-full mt-8 text-zinc-800`}>
        <thead>
          <tr className="flex justify-around rounded-t-xl bg-mainColor text-white text-lg font-semibold">
            <th className="w-1/6 relative py-5 px-1 after:cell-border">
              رقم السند
            </th>
            <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
              المستحق
            </th>
            <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
              معدل التكرار
            </th>
            <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
              عدد الدفعات
            </th>
            <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
              تاريخ الإنشاء
            </th>
            <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
              الحالة
            </th>
            <th className="w-[300px] relative text-center py-5 px-3 after:cell-border">
              متابعة
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((contact, index) => (
            <tr
              key={index}
              className="flex justify-around py-3 px-1  border-b border-x border-gray-400 last-of-type:rounded-b-xl text-lg font-medium"
            >
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                #000025
              </td>
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                1000 ريال سعودي
              </td>
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                مرة واحدة
              </td>
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                1
              </td>
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                منذ 6 أيام
              </td>
              <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                معلق
              </td>
              <td className="w-[300px] text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                <div className=" flex items-center justify-center gap-3">
                  <button className="p-2 bg-mainColor rounded-lg text-white text-base font-semibold">
                    عرض
                  </button>
                  <button className="p-2 bg-mainColor rounded-lg text-white text-base font-semibold"
                  onClick={()=> setShowQR(true)}
                  >
                    QR Code
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <QRCode showQR={showQR} setShowQR={setShowQR}/>
    </div>
  );
};

export default Bonds;
