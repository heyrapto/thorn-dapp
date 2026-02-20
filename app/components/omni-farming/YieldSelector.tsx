"use client";

import React, { useState } from "react";
import { cn } from "@/app/lib/utils";
import { FiChevronDown } from "react-icons/fi";

const YIELD_OPTIONS = [
    {
        id: "sapphire",
        title: "USDC yield on Sapphire",
        apy: "2.2%",
        isActive: true,
    },
    {
        id: "base",
        title: "USDC yield V2 on Base",
        apy: "61.03%",
        isActive: false,
    },
];

export function YieldSelector() {
    const [activeId, setActiveId] = useState("sapphire");

    return (
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0">
            {YIELD_OPTIONS.map((option) => (
                <button
                    key={option.id}
                    onClick={() => setActiveId(option.id)}
                    className={cn(
                        "flex flex-col items-start px-5 py-2.5 rounded-2xl border transition-all",
                        activeId === option.id
                            ? "border-red-500 bg-[#1a1313]"
                            : "border-[#333] bg-[#141414] hover:bg-[#1a1a1a]"
                    )}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img
                                src={option.id === "sapphire" ? "/usdc-sapphire.png" : "/usdc-base.png"}
                                alt={option.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className={cn("text-sm font-medium whitespace-nowrap", activeId === option.id ? "text-white" : "text-gray-300")}>
                            {option.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">APY:</span>
                        <span className={cn("text-xs font-semibold", activeId === option.id ? "text-red-500" : "text-gray-400")}>
                            {option.apy}
                        </span>
                    </div>
                </button>
            ))}

            {/* Dropdown for more options */}
            <button className="flex items-center justify-center h-[60px] px-4 rounded-2xl border border-[#333] bg-[#141414] hover:bg-[#1a1a1a] transition-all">
                <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-500 -ml-2"></div>
                </div>
                <FiChevronDown className="text-gray-400 ml-2" />
            </button>
        </div>
    );
}
