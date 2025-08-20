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
      <div className='container text-center  mx-auto py-4 px-6 md:px-20 lg:px-32 text-white relative'>
        <h2 className='text-4xl sm:text-6xl md:text-[60px] inline-block max-w-3xl font-semibold pt-20'>Nâng tầm không gian sống của bạn</h2>
        <div className='space-x-6 mt-12'>
          <a href="" className='border border-white px-8 py-3 rounded'>Dự án</a>
          <a href="" className='bg-orange-500 px-8 py-3 rounded'>Liên hệ</a>
        </div>
      </div>
    </div>
  )
}
