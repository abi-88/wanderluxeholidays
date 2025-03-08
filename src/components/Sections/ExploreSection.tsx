'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from '../../app/commonstyles';
import { exploreWorlds } from '../../constants';
import ExploreCard from '../common/ExploreCard';

const Explore = () => {
    const [active, setActive] = useState('world-2');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className={`${styles.paddings}`} id="explore">
            <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <p
                    className="text-[#3378b0] text-center text-[50px] mb-1 font-bold"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Choose the destination you want <br className="md:block hidden" /> to explore
                </p>
                <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 ml-4">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
