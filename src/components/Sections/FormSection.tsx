import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function FormSection() {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
            {/* Form Section */}
            <Card className="flex-1 md:flex-[1.2] bg-white shadow-lg">
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-[#3378b0] text-center">Get in Touch with Wanderluxe</h2>
                    <form className="space-y-5">
                        <Input className="h-12 border-gray-300 focus:border-[#3378b0] focus:ring-[#3378b0]" type="text" placeholder="Full Name *" required />
                        <Input className="h-12 border-gray-300 focus:border-[#3378b0] focus:ring-[#3378b0]" type="email" placeholder="Email Address *" required />
                        <Input className="h-12 border-gray-300 focus:border-[#3378b0] focus:ring-[#3378b0]" type="tel" placeholder="Phone Number" />
                        <Textarea className="border-gray-300 focus:border-[#3378b0] focus:ring-[#3378b0]" placeholder="Message" rows={7} maxLength={400} />
                        <div className='w-full flex justify-end'>
                            <Button
                                type="submit"
                                className="cursor-pointer bg-[#3378b0] hover:bg-[#285a8e] transition-colors px-6 py-3 text-white font-semibold rounded-lg"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>

            {/* CEO Info Box */}
            <Card className="flex-1 bg-white shadow-lg">
                <CardContent className="p-8 text-center">
                    <Image
                        src="/images/founder.jpeg"
                        alt="CEO of Wanderluxe"
                        height={40}
                        width={40}
                        className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md"
                    />
                    <h3 className="text-2xl font-semibold text-[#3378b0]">Alex Johnson</h3>
                    <p className="text-md text-gray-600 mt-2">CEO, WanderLuxe Holidays</p>
                    <blockquote className="italic mt-6 text-lg text-gray-700">
                        "Travel is the only thing you buy that makes you richer."
                    </blockquote>
                    <div className="flex justify-center gap-6 mt-8 text-[#3378b0]">
                        {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="text-black hover:text-[#3378b0] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Icon size={30} />
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
