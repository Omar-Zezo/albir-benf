const PersonalInfo = () => {
  return (
    <div className="container flex flex-col gap-10 rounded-xl bg-white shadow-md p-10">
      <h3 className="text-secondryColor text-3xl font-semibold">البيانات الشخصية</h3>
      <div>
        <form>
          <div className="flex flex-wrap gap-5">

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">الاسم الأول</label>
              <input className="bg-field p-4 text-base rounded-xl outline-none" type="text" placeholder="الأسم الأول"/>
            </div>

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">اسم الأب</label>
              <input className="bg-field p-4 text-base rounded-xl outline-none" type="text" placeholder="الأسم الأول"/>
            </div>

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">اسم العائلة</label>
              <input className="bg-field p-4 text-base rounded-xl outline-none" type="text" placeholder="الأسم الأول"/>
            </div>

          </div>

          <div className="flex flex-wrap gap-5  mt-10">
            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
                <label className="text-base text-secondryColor font-bold pr-2">رقم الجوال</label>
                <input className="bg-field p-4 text-base rounded-xl outline-none" type="text" placeholder="الأسم الأول"/>
            </div>

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 flex flex-col gap-4">
              <label className="text-base text-secondryColor font-bold pr-2">البريد الألكتروني</label>
              <input className="bg-field p-4 text-base rounded-xl outline-none" type="text" placeholder="الأسم الأول"/>
            </div>

          </div>

            <div className="max-md:w-full max-lg:w-[48%] xl:w-1/3 mx-auto flex flex-col gap-4">
              <input className="bg-mainColor text-white font-semibold p-4 text-lg mt-5 rounded-xl outline-none" type="submit" value="حفظ البيانات"/>
            </div>

        </form>
      </div>
    </div>
  )
}

export default PersonalInfo