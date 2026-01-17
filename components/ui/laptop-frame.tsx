import React from "react";
import { cn } from "../../lib/utils";

interface LaptopFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const LaptopFrame: React.FC<LaptopFrameProps> = ({ children, className, ...props }) => {
    return (
        <>
            {/* Mobile View: Render children directly, unwrapped */}
            <div className={cn("w-full h-full md:hidden", className)} {...props}>
                {children}
            </div>

            {/* Desktop View: Full Laptop Frame */}
            <div className={cn("relative mx-auto w-full max-w-[1024px] aspect-[16/9.6] hidden md:block", className)} {...props}>
                {/* Laptop Lid (Screen Housing) */}
                <div
                    className="relative w-full h-full bg-[#1a1a1a] rounded-[2.5%_2.5%_0_0] shadow-2xl p-[2%] ring-1 ring-white/10"
                    style={{
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -10px rgba(0,0,0,0.5)"
                    }}
                >
                    {/* Camera */}
                    <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[1%] h-[1%] bg-black rounded-full z-20 flex items-center justify-center ring-1 ring-white/5">
                        <div className="w-[30%] h-[30%] bg-[#0f0f15] rounded-full opacity-50"></div>
                    </div>

                    {/* Screen Bezel & Display Area */}
                    <div className="relative w-full h-full bg-black rounded-[1%] overflow-hidden shadow-inner ring-1 ring-white/5 group">
                        {/* Glossy Reflection (Subtle) */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none z-20 opacity-30"></div>

                        {/* Main Content (The "Screen") */}
                        <div className="relative z-10 w-full h-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
                            {children}
                        </div>
                    </div>

                    {/* Logo at bottom of bezel */}
                    <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-white/20 text-[0.6cqw] font-sans font-medium tracking-widest z-20 pointer-events-none uppercase">
                        MacBook Pro
                    </div>
                </div>

                {/* Laptop Base (Top Deck) */}
                <div className="relative w-[120%] -left-[10%] h-[4%] bg-[#272729] rounded-[0_0_10px_10px] shadow-2xl flex items-start justify-center overflow-hidden">
                    {/* Hinge Indentation */}
                    <div className="w-[15%] h-[40%] bg-[#1a1a1a] rounded-[0_0_10px_10px]"></div>

                    {/* Edge Highlight */}
                    <div className="absolute top-0 w-full h-[1px] bg-white/10"></div>
                </div>

                {/* GLOW EFFECT under laptop - NEON BOOSTED */}
                <div
                    className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[140%] h-[50%] bg-gold/30 blur-[120px] rounded-[100%] z-[-1] opacity-80 animate-pulse-slow"
                    style={{
                        background: "radial-gradient(circle at center, rgba(212,175,55,0.6) 0%, rgba(212,175,55,0.1) 60%, transparent 80%)"
                    }}
                ></div>
                {/* Secondary Core Glow for "Radioactive" Pop */}
                <div
                    className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-gold/50 blur-[60px] rounded-[100%] z-[-1] opacity-60"
                ></div>
            </div>
        </>
    );
};
