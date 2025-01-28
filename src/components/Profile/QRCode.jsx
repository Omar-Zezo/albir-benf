import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { QRImg } from "../../images/imgs";

const QRCode = ({ showQR, setShowQR }) => {
  return (
    <div
      className={`size-full bg-black/50 fixed top-0 left-0 ${
        showQR ? "block" : "hidden"
      }`}
    >
      <div className="w-[500px] h-[200px] overflow-y-auto mx-auto mt-10 p-5 flex flex-col gap-4 bg-white rounded-xl">
        <div className="flex justify-between items-center">
          <p className="text-lg text-secondryColor font-medium">
            الرمز الخاص بالموظف #000025
          </p>
          <div
            className="size-8 flex justify-center items-center rounded-full bg-gray-200"
            onClick={() => setShowQR(false)}
          >
            <FontAwesomeIcon
              className="text-sm font-semibold text-zinc-500 cursor-pointer"
              icon={faX}
            />
          </div>
        </div>
        
        <div>
            <img src={QRImg} width={100} height={100} alt="qr-code"/>
        </div>

      </div>
    </div>
  );
};

export default QRCode;
