"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Map, Briefcase, ImageIcon, Users } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import AOS from 'aos'
import 'aos/dist/aos.css'

const menuItems = [
    { name: 'Destinations', href: '/destinations', icon: Map },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
]

const services = [
    'Global Visa Assistance',
    'International & Domestic Tours',
    'Flight Ticket Booking',
    'Cruise Booking',
    'Hotel Booking',
    'Bus Booking',
    'Religious Pilgrimage Packages',
    'Student Travel Packages',
    'Ladies-Only Packages'
]

export default function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <footer className="bg-gradient-to-b from-blue-100 to-white bg-[url('/images/footer-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center md:items-stretch md:flex-row justify-between gap-8" data-aos="fade-up">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                        <Image src="/images/logo.png" alt="WanderLuxe Logo" width={200} height={200} />
                    </div>

                    {/* Services Information Section */}
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="text-md font-semibold text-[#3378b0]">Our Services</h3>
                        {services.map((service, index) => (
                            <p key={index} className="text-sm">{service}</p>
                        ))}
                    </div>

                    {/* Quick links */}
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="text-md font-semibold text-[#3378b0]">Quick Links</h3>
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.href} className="flex items-center justify-center md:justify-start text-sm hover:text-[#3378b0]">
                                <item.icon size={16} className="mr-2 text-[#3378b0]" />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-3 text-center md:text-left">
                        <h3 className="text-md font-semibold text-[#3378b0]">Contact Us</h3>
                        <p className="flex items-center justify-center md:justify-start">
                            <MapPin size={16} className="mr-2 text-[#3378b0]" />
                            <span className='text-sm'>123 Travel Street, Adventure City, 12345</span>
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <Phone size={16} className="mr-2 text-[#3378b0]" />
                            <span className='text-sm'>+1 (123) 456-7890</span>
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <Mail size={16} className="mr-2 text-[#3378b0]" />
                            <span className='text-sm'>info@wanderluxe.com</span>
                        </p>
                    </div>

                </div>
            </div>

            <Separator className="bg-blue-300 h-px" />

            {/* Copyright and Social Media Bottom Section */}
            <div className="bg-[#3378b0] text-white py-5">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center md:text-left">Copyright © {new Date().getFullYear()} WanderLuxe. All Rights Reserved</p>
                    <div className="flex justify-center md:justify-end items-center">
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    className="text-white/50 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
