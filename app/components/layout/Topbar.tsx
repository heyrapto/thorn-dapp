"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LuWallet } from "react-icons/lu";
import { FiMenu } from "react-icons/fi";


export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
    const pathname = usePathname();

    let title = "OmniFarming AI Agent";
    if (pathname.includes("/stable-swap/manager")) {
        title = "Position Manager";
    } else if (pathname.includes("/stable-swap")) {
        title = "Swap";
    } else if (pathname.includes("/analytic")) {
        title = "ThornSwap Info & Analytics";
    }

    return (
        <header className="w-full flex items-center justify-between h-16 md:h-20 px-4 md:px-10 mb-4 md:mb-6 mt-2">
            {/* Page title — hidden on mobile */}
            <h1 className="hidden lg:block text-white text-2xl font-semibold">{title}</h1>

            {/* Mobile: left side is empty spacer so the right buttons stay right-aligned */}
            <div className="lg:hidden" />

            <div className="flex items-center gap-3">
                {pathname.includes("/stable-swap") && (
                    <button className="hidden md:flex items-center gap-2 bg-[#1a1a1a] bg-opacity-80 border border-[#333] hover:border-[#444] text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors">
                        <img src="/OASIS.jpg" alt="Oasis" className="w-5 h-5 rounded-full object-cover" />
                        Oasis Sapphire
                    </button>
                )}

                <button className="flex items-center gap-3 bg-[#1e1114] bg-opacity-80 border border-[#3a1d24] hover:border-[#522933] text-gray-300 px-3 md:px-4 py-2 rounded-xl transition-colors text-left">
                    <LuWallet className="w-5 h-5 text-gray-400" />
                    <div className="flex flex-col">
                        <span className="text-white font-semibold text-sm leading-tight">0x182A...0eDb</span>
                        <span className="text-[10px] text-gray-400 mt-0.5 leading-tight hidden md:block">Create AI Wallet +</span>
                    </div>
                </button>

                {/* Hamburger — only on mobile */}
                <button
                    onClick={onMenuClick}
                    className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:text-white transition-colors"
                    aria-label="Open menu"
                >
                    <FiMenu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
