import React from "react";
import { assets } from "../assets/assets";

export const About = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section
      id="About"
      className="flex flex-col md:flex-row items-center min-h-[70vh] gap-10 py-10 px-2 md:px-12 bg-[#f7f7f7] relative"
    >
      {/* Bên trái: Ảnh lớn + Play */}
      <div className="w-full md:w-3/5 flex justify-center md:justify-end items-center">
        <div className="relative w-full max-w-2xl md:max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={assets.about_us}
            alt="Dự án tiêu biểu"
            className="object-cover w-full h-full"
          />
          {/* Nút play đặt chính giữa, ổn định cho mọi tỉ lệ */}
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex justify-center items-center focus:outline-none"
            tabIndex={0}
          >
            <span className="bg-cyan-600 flex items-center justify-center rounded-full w-16 h-16 hover:bg-cyan-700 transition-colors shadow-lg ring-4 ring-white/30">
              <svg
                className="w-8 h-8 text-white pl-[3px]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="8,5 20,12 8,19" fill="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Bên phải: Box giới thiệu nổi */}
      <div className="w-full md:max-w-xl bg-white rounded-2xl shadow-2xl py-10 px-6 md:pl-12 md:py-14 md:-ml-24 relative z-10">
        <p className="text-sm tracking-widest text-gray-500 mb-2 uppercase">
          Giới Thiệu
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 font-montserrat">
          Về Chúng Tôi
        </h2>

        <p className="mb-4 text-gray-700">
          M.A Renovation mang đến giải pháp cải tạo phù hợp, giúp gia chủ có
          không gian sống mới mẻ – tiện nghi và an tâm chi phí.
        </p>
        <p className="mb-4 text-gray-700">
          Với phương châm <strong>“Đổi mới không gian, an tâm chi phí”</strong>,
          chúng tôi luôn minh bạch trong tư vấn, tối ưu trong thi công và đồng
          hành đến khi ngôi nhà trở thành “tổ ấm” hoàn thiện.
        </p>
        <p className="mb-4 text-gray-700">
          Chúng tôi tin rằng, mỗi sự thay đổi dù nhỏ cũng góp phần nâng tầm chất
          lượng cuộc sống cho gia chủ.
        </p>

        <div className="flex items-center gap-3 mt-6">
          <img
            src={assets.founder}
            alt="Founder"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
          />
          <div>
            <div className="font-bold leading-none text-slate-900">
              M.A Renovation
            </div>
            <div className="text-xs text-gray-500">FOUNDER & CEO</div>
          </div>
        </div>
      </div>

      {/* YouTube Video Popup */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Chặn sự kiện lây lan lên overlay
          >
            <iframe
              src="https://www.youtube.com/embed/xPkymyihX-Q?autoplay=1"
              title="Project Video"
              allow="autoplay"
              allowFullScreen
              className="w-[95vw] max-w-[900px] h-[54vw] max-h-[520px] rounded-2xl shadow-2xl"
            ></iframe>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-7 -right-4 rounded-full text-gray-300 px-3 py-2 shadow-lg bg-gray-600/30 font-merriweather hover:bg-gray-600/50 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

function Stat({ number, label }) {
  return (
    <div className="bg-white rounded shadow-md px-6 py-4 w-40">
      <div className="font-extrabold text-2xl text-blue-800">{number}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}
