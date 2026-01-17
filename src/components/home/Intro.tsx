import React from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/constants/site.config';

export const Intro: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-transparent border-t border-obsidian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-12">
          <div className="w-full">
            <Reveal width="100%">
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="w-20 h-[1.5px] bg-obsidian/30"></div>
                <span className="font-sans text-sm tracking-[0.3em] uppercase font-semibold text-obsidian/60">The {siteConfig.brandName} Approach</span>
              </div>
              <h3 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
                Results driven by <span className="italic text-gold font-light">Evidence</span>.
              </h3>
            </Reveal>
          </div>

          <div className="w-full">
            <Reveal delay={0.2} width="100%">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light text-obsidian mb-12">
                KARA Clinic is a state-of-the-art dermatology and cosmetology center in Delhi, led by renowned dermatologist <span className="italic font-normal">Dr. Rashmi Sharma</span>.
              </p>
            </Reveal>
            <Reveal delay={0.3} width="100%">
              <div className="max-w-2xl mx-auto font-sans text-sm md:text-base leading-relaxed text-obsidian/70">
                <p className="mb-6">
                  The clinic offers a comprehensive range of advanced skin and hair treatments, including Botox & Fillers, anti-aging therapies, laser hair removal, acne and scar treatments, medical facials, pigmentation solutions, and more.
                </p>
                <p>
                  Equipped with the latest technology and backed by expert care, Kara Clinic is committed to delivering safe, effective, and customized results for every skin type.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};