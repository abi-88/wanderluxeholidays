"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './Header'

const images = [
    '/images/header/1.jpg',
    '/images/header/2.jpg',
    '/images/header/3.jpg',
    '/images/header/4.jpg',
    '/images/header/5.jpg',
    '/images/header/6.jpg',
]

export default function HeaderImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef(null)

    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
        startAutoTransition()
        return () => clearTimeout(timeoutRef.current)
    }, [currentIndex])

    const startAutoTransition = () => {
        timeoutRef.current = setTimeout(() => {
            changeImage('next')
        }, 6000)
    }

    const changeImage = (direction) => {
        setCurrentIndex(prevIndex =>
            direction === 'next' ? (prevIndex + 1) % images.length : (prevIndex - 1 + images.length) % images.length
        )
    }

    return (
        <div className="relative">
            <Header />
            <div className="relative w-screen h-[95vh] overflow-hidden" data-aos="fade-up">
                <div className="relative w-full h-full">
                    {images.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                            className={`absolute inset-0 transition-all duration-2000 ease-in-out transform 
                            ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                        />
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
                <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/70"
                    onClick={() => changeImage('prev')}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/70"
                    onClick={() => changeImage('next')}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
