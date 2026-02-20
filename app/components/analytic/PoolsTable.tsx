"use client";

import React from "react";
import Link from "next/link";
import { TokenIcon } from "@/app/components/shared/TokenIcon";

const POOLS_DATA = [
    { no: 1, tokens: ["stROSE", "ROSE"] as const, pair: "stROSE/ROSE", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$99K" },
    { no: 2, tokens: ["USDC", "bitUSDs"] as const, pair: "USDC/bitUSDs", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$8.03" },
    { no: 3, tokens: ["USDT", "bitUSDs"] as const, pair: "USDT/bitUSDs", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$5.37" },
    { no: 4, tokens: ["OCEAN(Router)", "OCEAN(Celer)"] as const, pair: "OCEAN(Router)/OCEAN(Celer)", vol24: "$0", vol7d: "$0", fee24: "$0", apr: "--", liq: "$0.02" },
];

export function PoolsTable() {
    return (
        <div className="w-full mb-20">
            <h2 className="text-xl font-bold text-white mb-4">Pools</h2>

            <div className="w-full bg-[#1e1e1e] border border-[#2a2a2a] rounded-xl overflow-hidden shadow-xl">
                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse min-w-[560px]">
                        <thead>
                            <tr className="bg-[#252525] border-b border-[#333]">
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 w-12">No</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400">Pair</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 text-right hidden sm:table-cell">Volume 24H</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 text-right hidden md:table-cell">Volume 7D</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 text-right hidden md:table-cell">Fees 24H</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 text-right hidden lg:table-cell">LP APR</th>
                                <th className="py-4 px-4 md:px-6 text-[13px] font-medium text-gray-400 text-right">Liquidity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {POOLS_DATA.map((row) => (
                                <tr key={row.no} className="border-b border-[#2a2a2a] hover:bg-[#252525] transition-colors last:border-b-0">
                                    <td className="py-4 px-4 md:px-6 text-sm text-gray-300">{row.no}</td>
                                    <td className="py-4 px-4 md:px-6">
                                        <Link href="/analytic/1" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
                                            <div className="flex items-center">
                                                <TokenIcon symbol={row.tokens[0]} size={20} />
                                                <div className="-ml-1.5 z-10">
                                                    <TokenIcon symbol={row.tokens[1]} size={20} />
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-gray-200 truncate max-w-[100px] sm:max-w-none">{row.pair}</span>
                                        </Link>
                                    </td>
                                    <td className="py-4 px-4 md:px-6 text-sm font-bold text-white text-right hidden sm:table-cell">{row.vol24}</td>
                                    <td className="py-4 px-4 md:px-6 text-sm font-bold text-white text-right hidden md:table-cell">{row.vol7d}</td>
                                    <td className="py-4 px-4 md:px-6 text-sm font-bold text-white text-right hidden md:table-cell">{row.fee24}</td>
                                    <td className="py-4 px-4 md:px-6 text-sm font-bold text-white text-right hidden lg:table-cell">{row.apr}</td>
                                    <td className="py-4 px-4 md:px-6 text-sm font-bold text-white text-right">{row.liq}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
