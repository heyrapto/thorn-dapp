"use client";

import React, { useState } from "react";
import { FiChevronDown, FiSettings, FiInfo, FiArrowDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

// Token Icons (SVG or CSS approximations)
const TokenIcon = ({ symbol }: { symbol: string }) => {
    switch (symbol) {
        case "stROSE":
            return (
                <div className="w-5 h-5 rounded-full bg-[#5a2e8c] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
                </div>
            );
        case "ROSE":
            return (
                <div className="w-5 h-5 rounded-full bg-[#0092f4] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-[1.5px] border-white scale-75"></div>
                </div>
            );
        case "USDC":
            return (
                <div className="w-5 h-5 rounded-full bg-[#2775ca] flex items-center justify-center text-white text-[10px] font-bold">
                    $
                </div>
            );
        case "bitUSDs":
            return (
                <div className="w-5 h-5 rounded-full bg-[#00d0c3] flex items-center justify-center text-white text-[10px] font-bold">
                    B
                </div>
            );
        case "USDT":
            return (
                <div className="w-5 h-5 rounded-full bg-[#26a17b] flex items-center justify-center text-white text-[10px] font-bold">
                    T
                </div>
            );
        case "OCEAN(Router)":
        case "OCEAN(Celer)":
            return (
                <div className="w-5 h-5 rounded-full bg-transparent border-[1.5px] border-dotted border-gray-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                </div>
            );
        default:
            return <div className="w-5 h-5 rounded-full bg-gray-500"></div>;
    }
};

const TOKENS = ["stROSE", "ROSE", "USDC", "bitUSDs", "USDT", "OCEAN(Router)", "OCEAN(Celer)"];

export function SwapCard() {
    const [fromToken, setFromToken] = useState("stROSE");
    const [toToken, setToToken] = useState("ROSE");
    const [fromAmount, setFromAmount] = useState("");
    const [toAmount, setToAmount] = useState("");
    const [openDropdown, setOpenDropdown] = useState<"from" | "to" | null>(null);

    const handleSwapDirection = () => {
        const tempToken = fromToken;
        setFromToken(toToken);
        setToToken(tempToken);

        const tempAmount = fromAmount;
        setFromAmount(toAmount);
        setToAmount(tempAmount);
    };

    return (
        <div className="w-full max-w-[480px] bg-[#1c1c1c] rounded-2xl p-5 shadow-2xl border border-[#2a2a2a] relative">
            <h2 className="text-2xl font-semibold text-white">Swap</h2>
            <p className="text-sm text-gray-400 mt-1 mb-6">Trade tokens in an instant</p>

            {/* From Panel */}
            <div className="bg-[#1a080c] rounded-xl p-4 flex flex-col relative">
                <div className="flex items-center justify-between gap-4">
                    <input
                        type="number"
                        placeholder="0.0"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="bg-transparent border-none outline-none text-2xl font-medium text-white flex-1 min-w-0"
                    />

                    <div className="flex items-center gap-3 relative">
                        <button className="text-[13px] font-semibold text-white hover:text-red-400 transition-colors">
                            Max
                        </button>
                        <div className="w-[1px] h-6 bg-gray-700"></div>
                        <button
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            onClick={() => setOpenDropdown(openDropdown === "from" ? null : "from")}
                        >
                            <TokenIcon symbol={fromToken} />
                            <span className="text-white font-medium text-lg">{fromToken}</span>
                            <FiChevronDown className="w-4 h-4 text-gray-400 ml-1" />
                        </button>

                        {/* From Token Dropdown */}
                        <AnimatePresence>
                            {openDropdown === "from" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 right-0 w-56 bg-[#120508] border border-[#2a1318] rounded-xl shadow-xl z-50 overflow-hidden"
                                >
                                    <div className="flex flex-col py-2">
                                        {TOKENS.map(token => (
                                            <button
                                                key={token}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f0a0e] transition-colors w-full text-left"
                                                onClick={() => {
                                                    setFromToken(token);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                <TokenIcon symbol={token} />
                                                <span className="text-gray-200 text-lg">{token}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="text-right mt-2 text-xs text-gray-500">
                    Balance: 0
                </div>
            </div>

            {/* Swap Arrow */}
            <div className="relative h-2 flex items-center justify-center my-1 z-10">
                <button
                    onClick={handleSwapDirection}
                    className="w-10 h-10 rounded-full bg-[#1e0d11] border-4 border-[#1c1c1c] flex items-center justify-center hover:bg-[#2a1318] transition-colors absolute"
                >
                    <FiArrowDown className="w-5 h-5 text-red-500" />
                </button>
            </div>

            {/* To Panel */}
            <div className="bg-[#1a080c] rounded-xl p-4 flex flex-col relative">
                <div className="flex items-center justify-between gap-4">
                    <input
                        type="number"
                        placeholder="0.0"
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="bg-transparent border-none outline-none text-2xl font-medium text-white flex-1 min-w-0"
                    />

                    <div className="flex items-center gap-2 relative justify-end">
                        <button
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity pl-2"
                            onClick={() => setOpenDropdown(openDropdown === "to" ? null : "to")}
                        >
                            <TokenIcon symbol={toToken} />
                            <span className="text-white font-medium text-lg">{toToken}</span>
                            <FiChevronDown className="w-4 h-4 text-gray-400 ml-1" />
                        </button>

                        {/* To Token Dropdown */}
                        <AnimatePresence>
                            {openDropdown === "to" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-12 right-0 w-56 bg-[#120508] border border-[#2a1318] rounded-xl shadow-xl z-50 overflow-hidden"
                                >
                                    <div className="flex flex-col py-2">
                                        {TOKENS.map(token => (
                                            <button
                                                key={token}
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#1f0a0e] transition-colors w-full text-left"
                                                onClick={() => {
                                                    setToToken(token);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                <TokenIcon symbol={token} />
                                                <span className="text-gray-200 text-lg">{token}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="text-right mt-2 text-xs text-gray-500">
                    Balance: 0
                </div>
            </div>

            {/* Exchange Details */}
            <div className="flex flex-col gap-2.5 mt-6 px-1">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400">Exchange rate (incl. fees)</span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">stROSE/ROSE</span>
                        <span className="bg-[#252525] px-2 py-0.5 rounded text-white font-mono text-sm">--</span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5">
                        Price impact <FiInfo className="w-3.5 h-3.5" />
                    </span>
                    <span className="bg-[#252525] px-2 py-0.5 rounded text-white font-mono text-sm text-right">--</span>
                </div>

                <div className="flex flex-col mt-1">
                    <span className="text-sm font-medium text-gray-400">Trade routed through</span>
                    <div className="flex items-center gap-2 text-sm mt-0.5">
                        <span className="text-white font-semibold">ROSE-stROSE:</span>
                        <span className="text-gray-400 flex items-center gap-1">
                            stROSE <span className="text-white">→</span> ROSE
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-medium text-gray-400">Slippage tolerance</span>
                    <div className="flex items-center gap-2">
                        <span className="text-white font-semibold text-sm">0.03%</span>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            <FiSettings className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-medium text-gray-400">Pay gas by</span>
                    <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                        <TokenIcon symbol="ROSE" />
                        ROSE
                    </div>
                </div>
            </div>

            {/* Execute Button */}
            <button className="w-full bg-[#252525] hover:bg-[#2f2f2f] text-white font-semibold py-4 rounded-xl mt-6 transition-colors border border-[#333]">
                Execute
            </button>
        </div>
    );
}
