"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, Map, Briefcase, Image as ImageIcon, Users, Phone } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const menuItems = [
    { name: 'Destinations', href: '/destinations', icon: Map },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
]

export default function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <header className="absolute top-0 left-0 right-0 z-50 bg-white/20">
            <div className="container mx-auto px-1 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0" data-aos="fade-right">
                        <Link href="/">
                            <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="h-20 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6" data-aos="fade-left">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="large font-600 text-[#292929] transition-all duration-300 ease-in-out flex items-center hover:text-black group"
                            >
                                <item.icon className="w-5 h-5 mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" />
                                <span className="transition-all duration-300 ease-in-out group-hover:scale-105">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden bg-transparent border-black text-black">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-6 mt-12 ml-5">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium text-[#292929] transition-all duration-300 ease-in-out flex items-center hover:text-black group"
                                    >
                                        <item.icon className="w-6 h-6 mr-3 transition-all duration-300 ease-in-out group-hover:scale-110" />
                                        <span className="transition-all duration-300 ease-in-out group-hover:scale-105">{item.name}</span>
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
