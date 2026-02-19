"use client";

import React, { useState } from "react";
import { PositionCard, PositionData } from "@/app/components/stable-swap/PositionCard";
import { FiChevronDown } from "react-icons/fi";
import { FaTelegramPlane, FaDiscord, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const positions: PositionData[] = [
    {
        tokens: ["stROSE", "ROSE"],
        category: "ROSE",
        title: "ROSE-stROSE",
        subtitle: "ROSE stROSE",
        fee: "0.04%",
        earn: "LP Fee",
        managedBy: "Thorn Protocol",
        tvl: "$100.39K",
        managerFee: "0.02%",
        lpContract: "0xd6fD...B0D2",
        poolContract: "0x52B0...F877"
    },
    {
        tokens: ["USDC", "bitUSDs"],
        category: "USD",
        title: "bitUSDs-USDC",
        subtitle: "bitUSDs USDC",
        fee: "0.04%",
        earn: "LP Fee",
        managedBy: "Thorn Protocol",
        tvl: "$8.027",
        managerFee: "0.02%",
        lpContract: "0x2741...4DE4",
        poolContract: "0x4937...A8EC"
    },
    {
        tokens: ["USDT", "bitUSDs"],
        category: "USD",
        title: "bitUSDs-USDT",
        subtitle: "bitUSDs USDT",
        fee: "0.04%",
        earn: "LP Fee",
        managedBy: "Thorn Protocol",
        tvl: "$5.37",
        managerFee: "0.02%",
        lpContract: "0x4Fc8...b946",
        poolContract: "0xc399...aE07"
    },
    {
        tokens: ["OCEAN", "OCEAN"],
        category: "OCEAN",
        title: "OCEAN(Router)-OCEAN(Celer)",
        subtitle: "OCEAN(Router)-OCEAN(Celer)",
        fee: "0.04%",
        earn: "LP Fee",
        managedBy: "Thorn Protocol",
        tvl: "$0.021",
        managerFee: "0.02%",
        lpContract: "0x1F33...E2e3",
        poolContract: "0xb13B...CA71"
    }
];

export default function PositionManagerPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-full flex-1 flex flex-col pt-4 px-10 relative min-h-[calc(100vh-100px)]">

            {/* Filter Tabs */}
            <div className="flex items-center gap-3 mb-8">
                {["All", "stROSE", "ROSE"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                            ? "bg-[#9d0c15] text-white shadow-[0_0_15px_rgba(157,12,21,0.5)]"
                            : "bg-[#252525] hover:bg-[#333] text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}

                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#252525] hover:bg-[#333] text-gray-400 hover:text-white`}
                    >
                        Other +5
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-12 left-0 w-48 bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl shadow-xl z-50 overflow-hidden"
                            >
                                <div className="flex flex-col py-2">
                                    {["USDC", "bitUSDs", "USDT", "OCEAN(Router)", "OCEAN(Celer)"].map(option => (
                                        <button
                                            key={option}
                                            className="px-6 py-3 text-left text-sm text-gray-400 hover:bg-[#2a2a2a] hover:text-white transition-colors"
                                            onClick={() => {
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Grid of Position Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-24">
                {positions.map((pos, index) => (
                    <PositionCard key={index} data={pos} />
                ))}
            </div>

            {/* Floating Social Icons */}
            <div className="absolute bottom-10 right-32 flex items-center gap-4 text-gray-400 z-40">
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
