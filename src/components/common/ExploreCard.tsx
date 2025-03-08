'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }: any) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div
            data-aos="fade-right"
            data-aos-delay={index * 100}
            className={`relative flex items-center justify-center min-w-[30vw] h-[70vh] cursor-pointer overflow-hidden rounded-[24px]`}
            onClick={() => handleClick(id)}
        >
            <img
                src={imgUrl}
                alt={title}
                className="absolute w-full h-full object-cover rounded-[24px] transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
                <div
                    className={`flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
                >
                    <img
                        src="/headset.svg"
                        alt="headset"
                        className="w-1/2 h-1/2 object-contain"
                    />
                </div>
                <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
                    See more
                </p>
                <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default ExploreCard;
