"use client"
import React, { useEffect } from 'react';
import { whyChooseUs } from '@/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhyChooseUs() {
    const circleSizes = ['w-24 h-24 md:w-32 md:h-32 lg:w-45 lg:h-45', 'w-28 h-28 md:w-36 md:h-36 lg:w-50 lg:h-50', 'w-32 h-32 md:w-40 md:h-40 lg:w-55 lg:h-55', 'w-32 h-32 md:w-44 md:h-44 lg:w-65 lg:h-65'];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-100 to-purple-100 w-full">
            <h2 className="text-3xl  md:text-4xl lg:text-5xl text-center mb-6 md:mb-8" >Why choose us as your travel partner?</h2>
            <div className="container mx-auto px-4">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
                    {/* SVG for connecting lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#cdcdcd" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="75%" y2="20%" stroke="#cdcdcd" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#cdcdcd" strokeWidth="2" />
                        <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#cdcdcd" strokeWidth="2" />
                    </svg>

                    {/* Center bubble */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex items-center justify-center shadow-lg z-10 overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-white"></div>
                        <h2 className="text-sm md:text-lg lg:text-2xl font-bold text-center text-[#3378b0] relative z-20">WanderLuxe</h2>
                    </div>

                    {/* Surrounding bubbles */}
                    {whyChooseUs.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute ${circleSizes[index]} rounded-full flex flex-col items-center justify-center p-2 md:p-4 shadow-md z-10 overflow-hidden
                                ${index === 0 ? 'top-0 left-1/4 -translate-x-1/2' :
                                    index === 1 ? 'top-0 right-1/4 translate-x-1/2' :
                                        index === 2 ? 'bottom-0 left-1/4 -translate-x-1/2' :
                                            'bottom-0 right-1/4 translate-x-1/2'}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={index * 100}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#3378b0] to-pink-500 opacity-70 blur-md"></div>
                            <div className="relative z-20">
                                <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2 text-center text-white">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-200 text-center hidden sm:block">{item.subTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
