import { useNavigate } from "react-router-dom";

const FillDataNav = ({tab, setTab}) => {
  const navigate = useNavigate()

  return (
    <ul className="w-full mx-auto flex flex-wrap items-center gap-5">
      <li className="w-[23%] max-xl:w-full">
        <div
          className={`w-full flex items-center gap-3 px-3 py-4 border border-gray-200 rounded-2xl ${
            tab === "socialData"
              ? "gradient-orange text-white border-transparent"
              : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500 border-gray-200"
          } cursor-pointer`}
          onClick={() =>{
            setTab("socialData")
            navigate('?tab=socialData')
          }}
        >
          <p className="text-lg font-medium">البيانات الإجتماعية</p>
        </div>
      </li>

      <li className="w-[23%] max-xl:w-full">
        <div
          className={`w-full flex items-center gap-3 px-3 py-4 border border-gray-200 rounded-2xl ${
            tab === "family-data"
              ? "gradient-orange text-white border-transparent"
              : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500 border-gray-200"
          } cursor-pointer`}
          onClick={() =>{
            setTab("family-data")
            navigate('?tab=family-data')
          }}
        >
          <p className="text-lg font-medium">التكوين الأسري</p>
        </div>
      </li>

      <li className="w-[23%] max-xl:w-full">
        <div
          className={`w-full flex items-center gap-3 px-3 py-4 border border-gray-200 rounded-2xl ${
            tab === "income-statements"
              ? "gradient-orange text-white border-transparent"
              : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500 border-gray-200"
          } cursor-pointer`}
          onClick={() =>{
            setTab("income-statements")
            navigate('?tab=income-statements')
          }}
        >
          <p className="text-lg font-medium">بيانات الدخل</p>
        </div>
      </li>

      <li className="w-[23%] max-xl:w-full">
        <div
          className={`w-full flex items-center gap-3 px-3 py-4 border rounded-2xl ${
            tab === "housing-data"
              ? "gradient-orange text-white border-transparent"
              : "bg-gradient-to-l from-white to-[#e6e6e6] text-gray-500 border-gray-200"
          } cursor-pointer`}
          onClick={() => {
            setTab("housing-data")
            navigate('?tab=housing-data')
          }
          }
        >
          <p className="text-lg font-medium">بيانات السكن</p>
        </div>
      </li>
    </ul>
  );
};

export default FillDataNav;
