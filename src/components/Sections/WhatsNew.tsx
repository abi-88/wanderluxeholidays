'use client';

import { motion } from 'framer-motion';
import { newFeatures } from '@/constants';
import styles from '../../app/commonstyles';
import { fadeIn, planetVariants } from '../../utils/styles';
import NewFeatures from '../common/NewFeatures';

const WhatsNew = () => {
    return (
        <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex 
       lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-[0.95] flex justify-center items-center flex-col"
                >
                    <>
                        <p
                            className="text-black text-center text-2xl mb-2 font-semibold"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            What's new about
                        </p>
                        <p
                            className="text-[#3378b0] text-center text-5xl sm:text-6xl md:text-7xl mb-1 font-bold"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            WanderLuxe?
                        </p>
                    </>
                    <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                        {newFeatures.map((feature) => (
                            <NewFeatures key={feature.title} {...feature} />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    viewport={{ once: true, amount: 0.25 }}
                    variants={planetVariants('right')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src='/globe3.png'
                        alt='NewFeatures'
                        className="w-[100%] h-[100%] object-contain"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WhatsNew