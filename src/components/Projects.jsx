import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import CompareImage from 'react-compare-image'

export const Projects = () => {
    const [selected, setSelected] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(1)
    
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
        }
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? (projectsData.length - 1 ) : prevIndex - 1)
    }   

    return (
        <section className="bg-gray-50 py-16 px-4" id="Projects">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-2 font-montserrat tracking-tight">
            Dự án nổi bật
            </h2>
            <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mb-8"></div>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
                Minh An chuyên cải tạo, nâng cấp không gian sống và làm việc. Xem sự khác biệt rõ rệt trước và sau khi cải tạo!
            </p>
            {/* Danh sách card */}
            <div className="flex justify-end items-center mb-8">
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>
            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4" onClick={() => setSelected(index)}>    
                            <img className='w-full h-auto mb-14' src={project.image} alt={project.image} />
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-black bg-white w-3/4 px-4 py-2 shadow-md">
                                <h2 className='text-xl font-semibold text-gray-800'>{project.title}
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span>|</span> {project.location}
                                    </p>
                                </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Hiện CompareImage cho project được chọn */}
            {selected !== null && (
            <div className="mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-orange-500 font-montserrat text-center">
                So sánh trước & sau: {projectsData[selected].name}
                </h3>
                <CompareImage
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
    )
}
