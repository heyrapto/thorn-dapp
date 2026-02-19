"use client";

import React from "react";
import Link from "next/link";

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

const POOLS_DATA = [
    { no: 1, tokens: ["stROSE", "ROSE"], pair: "stROSE/ROSE", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$99K" },
    { no: 2, tokens: ["USDC", "bitUSDs"], pair: "USDC/bitUSDs", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$8.03" },
    { no: 3, tokens: ["USDT", "bitUSDs"], pair: "USDT/bitUSDs", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$5.37" },
    { no: 4, tokens: ["OCEAN", "OCEAN"], pair: "OCEAN(Router)/OCEAN(Celer)", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$0.02" },
];

export function PoolsTable() {
    return (
        <div className="w-full mb-20">
            <h2 className="text-xl font-bold text-white mb-4">Pools</h2>

            <div className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-[#252525] border-b border-[#333]">
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 w-16">No</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400">Pair</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right">Volume 24H</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right">Volume 7D</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right">LP Reward Fees 24H</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right">LP Reward APR</th>
                                <th className="py-4 px-6 text-[13px] font-medium text-gray-400 text-right">Liquidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {POOLS_DATA.map((row) => (
                                <tr key={row.no} className="border-b border-[#2a2a2a] hover:bg-[#252525] transition-colors last:border-b-0">
                                    <td className="py-4 px-6 text-sm text-gray-300">{row.no}</td>
                                    <td className="py-4 px-6">
                                        <Link href="/analytic/1" className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit">
                                            <div className="flex items-center">
                                                <TokenIcon symbol={row.tokens[0]} />
                                                <div className="-ml-1.5 z-10">
                                                    <TokenIcon symbol={row.tokens[1]} />
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-200">{row.pair}</span>
                                        </Link>
                                    </td>
                                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{row.vol24}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{row.vol7d}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{row.fee24}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{row.apr}</td>
                                    <td className="py-4 px-6 text-sm font-bold text-white text-right">{row.liq}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
