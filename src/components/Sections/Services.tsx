"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from '@/constants'
import Image from 'next/image'
import 'aos/dist/aos.css'

export default function Services() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-100 to-purple-100 mt-15">
            <h2 className="text-5xl text-center mb-8" data-aos="fade-up">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="group ease-in-out bg-white/20 backdrop-blur-lg  shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <CardHeader>
                            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/40 transition-all duration-500 ease-in-out overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={80}
                                    height={80}
                                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-500 ease-in-out">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-800 group-hover:text-gray-900 transition-colors duration-500 ease-in-out">{service.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
