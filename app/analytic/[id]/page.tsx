"use client";

import React from "react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FaTelegramPlane, FaDiscord, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PoolDetailChart } from "@/app/components/analytic/PoolDetailChart";
import { PoolDetailStats } from "@/app/components/analytic/PoolDetailStats";

const TokenIcon = ({ symbol }: { symbol: string }) => {
    switch (symbol) {
        case "stROSE":
            return (
                <div className="w-8 h-8 rounded-full bg-[#5a2e8c] flex items-center justify-center border-2 border-[#1c1c1c]">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-white"></div>
                </div>
            );
        case "ROSE":
            return (
                <div className="w-8 h-8 rounded-full bg-[#0092f4] flex items-center justify-center border-2 border-[#1c1c1c]">
                    <div className="w-5 h-5 rounded-full border-[1.5px] border-white scale-75"></div>
                </div>
            );
        default:
            return <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#1c1c1c]"></div>;
    }
};

export default function PoolDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="w-full flex-1 flex flex-col pt-4 px-10 relative min-h-[calc(100vh-100px)]">

            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-4 mb-8">
                <Link href="/analytic" className="text-gray-400 hover:text-white transition-colors">
                    <FiChevronLeft className="w-6 h-6" />
                </Link>
                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <TokenIcon symbol="stROSE" />
                        <div className="-ml-3 z-10">
                            <TokenIcon symbol="ROSE" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">stROSE/ROSE</h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                <PoolDetailChart />
                <PoolDetailStats />
            </div>

            {/* Floating Social Icons */}
            <div className="fixed bottom-10 right-32 flex items-center gap-4 text-gray-400 z-40">
                <a href="#" className="hover:text-white transition-colors">
                    <FaTelegramPlane className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                    <FaXTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                    <FaDiscord className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                    <FaMediumM className="w-5 h-5" />
                </a>
                {/* Zealy Icon placeholder */}
                <a href="#" className="hover:text-white transition-colors flex items-center justify-center w-5 h-5 font-bold italic border-[1.5px] border-current rounded-full text-[10px]">
                    Z
                </a>
            </div>

            {/* Floating Agent Icon */}
            <div className="fixed bottom-8 right-10 z-50 cursor-pointer hover:scale-105 transition-transform duration-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-red-800 shadow-[0_0_20px_rgba(150,0,0,0.3)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full border border-red-500/30 opacity-50 scale-95"></div>
                    <div className="w-10 h-7 bg-[#1c1c1c] rounded-xl flex items-center justify-center gap-2 border border-[#333] shadow-inner">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
