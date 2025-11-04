import React from 'react'
import Navbar from './Navbar'

export const Header = () => {
  return (
    <div
      className='min-h-screen bg-cover mb-4 bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <Navbar />
      <div className='container  mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
        <h2 className='text-4xl sm:text-6xl md:text-[84px] inline-block font-oswald font-semibold text-nowrap'>ĐỔI MỚI KHÔNG GIAN </h2> <br />
        <h2 className='text-4xl sm:text-6xl md:text-[84px] inline-block font-oswald font-semibold mt-6 text-nowrap'>AN TÂM CHI PHÍ</h2>
        <div className='space-x-6 mt-12'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded font-semibold text-xl'>Dự án</a>
          <a href="#Contact" className='bg-amber-500/90 border border-yellow-600 hover:bg-yellow-600 hover:border-yellow-600 px-8 py-3 rounded font-semibold text-xl'>Liên hệ</a>
        </div>
      </div>
    </div>
  )
}
