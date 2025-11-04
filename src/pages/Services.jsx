import React from "react";
import { assets, SERVICES } from "../assets/assets";

export const Services = () => {
  return (
    <section
      id="Services"
      className="w-full  bg-white py-16 px-4 md:px-0 flex justify-center"
    >
      <div className="max-w-7xl p-6 w-full flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Bên trái: Thông tin, mô tả */}
        <div className="w-full md:w-1/3 flex flex-col justify-start">
          <p className="tracking-widest text-gray-500 mb-2 text-base mt-[40px]">
            DỊCH VỤ CỦA CHÚNG TÔI
          </p>
          <h2 className="text-5xl font-bold mb-6 text-gray-900">DỊCH VỤ</h2>
          <p className="mb-6 text-gray-600 text-lg subtitle-mobile-90">
            M.A Renovation cung cấp dịch vụ cải tạo – thi công nội thất trọn
            gói, giúp không gian cũ trở nên mới mẻ, tiện nghi và phù hợp với
            ngân sách. Chúng tôi đồng hành cùng gia chủ từ tư vấn đến hoàn
            thiện, mang lại sự an tâm trong từng hạng mục.
          </p>
          <div className="text-start mt-8 hidden md:inline-block">
            <button href="#Contact" className="bg-amber-500/90 hover:bg-amber-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow transition">
              Nhận tư vấn
            </button>
          </div>
        </div>

        {/* Bên phải: danh sách dịch vụ */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-sm flex flex-col items-center py-10 px-6 text-center transition hover:shadow-lg group cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mb-4 text-yellow-400 group-hover:scale-110 transition"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1 mt-3">
                {item.title}
              </h3>
              <p className="text-gray-500 des-mobile-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
