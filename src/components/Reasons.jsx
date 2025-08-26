import React from "react";
import { assets, SERVICES } from "../assets/assets";

export const Reasons = () => {
  const reasons = [
    {
      title: "Kế hoạch rõ ràng",
      desc: "Tư vấn đúng nhu cầu.",
    },
    {
      title: "Chi phí minh bạch",
      desc: "Không lo phát sinh.",
    },
    {
      title: "Thi công chuẩn tiến độ",
      desc: "Giám sát & báo cáo định kỳ.",
    },
    {
      title: "Bàn giao an tâm",
      desc: "Nghiệm thu & bảo hành rõ ràng.",
    },
  ];

  return (
    <div
       className="w-full min-h-[600px] flex flex-col justify-center items-center relative p-8"
      style={{
        backgroundImage: `url(${assets.reasons})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay xám tối nhẹ */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 text-center">
        <p className="uppercase tracking-wider text-yellow-500 font-medium mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl font-bold mb-12 text-white">
          Vì sao bạn nên chọn chúng tôi?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-3xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 min-h-[200px]"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 text-amber-600 text-2xl font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
