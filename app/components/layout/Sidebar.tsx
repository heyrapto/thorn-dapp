"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidDashboard, BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "@/app/lib/utils";

const NAV_ITEMS = [
    {
        title: "OmniFarming AI Agent",
        href: "/omni-farming",
        icon: BiSolidDashboard,
    },
    {
        title: "Stableswap",
        icon: MdOutlineSwapHoriz,
        children: [
            { title: "Swap", href: "/stable-swap" },
            { title: "Position Manager", href: "/stable-swap/manager" },
        ],
    },
    {
        title: "Analytic",
        href: "/analytic",
        icon: BiBarChartAlt2,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>("Stableswap");

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <div className="w-[260px] flex-shrink-0 bg-[#0c0c0c] border-r border-[#222] min-h-screen flex flex-col items-start py-6 fixed left-0 top-0">
            {/* Logo Area */}
            <div className="flex items-start gap-3 px-6 w-[180px] mb-20">
                <img src="/thorn-logo.png" alt="Thorn Logo" className="w-full h-full rounded-full" />
            </div>

            {/* Nav Menu */}
            <nav className="flex flex-col w-full gap-2">
                {NAV_ITEMS.map((item) => {
                    const hasChildren = !!item.children;
                    const isActive = item.href
                        ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                        : hasChildren && item.children!.some(child => pathname === child.href || (child.href !== "/stable-swap" && pathname.startsWith(`${child.href}/`)));

                    const isDropdownOpen = openDropdown === item.title;

                    return (
                        <div key={item.title} className="w-full">
                            {hasChildren ? (
                                <button
                                    onClick={() => toggleDropdown(item.title)}
                                    className={cn(
                                        "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors border-l-4",
                                        isActive ? "bg-gray-400/10 text-white border-red-600" : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white border-transparent"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-5 h-5 opacity-80" />
                                        <span>{item.title}</span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiChevronDown className="w-4 h-4 opacity-50" />
                                    </motion.div>
                                </button>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-l-4",
                                        isActive
                                            ? "bg-gray-400/10 text-white border-red-600"
                                            : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white border-transparent"
                                    )}
                                >
                                    <item.icon className="w-5 h-5 opacity-80" />
                                    <span>{item.title}</span>
                                </Link>
                            )}

                            {/* Submenu with ease-in-out height animation */}
                            <AnimatePresence>
                                {hasChildren && isDropdownOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-3 mt-3 pb-2 pl-[3.25rem]">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.title}
                                                    href={child.href}
                                                    className={cn(
                                                        "w-full text-[13px] transition-colors block text-left",
                                                        (pathname === child.href || (child.href !== "/stable-swap" && pathname.startsWith(`${child.href}/`)))
                                                            ? "text-red-600 font-medium"
                                                            : "text-gray-400 hover:text-gray-200"
                                                    )}
                                                >
                                                    {child.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}

            </nav>
        </div>
    );
}
