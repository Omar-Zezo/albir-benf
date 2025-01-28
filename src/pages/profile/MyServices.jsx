import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceStatusCard from '../../components/Profile/ServiceStatusCard'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserInputs from '../../components/Profile/UserInputs'
import QRCode from '../../components/Profile/QRCode'

const MyServices = () => {
const [selectedIndex, setSelectedIndex] = useState(null)
const [showUserData, setShowUserData] = useState(false)
const [showQR, setShowQR] = useState(false)

  return (
    <div className="container overflow-x-auto flex flex-col gap-10 rounded-xl bg-white shadow-md max-xl:px-5 p-10">
      <div className='flex items-center justify-between'>
        <h3 className="text-secondryColor text-3xl font-semibold">خدماتي</h3>
        <Link to="/make-beneficiary-request" className='py-3 px-4 rounded-xl text-white text-lg font-semibold bg-mainColor hover:opacity-90 duration-300'>تقديم طلب</Link>
      </div>

      <table
          className={`w-full mt-8 text-zinc-800`}
        >
          <thead>
            <tr className="flex justify-around rounded-t-xl bg-mainColor text-white text-lg font-semibold">
              <th className="w-1/6 relative py-5 px-1 after:cell-border">
                رقم الطلب
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                الخدمة
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                المرحلة الحالية
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                الحالة
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                تاريخ الطلب
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                المتابعة
              </th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5].map((contact, index) => (
              <div>
              <tr
                key={index}
                className="flex justify-around py-3 px-1  border-b border-x last-of-type:rounded-b-xl border-gray-400 text-lg font-medium"
              >
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                #000025
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                كفالة أسرة
                </td>
                <td className="w-1/6 text-center py-3 relative cursor-pointer overflow-hidden text-ellipsis text-nowrap after:status-arrow">
                <div className='flex justify-center items-center'
                onClick={()=> {
                    if(selectedIndex === index){
                        setSelectedIndex(null)
                    }else{
                        setSelectedIndex(index)
                    }
                }}
                >
                <p className='relative overflow-hidden text-ellipsis text-nowrap'>استقبال الطلب</p>
                {
                    selectedIndex === index ? (
                        <FontAwesomeIcon className='mr-3' icon={faChevronUp}/>
                    ):(
                        <FontAwesomeIcon className='mr-3' icon={faChevronDown} />
                    )
                }
                </div>
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                مقبول
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                منذ 6 أيام
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                <div className='flex items-center gap-3 overflow-x-auto max-xl:pb-2'>
                    <button className='p-2 bg-mainColor rounded-lg text-white text-base font-semibold'
                    onClick={()=> setShowUserData(true)}
                    >
                    المدخلات
                    </button>
                    <button className='p-2 bg-mainColor rounded-lg text-white text-base font-semibold'
                    onClick={()=> setShowQR(true)}
                    >QR Code</button>
                </div>
                </td>
              </tr>
              <div className={`w-full p-5 ${selectedIndex === index ? "flex":"hidden"} flex-wrap items-center gap-3 border-b border-x border-gray-400`}>
                {
                    [1,2,3,4,5,6, 7].map((state, index)=>(
                    <ServiceStatusCard index={index + 1}/>
                    ))
                }
              </div>
              </div>
            ))}
          </tbody>
        </table>
        <UserInputs showUserData={showUserData} setShowUserData={setShowUserData}/>
        <QRCode showQR={showQR} setShowQR={setShowQR}/>
    </div>
  )
}

export default MyServices