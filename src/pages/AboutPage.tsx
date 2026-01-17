import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/constants/site.config';
import { Award, BookOpen, Briefcase, GraduationCap, Mic, FileText, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-24 min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 md:px-12 mb-24">
                <Reveal>
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/3 relative">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://drrashmisharma.in/wp-content/uploads/2024/03/rr.jpg"
                                    alt={siteConfig.expertName}
                                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-sand">
                                    <h1 className="font-display text-3xl">{siteConfig.expertName}</h1>
                                    <p className="font-sans text-sm tracking-widest uppercase opacity-80">Senior Consultant Dermatologist</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-6">
                            <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase">About Us</span>
                            <h2 className="font-display text-4xl md:text-5xl text-obsidian">Excellence in Dermatology & Aesthetics</h2>
                            <div className="prose prose-lg text-obsidian/70 font-sans font-light leading-relaxed">
                                <p>
                                    {siteConfig.expertName}, a distinguished Dermatologist and qualified venereologist in Delhi NCR, excels in an array of innovative dermatological treatments. As a skin specialist, she along with her team proficiently performs over 130 types of derma treatments, catering to various skin concerns.
                                </p>
                                <p>
                                    Her commitment to excellence is evident through her extensive training and accomplishments. Actively involved in research and a published author in reputable medical journals, {siteConfig.expertName}'s role as a speaker at national and international conferences underscores her passion for advancing dermatological science.
                                </p>
                                <p>
                                    Her expertise extends across a wide range of clinical and cosmetic services. Whether you are seeking laser hair removal, scar removal, acne treatment, or anti-aging services like fillers, Botox, chemical peeling, or Medifacials, {siteConfig.brandName} offers personalized care to help you achieve your skincare goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Credentials Grid */}
            <section className="bg-sand/30 py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <Reveal width="100%">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                            {/* Scholistics */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-gold/10 text-gold">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="font-display text-2xl text-obsidian">Scholistics</h3>
                                </div>
                                <ul className="space-y-4 font-sans text-obsidian/80 font-light">
                                    {[
                                        "IADVL Fellowship in Vesicobullous Diseases: AIIMS, New Delhi (2012)",
                                        "ACSI Fellowship in Aesthetic and Cutaneous Surgery: VMMC, Safdarjung Hospital, New Delhi (2017)",
                                        "DNB: 2012-2014: Skin Institute and School of Dermatology, New Delhi",
                                        "DVDL (Dermatology, Venereology & Leprosy): 2010-2012: Father Muller Medical College, Mangalore",
                                        "Topper in Rajeev Gandhi University of Health Sciences University Exams: 2012",
                                        "National Dermatology Quiz Winner",
                                        "MBBS: 2003-2009, B.J. Govt Medical College, Pune"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Experience */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-gold/10 text-gold">
                                        <Briefcase size={24} />
                                    </div>
                                    <h3 className="font-display text-2xl text-obsidian">Professional Experience</h3>
                                </div>
                                <ul className="space-y-4 font-sans text-obsidian/80 font-light">
                                    {[
                                        "Consultant: Fortis Flt. Lt. Rajan Dhall Hospital, New Delhi (2016 - Present)",
                                        "Consultant Pediatric Dermatologist: Madhukar Rainbow Children’s Hospital, New Delhi (2016 - Present)",
                                        "Consultant: Clinic Dermatech, New Delhi (2017-2019)",
                                        "Pediatric Dermatologist: Rosewalk Hospital, New Delhi",
                                        "Consultant: Indian Spinal Injuries Centre, New Delhi",
                                        "Worked at Kiran Dermasurge and Max Panchsheel hospital (Jul 2015 - Oct 2016)",
                                        "Worked at Aakash hospital, New Delhi (2014-2015)",
                                        "MD Codes: Training in Aesthetic Filler and Singapore General Hospital, Singapore by Allergan"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Achievements & IADVL */}
            <section className="py-24">
                <div className="container mx-auto px-6 md:px-12 space-y-24">

                    <Reveal width="100%">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-obsidian/5 shadow-sm">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-full bg-gold/10 text-gold">
                                    <Award size={24} />
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-obsidian">Awards & Achievements</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {[
                                    "Speaker at Various National and International conferences (>50 presentations)",
                                    "Speaker at 25th World Congress of Dermatology, Singapore",
                                    "Scientific secretary for IADVL PRACTICE MANAGEMENT Conference 2018",
                                    "Faculty during IADVL NATIONAL Workshop on Filler Injection Technique 2021 & 2022",
                                    "Participated as faculty in Dermatosurgery and Aesthetic workshop 2021",
                                    "Conducted workshop on Laser based Tattoo removal & Micropigmentation",
                                    "Trainer with Galderma for several filler injection workshops",
                                    "Award paper presentation: Acne scars with Dermoscopic Evaluation (2018)",
                                    "First Prize in National Dermatology PG Quiz: 2014"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-start p-2 hover:bg-sand/30 transition-colors rounded-lg">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0"></span>
                                        <span className="font-sans text-obsidian/80 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-gold/10 text-gold">
                                    <Globe size={24} />
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-obsidian">Positions in IADVL</h3>
                            </div>
                            <p className="font-sans text-obsidian/70 font-light leading-relaxed max-w-4xl">
                                {siteConfig.expertName} has been committed to serving IADVL in various capacities, serving as member (PMC), convener, and chairperson in different committees. As a founding convener of IADVL Yuva Cell, she played a pivotal role in organizing the first-ever IADVL Yuva Networking event.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "IADVL SIG Aesthetics: Convener 2024",
                                    "IADVL DSB Executive Committee Member: 2024",
                                    "IADVL Yuva Cell – Adviser 2023",
                                    "SIG DermatoSurgery – Member 2023",
                                    "IADVL Yuva Cell – Chairperson 2022",
                                    "IADVL Media Cell – Convener 2021"
                                ].map((role, idx) => (
                                    <div key={idx} className="p-6 bg-sand/20 rounded-xl border border-obsidian/5">
                                        <span className="block font-sans font-medium text-obsidian/90">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* Publications */}
            <section className="bg-obsidian text-sand py-24">
                <div className="container mx-auto px-6 md:px-12">
                    <Reveal width="100%">
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-gold/20 text-gold">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-sand">Publications</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h4 className="font-display text-xl text-gold mb-6">Book Chapters</h4>
                                    <ul className="space-y-6 font-sans text-sand/70 font-light">
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>Co-authored chapter on Hair Shaft disorders in IADVL Textbook of Dermatology. Fifth edition.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>Co-authored chapter on Vitiligo: Classification, Clinical Evaluation and Assessment of Stability.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>Co-authored chapter on Dermoscopy in Melasma, Diseases of the Pigmented Skin, Second Edition.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-display text-xl text-gold mb-6">Selected Journals</h4>
                                    <ul className="space-y-6 font-sans text-sand/70 font-light">
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>Australas J Dermatol. 2022: Multiple non familial trichoepithelioma...</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>International Journal of Trichology: Epidemiological study on premature graying of hair.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-gold mt-1">•</span>
                                            <span>Dermatol Ther. 2020: Coronavirus disease (COVID-19): An updated review on current knowledge.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Media & Podcasts */}
            <section className="py-24 container mx-auto px-6 md:px-12">
                <Reveal width="100%">
                    <div className="flex flex-col items-center text-center mb-12">
                        <span className="text-gold font-sans tracking-[0.2em] text-xs uppercase mb-4">Media Presence</span>
                        <h2 className="font-display text-3xl md:text-4xl text-obsidian">Articles & Podcasts</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Nature is healing, let’s heal our souls", type: "Article", icon: FileText, link: "https://www.gcaffe.com/skin-care-hair-lip-nail-problem-and-treatment-by-dermatologist-doctor-rashmi-sharma-of-delhi/" },
                            { title: "Mind Your Skin This Mental Health Day", type: "Article", icon: FileText, link: "https://www.gcaffe.com/mind-your-skin-this-mental-health-day/" },
                            { title: "Laser hair removal: things you need to know", type: "Article", icon: FileText, link: "https://www.gcaffe.com/laser-hair-removal-things-you-need-to-know/" },
                            { title: "Acne Care Podcast", type: "Podcast", icon: Mic, link: "https://www.raisinahill.com/podcast/acne-care-during-lockdown-skin-treatment-by-dr-rashmi-sharma/" },
                            { title: "Don’t Google treat your skin", type: "Podcast", icon: Mic, link: "https://www.raisinahill.com/podcast/dont-google-treat-your-skin/" },
                            { title: "Skin Care Podcast", type: "Podcast", icon: Mic, link: "https://www.raisinahill.com/podcast/skincare-during-lockdown-podcast-by-dr-rashmi-sharma-bring-out-the-confident-you/" },
                        ].map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 bg-white rounded-2xl border border-obsidian/5 hover:border-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
                            >
                                <div className="p-3 rounded-full bg-sand text-obsidian/60 group-hover:bg-gold group-hover:text-obsidian transition-colors">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-gold mb-1 block">{item.type}</span>
                                    <h4 className="font-display text-lg text-obsidian group-hover:text-gold transition-colors line-clamp-2">{item.title}</h4>
                                </div>
                            </a>
                        ))}
                    </div>
                </Reveal>
            </section>
        </div>
    );
};
