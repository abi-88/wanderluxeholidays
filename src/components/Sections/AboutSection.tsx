'use client';

import { motion } from 'framer-motion';
import styles from '../../app/commonstyles';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/styles';
import { Separator } from '../ui/separator';

const AboutSection = () => {
    return (
        <section className={`${styles.paddings} relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
            >
                <motion.div
                    viewport={{ once: true, amount: 0.25 }}
                    variants={planetVariants('left')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src='/globe1.png'
                        alt='getstarted'
                        className="w-[90%] h-[90%] object-contain"
                    />
                </motion.div>

                <motion.div
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-1 flex flex-col items-center lg:items-start"
                >
                    <p className="text-black text-center text-2xl mb-2 font-semibold mb-2">
                        about
                    </p>
                    <p
                        className="text-[#3378b0] text-center lg:text-left text-5xl sm:text-6xl md:text-7xl mb-1 font-bold"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        WanderLuxe
                    </p>
                    <Separator className="my-4 w-full" />
                    <div
                        className="mt-6 text-sm sm:text-base md:text-lg text-center lg:text-left"
                        data-aos="zoom"
                        data-aos-delay="200"
                    >
                        At WanderLuxe, we craft extraordinary travel experiences that ignite your wanderlust and create lasting memories. Specializing in meticulously planned international adventures and captivating tours across North and South India, we're passionate about revealing the world's hidden gems and iconic destinations alike.
                        <br /><br />
                        Our expert team of travel enthusiasts combines local insights with luxurious touches to design bespoke itineraries that cater to your unique preferences. Whether you're dreaming of exploring ancient temples in South India, embarking on a culinary journey through North India's vibrant markets, or venturing to far-flung corners of the globe, WanderLuxe is your trusted partner in turning travel dreams into reality.
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default AboutSection
