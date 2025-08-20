import React from 'react'
import { assets } from '../assets/assets'

export const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto 
    p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-semibold mb-2 font-montserrat'>Giới thiệu
            <span className='underline underline-offset-6 decoration-2 under font-light font-montserrat decoration-orange-400 ml-2'>Minh An</span>
        </h1>
        <p className='text-gray-500 max-w-120 text-center mb-8 '>Giải pháp nội thất tối ưu, đồng hành cùng tổ ấm Việt.</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/>
            <div name="about-info" className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 mb-2">
                    <div className="flex flex-col items-start pr-10">
                        <span className="text-3xl text-gray-800 mb-2 font-bold">10+</span>
                        <span className="font-semibold mb-1 text-sm md:text-base">Năm kinh nghiệm</span>
                        <span className="hidden md:inline text-gray-500 text-sm pr-10">Tư vấn & thi công nội thất chuyên nghiệp</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-3xl text-gray-800 mb-2 font-bold">200+</span>
                        <span className="font-semibold mb-1 text-sm md:text-base">Dự án hoàn thiện</span>
                        <span className="hidden md:inline text-gray-500 text-sm pr-10">Đa dạng phong cách, đáp ứng mọi nhu cầu</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-3xl text-gray-800 mb-2 font-bold">Uy tín</span>
                        <span className="font-semibold mb-1 text-sm md:text-base">Đối tác tin cậy</span>
                        <span className="hidden md:inline text-gray-500 text-sm pr-15">98% khách hàng hài lòng và giới thiệu cho người thân</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-3xl text-gray-800 mb-2 font-bold">Trọn gói</span>
                        <span className="font-semibold mb-1 md:whitespace-nowrap text-sm md:text-base">Tư vấn - Thiết kế - Thi công</span>
                        <span className="hidden md:inline text-gray-500 text-sm pr-15">Đồng hành cùng khách hàng từ A đến Z</span>
                    </div>
                </div>
                <div className="hidden md:inline border-t-2  border-cyan-900 w-12 rounded-full mt-8 mb-1"></div>
                <p className='my-4 max-w-lg '>
                    Minh An chuyên cải tạo và làm mới nội thất trọn gói cho nhà và căn hộ lâu năm, với hình ảnh và video thi công thực tế tạo niềm tin tuyệt đối cho khách hàng.
                </p>
            </div>
           
        </div>
    </div>
  )
}
