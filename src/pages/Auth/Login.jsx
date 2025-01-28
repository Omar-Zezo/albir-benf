import { Link } from "react-router-dom"
import { LoginImg, LogoV } from "../../images/svg"

const Login = () => {
  return (
    <div className="w-full h-fit xl:mt-10">
      <div className="md:container h-full flex">
        <div className="gradient-orange flex justify-center items-center w-[40%] max-lg:hidden rounded-tr-[50px] rounded-br-[50px] overflow-hidden shadow-lg">
          <img width={300} src={LoginImg} alt="login"/>
        </div>
        <div className="w-[60%] max-lg:w-full h-full xl:rounded-bl-[50px] xl:rounded-tl-[50px] bg-gray-100 xl:shadow-lg">
          <div className="w-full flex flex-col gap-10 py-[60px] pr-20 max-lg:pr-5 max-lg:py-10">
            <div className="flex max-lg:flex- max-lg:w-full items-center gap-10">
              <div className="w-[285px]">
              <Link to="/">
              <img className="object-cover size-full" src={LogoV} alt="logo" />
              </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
                <h2 className="max-lg:text-[30px] max-lg:w-[85%] text-[40px] text-[#333333] font-semibold">
                تسجيل الدخول
                </h2>
                <p className="text-lg text-[#808080] font-semibold">
                الرجاء ملئ البيانات لتسجيل الدخول
                </p>
            </div>
            <div className="w-full max-lg:w-[90%] flex flex-col">
                <form className="xl:w-[60%] flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg text-secondryColor font-semibold">البريد الإلكتروني</label>
                        <input type="email" className="p-3 bg-white outline-none border border-gray-300 rounded-xl" placeholder="أدخل البريد الإلكتروني"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg text-secondryColor font-semibold">كلمة المرور</label>
                        <input type="password" className="p-3 bg-white outline-none border border-gray-300 rounded-xl" placeholder="أدخل كلمة المرور"/>
                    </div>
                    <div>
                        <input type="submit" value="تسجيل الدخول" className="w-full p-3 gradient-orange hover:bg-secondryColor duration-300 cursor-pointer text-white font-semibold outline-none rounded-xl" placeholder="أدخل كلمة المرور"/>
                    </div>
                </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Login