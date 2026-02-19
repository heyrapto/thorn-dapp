"use client";

import React from "react";
import { FiCopy } from "react-icons/fi";

const TokenIcon = ({ symbol }: { symbol: string }) => {
    switch (symbol) {
        case "stROSE":
            return (
                <div className="w-6 h-6 rounded-full bg-[#5a2e8c] flex items-center justify-center border-2 border-[#1c1c1c]">
                    <div className="w-3 h-3 rounded-full border border-white"></div>
                </div>
            );
        case "ROSE":
            return (
                <div className="w-6 h-6 rounded-full bg-[#0092f4] flex items-center justify-center border-2 border-[#1c1c1c]">
                    <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white scale-75"></div>
                </div>
            );
        case "USDC":
            return (
                <div className="w-6 h-6 rounded-full bg-[#2775ca] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#1c1c1c]">
                    $
                </div>
            );
        case "bitUSDs":
            return (
                <div className="w-6 h-6 rounded-full bg-[#00d0c3] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#1c1c1c]">
                    B
                </div>
            );
        case "USDT":
            return (
                <div className="w-6 h-6 rounded-full bg-[#26a17b] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#1c1c1c]">
                    T
                </div>
            );
        case "OCEAN(Router)":
        case "OCEAN(Celer)":
        case "OCEAN":
            return (
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-[#1c1c1c]">
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-dotted border-gray-800 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    </div>
                </div>
            );
        default:
            return <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-[#1c1c1c]"></div>;
    }
};

export interface PositionData {
    tokens: [string, string];
    category: string;
    title: string;
    subtitle: string;
    fee: string;
    earn: string;
    managedBy: string;
    tvl: string;
    managerFee: string;
    lpContract: string;
    poolContract: string;
}

interface PositionCardProps {
    data: PositionData;
}

export function PositionCard({ data }: PositionCardProps) {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        // Optionally add a toast or visual feedback
    };

    return (
        <div className="w-full bg-[#1e1e1e] rounded-2xl p-6 shadow-xl border border-[#2a2a2a] flex flex-col">
            {/* Header section */}
            <div className="flex flex-col mb-6">
                <div className="flex items-center mb-4">
                    <TokenIcon symbol={data.tokens[0]} />
                    <div className="-ml-2">
                        <TokenIcon symbol={data.tokens[1]} />
                    </div>
                </div>

                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1">
                    {data.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>

                <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-gray-400 font-medium">{data.subtitle}</span>
                    <span className="px-2 py-0.5 rounded-full border border-gray-600 text-[10px] font-medium text-gray-300">
                        {data.fee}
                    </span>
                </div>
            </div>

            {/* Stats section */}
            <div className="flex flex-col gap-3 mb-8 flex-1">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Earn</span>
                    <span className="text-white font-medium">{data.earn}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Managed By</span>
                    <span className="text-white font-medium">{data.managedBy}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Total Value Lock</span>
                    <span className="text-white font-bold">{data.tvl}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Manager Fee</span>
                    <span className="text-white font-medium">{data.managerFee}</span>
                </div>
            </div>

            {/* Actions section */}
            <div className="flex flex-col gap-5 mt-auto">
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Start Earning</span>
                    <button className="w-full bg-[#960912] hover:bg-[#b00b15] text-white font-medium py-3 rounded-lg transition-colors text-sm">
                        Add Liquidity
                    </button>
                </div>

                <div className="flex flex-col gap-1.5 pt-1 border-t border-[#2a2a2a]">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>View LP Contract:</span>
                        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors pt-1" onClick={() => handleCopy(data.lpContract)}>
                            <span className="font-mono text-gray-400">{data.lpContract.substring(0, 6)}...{data.lpContract.substring(data.lpContract.length - 4)}</span>
                            <FiCopy className="w-3.5 h-3.5" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>View Pool Contract:</span>
                        <div className="flex items-center gap-1.5 hover:text-gray-300 cursor-pointer transition-colors" onClick={() => handleCopy(data.poolContract)}>
                            <span className="font-mono text-gray-400">{data.poolContract.substring(0, 6)}...{data.poolContract.substring(data.poolContract.length - 4)}</span>
                            <FiCopy className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
