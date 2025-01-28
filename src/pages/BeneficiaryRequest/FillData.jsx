import { Pattern } from "../../images/imgs";
import FillDataNav from "../../components/Profile/FillData/FillDataNav";
import SocialData from "../../components/Profile/FillData/SocialData";
import { useEffect, useState } from "react";
import FamilyData from "../../components/Profile/FillData/FamilyData";
import IncomeStatements from "../../components/Profile/FillData/IncomeStatements";
import HousingData from "../../components/Profile/FillData/HousingData";
import { useSearchParams } from "react-router-dom";

const FillData = () => {
const [tab, setTab] = useState("socialData");

    const [searchParams] = useSearchParams()
    const tabParam = searchParams.get("tab")

    useEffect(()=>{
      if(tabParam){
        setTab(tabParam)
      }
    },[tabParam])

  return (
    <div className="container flex flex-col gap-10 my-10 rounded-xl bg-white shadow-md p-10 relative">
      <img
        src={Pattern}
        alt="pattern"
        className="w-[50%] rounded-t-xl absolute top-0 left-0"
      />

      <div className="flex flex-col gap-8 z-10">
        <h3 className="text-secondryColor z-10 text-3xl font-semibold">
          ملئ البيانات
        </h3>
        <FillDataNav tab={tab} setTab={setTab}/>
      </div>

      {
        tab === "socialData" ? (
            <SocialData />
        ):(
            tab === "family-data" ? (
            <FamilyData />
            ):(
                tab === "income-statements" ? (
                    <IncomeStatements/>
                ):(
                    tab === "housing-data" ? (
                        <HousingData/>
                    ):null
                )
            )
        )
      }
    </div>
  );
};

export default FillData;
