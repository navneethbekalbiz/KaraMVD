import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { Specializations } from '@/components/home/Specializations';
import { Experts } from '@/components/home/Experts';
import { Treatments } from '@/components/home/Treatments';
import { Gallery } from '@/components/home/Gallery';
import { Stats } from '@/components/home/Stats';
import { Testimonials } from '@/components/home/Testimonials';


export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Specializations />
            <Experts />
            <Treatments />
            <Gallery />
            <Stats />
            <Testimonials />
        </>
    );
};
