"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidDashboard, BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { FiChevronDown, FiX } from "react-icons/fi";
import {
    FaTelegram,
    FaTwitter,
    FaDiscord,
    FaMedium,
    FaArrowRight,
} from "react-icons/fa";
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

const SOCIAL_LINKS = [
    { href: "https://t.me", icon: FaTelegram, label: "Telegram" },
    { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
    { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
    { href: "https://medium.com", icon: FaMedium, label: "Medium" },
    { href: "#", icon: FaArrowRight, label: "More" },
];

/* ── Nav content shared between desktop sidebar and mobile drawer ── */
function NavContent({
    pathname,
    openDropdown,
    toggleDropdown,
    onLinkClick,
}: {
    pathname: string;
    openDropdown: string | null;
    toggleDropdown: (title: string) => void;
    onLinkClick?: () => void;
}) {
    return (
        <nav className="flex flex-col w-full gap-2 flex-1">
            {NAV_ITEMS.map((item) => {
                const hasChildren = !!item.children;
                const isActive = item.href
                    ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                    : hasChildren &&
                    item.children!.some(
                        (child) =>
                            pathname === child.href ||
                            (child.href !== "/stable-swap" &&
                                pathname.startsWith(`${child.href}/`))
                    );

                const isDropdownOpen = openDropdown === item.title;

                return (
                    <div key={item.title} className="w-full">
                        {hasChildren ? (
                            <button
                                onClick={() => toggleDropdown(item.title)}
                                className={cn(
                                    "w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors border-l-4",
                                    isActive
                                        ? "bg-gray-400/10 text-white border-red-600"
                                        : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white border-transparent"
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
                                onClick={onLinkClick}
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

                        <AnimatePresence>
                            {hasChildren && isDropdownOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col gap-3 mt-3 pb-2 pl-[3.25rem]">
                                        {item.children!.map((child) => (
                                            <Link
                                                key={child.title}
                                                href={child.href}
                                                onClick={onLinkClick}
                                                className={cn(
                                                    "w-full text-[13px] transition-colors block text-left",
                                                    pathname === child.href ||
                                                        (child.href !== "/stable-swap" &&
                                                            pathname.startsWith(`${child.href}/`))
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
    );
}

/* ── Social icons row ── */
function SocialIcons() {
    return (
        <div className="flex md:hidden items-center gap-5 px-4 pb-2">
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Icon className="w-4 h-4" />
                </a>
            ))}
        </div>
    );
}

/* ── Exported Sidebar (desktop fixed + mobile drawer) ── */
export function Sidebar({
    mobileOpen,
    onClose,
}: {
    mobileOpen?: boolean;
    onClose?: () => void;
}) {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>("Stableswap");

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    const innerContent = (closeHandler?: () => void) => (
        <>
            {/* Logo + optional close button */}
            <div className="flex items-center justify-between px-6 w-full mb-20">
                <div className="w-[140px]">
                    <img
                        src="/thorn-logo.png"
                        alt="Thorn Logo"
                        className="w-full h-full rounded-full"
                    />
                </div>
                {closeHandler && (
                    <button
                        onClick={closeHandler}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                        aria-label="Close menu"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                )}
            </div>

            <NavContent
                pathname={pathname}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
                onLinkClick={closeHandler}
            />

            {/* Socials at bottom */}
            <div className="mt-auto pt-8 w-full">
                <SocialIcons />
            </div>
        </>
    );

    return (
        <>
            {/* ── Desktop sidebar (hidden on mobile) ── */}
            <div className="hidden lg:flex w-[260px] flex-shrink-0 bg-[#0c0c0c] border-r border-[#222] min-h-screen flex-col items-start py-6 fixed left-0 top-0 z-40">
                {innerContent()}
            </div>

            {/* ── Mobile drawer ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                        />

                        {/* Drawer panel */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.25 }}
                            className="fixed left-0 top-0 h-full w-[260px] bg-[#0c0c0c] border-r border-[#222] flex flex-col items-start py-6 z-50 lg:hidden"
                        >
                            {innerContent(onClose)}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
