import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { CompareImageWithLoading } from './../components/CompareImageWithLoading';

export const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(4);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
 
  return (
    <section className="bg-gray-50 py-16 px-4" id="Projects">
      <div className=" max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2 font-montserrat tracking-tight">
          Dự án nổi bật
        </h2>
        <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-8"></div>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          M.A Renovation chuyên cải tạo và nâng cấp không gian sống – làm việc.
          Khám phá sự khác biệt rõ rệt trước và sau khi cải tạo!
        </p>
        {/* Danh sách card */}
        <div className="flex justify-end items-center mb-8">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded"
            aria-label="Next Project"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4 cursor-pointer group transition-transform duration-200"
                onClick={() => setSelected(index)}
              >
                {/* Hình ảnh project */}
                <img
                  height={651}
                  className="w-full h-auto mb-14 rounded-xl transition group-hover:scale-105 group-hover:shadow-2xl"
                  src={project.image}
                  alt={project.title}
                />
                {/* Overlay hover hướng dẫn - chỉ hiện khi hover */}
                <div className="absolute inset-0 flex items-center justify-center transition group-hover:visible rounded-xl">
                  <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center gap-2 transition">
                    {/* Icon con mắt hoặc hai ảnh so sánh */}
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z" />
                      <circle cx="12" cy="12" r="3.5" />
                    </svg>
                    <span className="text-white text-base font-semibold shadow">
                      Xem Trước / Sau
                    </span>
                  </div>
                </div>
                {/* Label project như cũ */}
                <div className="absolute left-0 right-0 bottom-5 flex justify-center pointer-events-none select-none">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      {project.price} <span>|</span> {project.location}
                    </p>
                    <p className="md:hidden text-blue-500 text-xs mt-1 font-medium">
                      View
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Hiện CompareImage cho project được chọn */}
        {selected !== null && (
          <div className="mx-auto bg-white rounded-2xl shadow-xl p-8 w-full max-w-md md:max-w-2xl lg:max-w-3xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500 font-montserrat text-center">
              So sánh trước & sau: {projectsData[selected].name}
            </h3>
            <CompareImageWithLoading
              leftImage={projectsData[selected].before}
              rightImage={projectsData[selected].after}
              leftImageLabel="Trước"
              rightImageLabel="Sau"
              sliderLineWidth={3}
              handleSize={40}
            />
          </div>
        )}
      </div>
    </section>
  );
};
