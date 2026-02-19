"use client";

import React from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const TokenIcon = ({ symbol }: { symbol: string }) => {
    switch (symbol) {
        case "stROSE":
            return (
                <div className="w-5 h-5 rounded-full bg-[#5a2e8c] flex items-center justify-center border border-[#1c1c1c]">
                    <div className="w-2.5 h-2.5 rounded-full border border-white"></div>
                </div>
            );
        case "ROSE":
            return (
                <div className="w-5 h-5 rounded-full bg-[#0092f4] flex items-center justify-center border border-[#1c1c1c]">
                    <div className="w-3 h-3 rounded-full border-[1.5px] border-white scale-75"></div>
                </div>
            );
        case "USDC":
            return (
                <div className="w-5 h-5 rounded-full bg-[#2775ca] flex items-center justify-center text-white text-[10px] font-bold border border-[#1c1c1c]">
                    $
                </div>
            );
        case "bitUSDs":
            return (
                <div className="w-5 h-5 rounded-full bg-[#00d0c3] flex items-center justify-center text-white text-[10px] font-bold border border-[#1c1c1c]">
                    B
                </div>
            );
        case "USDT":
            return (
                <div className="w-5 h-5 rounded-full bg-[#26a17b] flex items-center justify-center text-white text-[10px] font-bold border border-[#1c1c1c]">
                    T
                </div>
            );
        case "OCEAN(Router)":
        case "OCEAN(Celer)":
        case "OCEAN":
            return (
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center border border-[#1c1c1c]">
                    <div className="w-[14px] h-[14px] rounded-full border-[1.5px] border-dotted border-gray-800 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-800"></div>
                    </div>
                </div>
            );
        default:
            return <div className="w-5 h-5 rounded-full bg-gray-500 border border-[#1c1c1c]"></div>;
    }
};

const TOKENS_DATA = [
    { no: 1, symbol: "stROSE", name: "Accumulated Finance Staked ROSE (stROSE)", price: "$0.01237", change: "8.33%", changeType: "down", vol: "$0", liq: "$64.8K" },
    { no: 2, symbol: "ROSE", name: "Oasis Network (ROSE)", price: "$0.01237", change: "8.33%", changeType: "down", vol: "$0", liq: "$34.2K" },
    { no: 3, symbol: "USDC", name: "Bridged USDC (USDC)", price: "$1", change: "0.01%", changeType: "up", vol: "$0", liq: "$0" },
    { no: 4, symbol: "bitUSDs", name: "bitUSDs (bitUSDs)", price: "$1", change: "0.01%", changeType: "up", vol: "$0", liq: "$12.3" },
    { no: 5, symbol: "USDT", name: "Tether USD (USDT)", price: "$0.999712", change: "0%", changeType: "up", vol: "$0", liq: "$1.06" },
    { no: 6, symbol: "OCEAN", name: "OCEAN (Router)", price: "$0.106882", change: "0.87%", changeType: "down", vol: "$0", liq: "$0.01" },
    { no: 7, symbol: "OCEAN", name: "OCEAN (Celer)", price: "$0.106882", change: "0.87%", changeType: "down", vol: "$0", liq: "$0.01" },
];

export function TokensTable() {
    return (
        <div className="w-full mb-10">
            <h2 className="text-xl font-bold text-white mb-4">Tokens</h2>

            <div className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-[#252525] border-b border-[#333]">
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 w-16">No</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400">Name</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right w-32">Price</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right w-32">Price Change</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right w-32">Volume 24H</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right w-32">Liquidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TOKENS_DATA.map((row, i) => (
                                <tr key={row.no} className={`border-b border-[#2a2a2a] hover:bg-[#252525] transition-colors ${i === TOKENS_DATA.length - 1 ? 'border-b-0' : ''}`}>
                                    <td className="py-4 px-6 text-sm text-gray-300">{row.no}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <TokenIcon symbol={row.symbol} />
                                            <span className="text-sm font-medium text-gray-200">{row.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-white text-right">{row.price}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-right">
                                        <div className={`flex items-center justify-end gap-1 ${row.changeType === 'up' ? 'text-[#00c087]' : 'text-[#ff4d4f]'}`}>
                                            {row.changeType === 'down' ? <FiArrowDown className="w-3.5 h-3.5" /> : <FiArrowUp className="w-3.5 h-3.5" />}
                                            {row.change}
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-medium text-white text-right">{row.vol}</td>
                                    <td className="py-4 px-6 text-sm font-medium text-white text-right">{row.liq}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
