import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_TREATMENTS, OPD_LOCATIONS } from '../constants';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, Calendar, MapPin, Clock } from 'lucide-react';

import { siteConfig } from '../site.config';
import { motion } from 'framer-motion';

export const TreatmentDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const treatment = ALL_TREATMENTS.find((t) => t.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!treatment) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-sand">
                <div className="text-center">
                    <h2 className="text-2xl font-display text-obsidian mb-4">Treatment Not Found</h2>
                    <Link to="/">
                        <Button variant="primary">Return Home</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-sand text-obsidian font-sans pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-6 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium text-white/80 tracking-widest uppercase mb-4 backdrop-blur-sm"
                        >
                            Advanced Dermatology
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display text-white mb-6"
                        >
                            {treatment.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            {treatment.description}
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Main Content */}
                    <div className="lg:col-span-7 space-y-12">
                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-display mb-6">Overview</h2>
                            {treatment.fullDescription ? (
                                <div className="space-y-4 text-obsidian/70 leading-relaxed text-lg">
                                    {treatment.fullDescription.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-obsidian/70 leading-relaxed text-lg">
                                    At {siteConfig.brandName}, we specialize in {treatment.title}, offering a tailored approach to ensure optimal results. Our advanced protocols are designed to address your specific concerns, providing a comfortable experience and visible improvements.
                                </p>
                            )}
                        </div>

                        {/* Treatment Types (if available) */}
                        {treatment.treatmentTypes && treatment.treatmentTypes.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-display mb-6">Treatment Types</h3>
                                <div className="grid gap-6">
                                    {treatment.treatmentTypes.map((type, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-obsidian/5 hover:border-gold/30 transition-colors shadow-sm">
                                            <h4 className="font-display text-xl mb-2 text-obsidian">{type.title}</h4>
                                            <p className="text-obsidian/70">{type.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Benefits */}
                        <div>
                            <h3 className="text-2xl font-display mb-6">Key Benefits</h3>
                            {treatment.benefitsDetail ? (
                                <div className="space-y-4">
                                    {treatment.benefitsDetail.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-obsidian/5 hover:border-gold/30 transition-colors shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={20} className="text-gold" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-obsidian/60">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {treatment.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-obsidian/5 hover:border-gold/30 transition-colors shadow-sm">
                                            <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={20} className="text-gold" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-1">{feature}</h4>
                                                <p className="text-sm text-obsidian/60">Targeted results for a more confident you.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Expert's Note (if available) */}
                        {treatment.doctorNote && (
                            <div className="bg-gradient-to-br from-sand to-white p-8 rounded-3xl border border-obsidian/5 relative overflow-hidden">
                                <div className="flex gap-6 items-start">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 13.134 10.3671 11.5 12.017 9.92857C12.75 9.23075 13.8837 8.3514 13.9839 6.22271L14.0049 5.77661L10.0276 5.58941L10.0076 5.9221C9.65481 10.6625 6.00002 12.4411 6 16V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16.0001 13.134 17.3671 11.5 19.017 9.92857C19.75 9.23075 20.8837 8.3514 20.9839 6.22271L21.0049 5.77661L17.0276 5.58941L17.0076 5.9221C16.6548 10.6625 13.0001 12.4411 13 16V21H21.017Z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display mb-3 text-obsidian">Expert's Take</h3>
                                        <p className="text-obsidian/80 italic leading-relaxed">"{treatment.doctorNote}"</p>
                                        <div className="mt-4 flex items-center gap-3">
                                            <div className="h-px w-8 bg-gold"></div>
                                            <span className="font-medium text-sm text-obsidian/60 uppercase tracking-wider">Dr. Rashmi, Lead Dermatologist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Consultation CTA */}
                        <div className="bg-obsidian rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden group">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-display text-white mb-2">Ready to transform?</h3>
                                    <p className="text-white/60">Schedule your comprehensive consultation with Dr. Rashmi today.</p>
                                </div>
                                <Button
                                    variant="primary"
                                    className="!bg-white !text-obsidian hover:!bg-gold hover:!text-white shrink-0"
                                    onClick={() => window.open(siteConfig.bookingUrl, '_blank')}
                                >
                                    Book Consultation <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="sticky top-24 space-y-8">
                            {/* Summary Card */}
                            <div className="bg-white p-8 rounded-3xl border border-obsidian/5 shadow-angled">
                                <h3 className="text-xl font-display mb-6 pb-4 border-b border-obsidian/5">Treatment At A Glance</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-obsidian/60 flex items-center gap-2"><Calendar size={16} /> Frequency</span>
                                        <span className="font-medium">Personalized Plan</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-obsidian/60">Downtime</span>
                                        <span className="font-medium">Minimal / None</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-obsidian/60">Consultation</span>
                                        <span className="font-medium">Required</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-obsidian/5">
                                    <p className="text-sm text-obsidian/50 mb-6 leading-relaxed">
                                        *Results may vary by individual. A consultation is required to determine suitability.
                                    </p>
                                    <Button className="w-full" onClick={() => window.open(siteConfig.bookingUrl, '_blank')}>Book Now</Button>
                                </div>
                            </div>

                            {/* OPD Locations */}
                            <div className="bg-obsidian text-white p-8 rounded-3xl border border-white/10 shadow-angled relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                <h3 className="text-xl font-display mb-6 pb-4 border-b border-white/10 relative z-10">OPD Locations</h3>

                                <div className="space-y-6 relative z-10">
                                    {OPD_LOCATIONS.map((loc, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex items-start gap-3 mb-2">
                                                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                                                <div>
                                                    <h4 className="font-medium text-gold/80 text-sm uppercase tracking-wider mb-1">{loc.name}</h4>
                                                    <p className="text-white/80 text-sm leading-relaxed">{loc.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 pl-7">
                                                <Clock size={14} className="text-white/40 mt-1 shrink-0" />
                                                <p className="text-white/60 text-xs leading-relaxed whitespace-pre-line">{loc.timing}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                                    <div className="flex items-center gap-2 text-white/50 text-xs">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Open for new patients
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
