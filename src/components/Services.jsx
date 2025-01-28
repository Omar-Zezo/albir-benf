import React from 'react'
import ServicesSlider from './Home/ServicesSlider'

const Services = () => {
  return (
    <section>
        <div className='container flex flex-col gap-10 my-14'>
        <h2 className='text-[36px] max-lg:text-3xl max-lg:pr-5 text-secondryColor font-bold'>كل الخدمات</h2>
        <ServicesSlider/>
        </div>
    </section>
  )
}

export default Services