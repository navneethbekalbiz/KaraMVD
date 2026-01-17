import React, { useState, useEffect } from "react";
import { LaptopFrame } from "./ui/laptop-frame";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { Play, Search, Bell, Monitor, Heart, RotateCcw, ThumbsUp, Share2, MoreVertical, Settings } from "lucide-react";
import { siteConfig } from "../site.config";

// Video Data
const VIDEOS = [
    { id: "PItwfEVEDCQ", title: "Top 5 Skincare Mistakes Explained", views: "12K", time: "2 days ago", thumbnail: "https://img.youtube.com/vi/PItwfEVEDCQ/maxresdefault.jpg" },
    { id: "pLEKFjiCO-g", title: "Understanding Acne Scars & Treatments", views: "8.5K", time: "1 week ago", thumbnail: "https://img.youtube.com/vi/pLEKFjiCO-g/maxresdefault.jpg" },
    { id: "HBe3--5on74", title: "Botox vs. Fillers: What's the Difference?", views: "45K", time: "2 weeks ago", thumbnail: "https://img.youtube.com/vi/HBe3--5on74/maxresdefault.jpg" },
    { id: "Y2_RpOMpbRQ", title: "The Truth About Chemical Peels", views: "3.2K", time: "3 weeks ago", thumbnail: "https://img.youtube.com/vi/Y2_RpOMpbRQ/maxresdefault.jpg" },
    { id: "4yGpvGVie9A", title: "Anti-Aging Routine for 30s & 40s", views: "22K", time: "1 month ago", thumbnail: "https://img.youtube.com/vi/4yGpvGVie9A/maxresdefault.jpg" },
    { id: "MdN_if4VN6M", title: "Laser Hair Reduction: Safety & Results", views: "15K", time: "1 month ago", thumbnail: "https://img.youtube.com/vi/MdN_if4VN6M/maxresdefault.jpg" },
    { id: "4J7frAGteVw", title: "PRP for Hair Loss: Does it Work?", views: "30K", time: "2 months ago", thumbnail: "https://img.youtube.com/vi/4J7frAGteVw/maxresdefault.jpg" },
    { id: "3XqSHPtxf1M", title: "Dermatologist Reviews Viral Trends", views: "100K", time: "3 months ago", thumbnail: "https://img.youtube.com/vi/3XqSHPtxf1M/maxresdefault.jpg" },
    { id: "WNggQrNwYDM", title: "Winter Skincare Essentials", views: "5K", time: "4 months ago", thumbnail: "https://img.youtube.com/vi/WNggQrNwYDM/maxresdefault.jpg" },
    { id: "mT5_EMKLDxA", title: "Sunscreen Guide: Types & Usage", views: "18K", time: "5 months ago", thumbnail: "https://img.youtube.com/vi/mT5_EMKLDxA/maxresdefault.jpg" },
];

