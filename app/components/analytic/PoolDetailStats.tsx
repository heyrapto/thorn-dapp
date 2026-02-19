"use client";

import React from "react";

export function PoolDetailStats() {
    return (
        <div className="w-[320px] bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 shadow-xl flex flex-col gap-10">
            <h2 className="text-xl font-medium text-white mb-2">Stats</h2>

            <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-sm font-medium text-gray-400">TVL</span>
                <span className="text-4xl font-semibold text-white tracking-tight">$99K</span>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-sm font-medium text-gray-400">24H Volume</span>
                <span className="text-4xl font-semibold text-white tracking-tight">$0</span>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
                <span className="text-sm font-medium text-gray-400">24H Fees</span>
                <span className="text-4xl font-semibold text-white tracking-tight">$0</span>
            </div>
        </div>
    );
}
