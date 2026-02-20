"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import { FiChevronDown } from "react-icons/fi";

const USDC_ICON = "https://cryptologos.cc/logos/usd-coin-usdc-logo.png";
const SAPPHIRE_ICON = "https://cryptologos.cc/logos/oasis-network-rose-logo.png";
const BASE_ICON = "/usdc-base.png";
const ARBITRUM_ICON = "https://cryptologos.cc/logos/arbitrum-arb-logo.png";

const MAIN_OPTIONS = [
    {
        id: "sapphire",
        title: "USDC yield on Sapphire",
        apy: "2.2%",
        chainIcon: SAPPHIRE_ICON,
        tokenIcon: USDC_ICON,
    },
    {
        id: "base-v2",
        title: "USDC yield V2 on Base",
        apy: "61.03%",
        chainIcon: BASE_ICON,
        tokenIcon: USDC_ICON,
    },
];

const DROPDOWN_OPTIONS = [
    {
        id: "base",
        title: "USDC yield on Base",
        apy: "2.7%",
        chainIcon: BASE_ICON,
        tokenIcon: USDC_ICON,
    },
    {
        id: "arbitrum",
        title: "USDC yield on Arbitrum",
        apy: "2.69%",
        chainIcon: ARBITRUM_ICON,
        tokenIcon: USDC_ICON,
    },
];

// All selectable options combined
const ALL_OPTIONS = [...MAIN_OPTIONS, ...DROPDOWN_OPTIONS];

export function YieldSelector() {
    const [activeId, setActiveId] = useState("sapphire");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeDropdownOption = DROPDOWN_OPTIONS.find((o) => o.id === activeId);

    return (
        <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-1 scrollbar-none">
            {MAIN_OPTIONS.map((option) => (
                <button
                    key={option.id}
                    onClick={() => setActiveId(option.id)}
                    className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all shrink-0",
                        activeId === option.id
                            ? "border-red-500 bg-[#1c1212]"
                            : "border-[#2a2a2a] bg-[#141414] hover:bg-[#1a1a1a]"
                    )}
                >
                    {/* Stacked icons: chain behind, token in front */}
                    <div className="relative w-8 h-8 shrink-0">
                        <img
                            src={option.chainIcon}
                            alt="chain"
                            className="absolute top-0 left-0 w-6 h-6 rounded-full object-cover border border-[#222]"
                        />
                        <img
                            src={option.tokenIcon}
                            alt="token"
                            className="absolute bottom-0 right-0 w-4 h-4 rounded-full object-cover border border-[#141414]"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <span
                            className={cn(
                                "text-sm font-semibold whitespace-nowrap",
                                activeId === option.id ? "text-white" : "text-gray-300"
                            )}
                        >
                            {option.title}
                        </span>
                        <span className="text-xs text-gray-500">
                            APY:{" "}
                            <span
                                className={cn(
                                    "font-semibold",
                                    activeId === option.id ? "text-red-500" : "text-gray-400"
                                )}
                            >
                                {option.apy}
                            </span>
                        </span>
                    </div>
                </button>
            ))}

            {/* Dropdown trigger */}
            <div className="relative shrink-0" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={cn(
                        "flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all h-full min-h-[68px]",
                        activeDropdownOption
                            ? "border-red-500 bg-[#1c1212]"
                            : "border-[#2a2a2a] bg-[#141414] hover:bg-[#1a1a1a]"
                    )}
                >
                    {/* Stacked icons for the two dropdown options */}
                    <div className="relative w-10 h-7 shrink-0">
                        <img
                            src={BASE_ICON}
                            alt="base"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full object-cover border border-[#222]"
                        />
                        <img
                            src={USDC_ICON}
                            alt="usdc"
                            className="absolute left-3 bottom-0 w-4 h-4 rounded-full object-cover border border-[#141414]"
                        />
                        <img
                            src={ARBITRUM_ICON}
                            alt="arbitrum"
                            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full object-cover border border-[#222]"
                        />
                        <img
                            src={USDC_ICON}
                            alt="usdc"
                            className="absolute right-0 bottom-0 w-4 h-4 rounded-full object-cover border border-[#141414]"
                        />
                    </div>
                    <FiChevronDown
                        className={cn(
                            "text-gray-400 w-4 h-4 transition-transform",
                            dropdownOpen && "rotate-180"
                        )}
                    />
                </button>

                {/* Dropdown panel */}
                {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 z-50 bg-[#181818] border border-[#2a2a2a] rounded-2xl p-4 w-[340px] shadow-xl">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-gray-500 text-xs">
                                    <th className="text-left font-normal pb-3">Name</th>
                                    <th className="text-center font-normal pb-3">Chain</th>
                                    <th className="text-center font-normal pb-3">Token</th>
                                    <th className="text-right font-normal pb-3">APY</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#222]">
                                {DROPDOWN_OPTIONS.map((opt) => (
                                    <tr
                                        key={opt.id}
                                        className="cursor-pointer hover:bg-[#222] transition-colors"
                                        onClick={() => {
                                            setActiveId(opt.id);
                                            setDropdownOpen(false);
                                        }}
                                    >
                                        <td className="py-3 text-white font-medium pr-4 whitespace-nowrap">
                                            {opt.title}
                                        </td>
                                        <td className="py-3 text-center">
                                            <img
                                                src={opt.chainIcon}
                                                alt="chain"
                                                className="w-6 h-6 rounded-full object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="py-3 text-center">
                                            <img
                                                src={opt.tokenIcon}
                                                alt="token"
                                                className="w-6 h-6 rounded-full object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="py-3 text-right text-white font-medium">
                                            {opt.apy}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}