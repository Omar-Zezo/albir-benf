
const ServiceStatusCard = ({index}) => {
  return (
    <div className="w-48 flex items-center gap-3 p-1 border rounded-2xl bg-gradient-to-l from-white to-[#e6e6e6]">
      <p className="flex justify-center items-center size-10 rounded-xl text-mainColor font-semibold border-2 border-mainColor">
        {index}
      </p>
      <p className="text-base text-zinc-600 font-medium">إستقبال الطلب</p>
    </div>
  );
};

export default ServiceStatusCard;
