"use client";

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";
import { FiChevronDown } from "react-icons/fi";

const DUMMY_DATA = Array.from({ length: 30 }).map((_, i) => ({
    date: `Feb 19, 26`,
    value: 95000 + Math.random() * 8000
}));

export function PoolDetailChart() {
    const [timeframe, setTimeframe] = useState("1D");

    const yAxisFormatter = (num: number) => {
        if (num >= 1000) {
            return "$" + (num / 1000) + "K";
        }
        return "$" + num.toString();
    };

    return (
        <div className="flex-1 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 shadow-xl relative min-h-[450px] flex flex-col">
            <div className="absolute top-6 left-6 z-10">
                <div className="text-white text-3xl font-semibold tracking-tight mb-1">$98.9K</div>
                <div className="text-gray-400 text-sm">Feb 19, 2026, 10:00 PM (UTC)</div>
            </div>

            <div className="w-full h-[280px] mt-24 mb-10">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DUMMY_DATA} margin={{ top: 10, right: 0, left: -10, bottom: 0 }} barGap={2} barCategoryGap="15%">
                        <defs>
                            <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#d17a7f" stopOpacity={1} />
                                <stop offset="100%" stopColor="#4a1518" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={true}
                            tick={{ fill: '#666', fontSize: 11 }}
                            tickMargin={12}
                            interval={5}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#666', fontSize: 11 }}
                            tickFormatter={yAxisFormatter}
                            domain={[0, 130000]}
                            ticks={[0, 25000, 50000, 75000, 100000, 130000]}
                            orientation="right"
                        />
                        <Tooltip
                            cursor={{ fill: '#2a2a2a' }}
                            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Bar
                            dataKey="value"
                            radius={[4, 4, 4, 4]}
                            isAnimationActive={false}
                        >
                            {DUMMY_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="url(#colorBar)" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-between w-full mt-auto">
                <div className="flex items-center gap-1 bg-transparent">
                    {["1H", "1D", "1W", "1M", "1Y"].map((tf) => (
                        <button
                            key={tf}
                            onClick={() => setTimeframe(tf)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${timeframe === tf
                                    ? "bg-[#9d0c15] text-white"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tf}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <button className="flex items-center gap-2 bg-[#252525] border border-[#333] hover:border-[#444] text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                        Liquidity
                        <FiChevronDown className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
