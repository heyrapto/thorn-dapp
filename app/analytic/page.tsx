"use client";

import React from "react";
import { AnalyticCharts } from "@/app/components/analytic/AnalyticCharts";
import { TokensTable } from "@/app/components/analytic/TokensTable";
import { PoolsTable } from "@/app/components/analytic/PoolsTable";
import { FaTelegramPlane, FaDiscord, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AnalyticPage() {
    return (
        <div className="w-full flex-1 flex flex-col pt-4 relative">
            <h2 className="text-xl font-bold text-white mb-6 lg:hidden">ThornSwap Info &amp; Analytics</h2>

            {/* Charts Section */}
            <AnalyticCharts />

            {/* Tokens Table Section */}
            <TokensTable />

            {/* Pools Table Section */}
            <PoolsTable />

            {/* Floating Social Icons — hidden on mobile (sidebar shows them instead) */}
            <div className="hidden lg:flex absolute bottom-10 right-4 items-center gap-4 text-gray-400 z-40">
                <a href="#" className="hover:text-white transition-colors"><FaTelegramPlane className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><FaXTwitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><FaDiscord className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><FaMediumM className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition-colors flex items-center justify-center w-5 h-5 font-bold italic border-[1.5px] border-current rounded-full text-[10px]">Z</a>
            </div>

            {/* Floating Agent Icon */}
            <div className="fixed bottom-8 right-4 md:right-10 z-50 cursor-pointer hover:scale-105 transition-transform duration-200">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-red-800 shadow-[0_0_20px_rgba(150,0,0,0.3)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 rounded-full border border-red-500/30 opacity-50 scale-95" />
                    <div className="w-10 h-7 bg-[#1c1c1c] rounded-xl flex items-center justify-center gap-2 border border-[#333] shadow-inner">
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_white]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
