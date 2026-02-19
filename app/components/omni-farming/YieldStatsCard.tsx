"use client";

import React from "react";
import { Card, CardContent } from "@/app/components/ui/Card";
import { FiCheckCircle, FiClock } from "react-icons/fi";

export function YieldStatsCard() {
    return (
        <Card className="mb-6 p-6">
            <div className="flex items-center gap-4 mb-8">
                {/* Mocking the double circle icon of USDC / Sapphire */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-blue-500 rounded-full border-2 border-[#141414]"></div>
                    <div className="absolute -bottom-1 -right-1 bg-[#141414] rounded-full p-0.5">
                        <div className="text-blue-400 border border-blue-400 rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-[#141414]">
                            $
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-[28px] font-semibold text-white tracking-tight leading-tight">
                        USDC yield on Sapphire
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#333] text-xs text-gray-300">
                            <FiCheckCircle className="w-3.5 h-3.5" />
                            <span>Audited</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#333] text-xs text-gray-300">
                            <FiClock className="w-3.5 h-3.5 text-gray-400" />
                            <span>Running time: 10 Days</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400 font-medium">APY</span>
                    <span className="text-3xl font-bold text-red-500">2.2%</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-400 font-medium">Total Value Lock</span>
                    <span className="text-3xl font-bold text-white">$15.59</span>
                </div>
            </div>
        </Card>
    );
}