export const VideosPage: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState(VIDEOS[0]);

    // Auto-scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-obsidian min-h-screen md:py-24 md:px-4 flex flex-col items-center justify-center overflow-x-hidden relative">

            {/* Background Ambient Glow (Desktop Only) */}
            <div className="absolute inset-0 z-0">
                <DottedGlowBackground
                    className="pointer-events-none"
                    opacity={0.8}
                    gap={25}
                    radius={1.5}
                    color="rgba(255, 255, 255, 0.1)"
                    glowColor="#D4AF37"
                    speedMin={0.3}
                    speedMax={1.0}
                />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0 hidden md:block"></div>

            {/* Page Heading (Desktop Only) */}
            <div className="text-center mb-16 relative z-10 transition-all duration-700 animate-in fade-in slide-in-from-bottom-10 hidden md:block">
                <h3 className="text-gold font-sans text-xs md:text-sm tracking-[0.2em] uppercase mb-4">Patient Education</h3>
                <h1 className="text-3xl md:text-6xl font-display text-sand drop-shadow-2xl">
                    Insightful Dermatology <span className="text-gold italic font-light">In Motion.</span>
                </h1>
            </div>

            {/* Static Laptop */}
            <div className="w-full h-[100dvh] md:h-auto md:max-w-6xl relative z-10 transition-all duration-1000 delay-300 animate-in fade-in zoom-in-95">
                <LaptopFrame className="w-full md:shadow-2xl">
                    {/* MACOS DESKTOP ENVIRONMENT */}
                    <div className="w-full h-full flex flex-col relative font-sans text-white/90">

                        {/* Custom Window (KaraTube App) - Maximized */}
                        {/* Mobile: Full Screen, No Rounding, No Shadows */}
                        {/* Desktop: Rounded, Shadowed, Inset, Neon Glow */}
                        <div className="absolute inset-0 md:inset-6 bg-[#0f0f0f] md:bg-black/60 md:backdrop-blur-2xl md:rounded-xl md:border md:border-gold/20 md:shadow-[0_0_50px_-10px_rgba(212,175,55,0.25)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-700">

                            {/* Window Title Bar */}
                            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between shrink-0">
                                <div className="flex gap-2 group">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-inner group-hover:brightness-90 transition-all"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-inner group-hover:brightness-90 transition-all"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-inner group-hover:brightness-90 transition-all"></div>
                                </div>
                                <div className="text-xs font-medium text-white/40 tracking-wide flex items-center gap-2">
                                    <div className="w-3 h-3 rounded bg-red-600 flex items-center justify-center"><Play size={6} fill="white" /></div>
                                    KaraTube
                                </div>
                                <div className="w-10"></div> {/* Spacer for alignment */}
                            </div>

                            {/* App Content */}
                            <div className="flex-1 flex overflow-hidden">

                                {/* Sidebar Removed as per user request to maximize video space */}
                                {/* Main View Area */}
                                <div className="flex-1 flex flex-col overflow-hidden bg-black/40">
                                    {/* Search Header */}
                                    <div className="h-14 border-b border-white/5 flex items-center px-6 gap-4 shrink-0">
                                        <Search className="text-white/40" size={18} />
                                        <input type="text" placeholder="Search for treatments..." className="bg-transparent border-none outline-none text-sm text-white placeholder-white/20 w-full" />
                                        <Bell className="text-white/40 hover:text-white transition-colors cursor-pointer" size={18} />
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold to-sand p-[1px]">
                                            <div className="w-full h-full rounded-full bg-obsidian overflow-hidden">
                                                <img src="https://drrashmisharma.in/wp-content/uploads/2024/03/rr.jpg" className="w-full h-full object-cover opacity-80" alt="Avatar" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
                                        {/* Video Player (Top/Left) */}
                                        <div className="w-full lg:flex-[2] p-4 md:p-6 lg:overflow-y-auto custom-scrollbar">
                                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&mute=0&rel=0`}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                ></iframe>
                                            </div>
                                            <div className="mt-6">
                                                <h1 className="text-xl md:text-2xl font-display text-white mb-2">{selectedVideo.title}</h1>

                                                {/* Channel & Actions Row */}
                                                <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 gap-4 pb-4 border-b border-white/5">
                                                    {/* Channel Info */}
                                                    <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                                                        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/10 group-hover:ring-gold transition-all">
                                                            <img src="https://drrashmisharma.in/wp-content/uploads/2024/03/rr.jpg" alt="Dr Rashmi" className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-sm text-white group-hover:text-gold transition-colors">Dr. Rashmi Sharma</h4>
                                                            <p className="text-xs text-white/50">Dermatologist</p>
                                                        </div>
                                                    </a>

                                                    {/* Actions */}
                                                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                                                        {/* Subscribe Button (Hover: Red) */}
                                                        <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm font-medium hover:bg-red-600 hover:text-white transition-all duration-300 shrink-0">
                                                            Subscribe
                                                        </a>

                                                        {/* Like Button (Hover: Blue) */}
                                                        <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium hover:text-blue-500 hover:bg-blue-500/10 transition-all duration-300 group shrink-0">
                                                            <ThumbsUp size={18} className="text-white/70 group-hover:text-blue-500 transition-colors" />
                                                            <span>Like</span>
                                                        </a>

                                                        {/* Share Button (Generic) */}
                                                        <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors shrink-0">
                                                            <Share2 size={18} className="text-white/70" />
                                                            <span>Share</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Description Snippet (No Metrics) */}
                                                <div className="bg-[#1a1a1a] rounded-xl p-4 mt-6 text-sm text-white/70 leading-relaxed hover:bg-[#222] transition-colors">
                                                    In this educational video, Dr. Rashmi Sharma explores critical aspects of dermatological care, providing expert insights and science-backed advice for healthier skin.
                                                </div>
                                            </div>
                                        </div>

                                        {/* Up Next (Bottom/Right) */}
                                        <div className="w-full lg:flex-1 border-t lg:border-t-0 lg:border-l border-white/5 p-4 lg:overflow-y-auto custom-scrollbar bg-black/20">
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 px-2">Up Next</h3>
                                            <div className="space-y-3 pb-20 lg:pb-0">
                                                {VIDEOS.filter(v => v.id !== selectedVideo.id).map((video) => (
                                                    <div
                                                        key={video.id}
                                                        onClick={() => {
                                                            setSelectedVideo(video);
                                                            // On mobile, scroll back to top when clicking a video
                                                            if (window.innerWidth < 1024) {
                                                                const container = document.querySelector('.lg\\:overflow-hidden');
                                                                if (container) container.scrollTop = 0;
                                                            }
                                                        }}
                                                        className="group flex gap-3 p-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                                                    >
                                                        <div className="w-32 md:w-24 aspect-video rounded-md overflow-hidden relative shadow-lg shrink-0">
                                                            <img src={video.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="thumb" />
                                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <Play size={16} fill="white" className="text-white drop-shadow-md" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                            <h4 className="text-sm md:text-xs font-semibold text-white/90 md:text-white/80 line-clamp-2 group-hover:text-gold transition-colors">{video.title}</h4>
                                                            <p className="text-xs md:text-[10px] text-white/50 md:text-white/40 mt-1">Dr. Rashmi Sharma</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DOCK REMOVED AS REQUESTED */}
                        </div>
                    </div>
                </LaptopFrame>
            </div>

        </div>
    );
};
