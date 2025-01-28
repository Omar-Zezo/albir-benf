import React from 'react'

const MyFamily = () => {
  return (
    <div className="container overflow-x-auto flex flex-col gap-10 rounded-xl bg-white shadow-md p-10 max-xl:px-5">
      <h3 className="text-secondryColor text-3xl font-semibold">عائلتي</h3>
      
      <table
          className={`w-full mt-8 text-zinc-800`}
        >
          <thead>
            <tr className="flex justify-around rounded-t-xl bg-mainColor text-white text-lg max-lg:text-base font-semibold">
              <th className="w-1/6 relative py-5 px-1 after:cell-border">
                الاسم
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                رقم الهوية
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                تاريخ الميلاد
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                العمر
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                العلاقة
              </th>
              <th className="w-1/6 relative text-center py-5 px-3 after:cell-border">
                الجوال
              </th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3,4,5].map((contact, index) => (
              <tr
                key={index}
                className="w-full flex justify-around py-3 px-1  border-b border-x border-gray-400 last-of-type:rounded-b-xl text-lg font-medium"
              >
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                جنى حسام حويكم
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                1146466683
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                2009-04-20
                </td>
                <td className="w-1/6 text-center py-3 relative overflow-hidden text-ellipsis text-nowrap">
                15 سنة
                </td>
                <td className="w-1/6 text-center py-3 px-2 relative overflow-hidden text-ellipsis text-nowrap">
                ابنة
                </td>
                <td className="w-1/6 text-center py-3 px-2 relative overflow-hidden text-ellipsis text-nowrap">
                  44875859559
                </td>
              </tr>
            ))}
          </tbody>
        </table>

    </div>
  )
}

export default MyFamily