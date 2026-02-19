"use client";

import React from "react";
import { SwapCard } from "@/app/components/stable-swap/SwapCard";

export default function StableSwapPage() {
    return (
        <div className="w-full flex-1 flex flex-col pt-10 px-6 relative min-h-[calc(100vh-100px)]">
            {/* Center Container for Swap Card */}
            <div className="flex justify-center w-full mt-8">
                <SwapCard />
            </div>

            {/* Floating Agent Icon */}
            <div className="fixed bottom-10 right-10 z-50 cursor-pointer hover:scale-105 transition-transform duration-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-red-800 shadow-[0_0_20px_rgba(150,0,0,0.3)] flex items-center justify-center relative overflow-hidden">
                    {/* Inner glowing edge */}
                    <div className="absolute inset-0 rounded-full border border-red-500/30 opacity-50 scale-95"></div>

                    {/* Robot Face Box */}
                    <div className="w-10 h-7 bg-[#1c1c1c] rounded-xl flex items-center justify-center gap-2 border border-[#333] shadow-inner">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
