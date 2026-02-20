"use client";

import React from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Mock data for Liquidity Chart
const liquidityData = [
    { date: "Jan 23", value: 100000 },
    { date: "Jan 24", value: 160000 },
    { date: "Jan 25", value: 130000 },
    { date: "Jan 26, 26", value: 120000 },
    { date: "Jan 28", value: 140000 },
    { date: "Jan 30", value: 145000 },
    { date: "Feb 1", value: 165000 },
    { date: "Feb 2, 26", value: 140000 },
    { date: "Feb 4", value: 145000 },
    { date: "Feb 6", value: 120000 },
    { date: "Feb 8", value: 120000 },
    { date: "Feb 9, 26", value: 105000 },
    { date: "Feb 10", value: 110000 },
    { date: "Feb 12", value: 120000 },
    { date: "Feb 14", value: 105000 },
    { date: "Feb 15", value: 105000 },
    { date: "Feb 16, 26", value: 100000 },
    { date: "Feb 17", value: 105000 },
    { date: "Feb 18", value: 100000 },
    { date: "Feb 19", value: 105000 },
    { date: "Feb 20", value: 99100 },
];

// Mock data for Volume Chart
const volumeData = [
    { date: "Jan 1, 25", value: 30000 },
    { date: "Feb 1", value: 70000 },
    { date: "Mar 1", value: 15000 },
    { date: "Apr 1", value: 10000 },
    { date: "May 1, 25", value: 5000 },
    { date: "Jun 1", value: 20000 },
    { date: "Jul 1", value: 15000 },
    { date: "Aug 1", value: 5000 },
    { date: "Sep 1, 25", value: 15000 },
    { date: "Oct 1", value: 2000 },
    { date: "Nov 1", value: 1000 },
    { date: "Dec 1", value: 0 },
    { date: "Jan 1, 26", value: 0 },
];

export function AnalyticCharts() {
    // Custom axis tick formatter for standardizing to millions/k
    const yAxisFormatter = (num: number) => {
        if (num >= 1000) {
            return (num / 1000) + "K";
        }
        return num.toString();
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 w-full mb-10">
            {/* Liquidity Chart Card */}
            <div className="flex-1 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 shadow-xl relative min-h-[400px] flex flex-col">
                <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-gray-400 text-sm font-medium mb-1">Liquidity</h3>
                    <div className="text-white text-[28px] font-semibold tracking-tight mb-1">$99.1K</div>
                    <div className="text-gray-400 text-[13px]">Feb 19, 2026, 12:00 AM (UTC)</div>
                </div>

                <div className="w-full h-[320px] mt-24">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={liquidityData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorLiquidity" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#9d0c15" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#9d0c15" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={true}
                                tick={{ fill: '#666', fontSize: 11 }}
                                tickMargin={10}
                                ticks={["Jan 26, 26", "Feb 2, 26", "Feb 9, 26", "Feb 16, 26"]}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#666', fontSize: 11 }}
                                tickFormatter={yAxisFormatter}
                                domain={[0, 200000]}
                                ticks={[0, 50000, 100000, 150000, 200000]}
                                orientation="right"
                                width={50}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#9d0c15"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorLiquidity)"
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Volume Chart Card */}
            <div className="flex-1 bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 shadow-xl relative min-h-[400px] flex flex-col">
                <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-gray-400 text-sm font-medium mb-1">Volume 24H</h3>
                    <div className="text-white text-[28px] font-semibold tracking-tight mb-1">$0</div>
                    <div className="text-gray-400 text-[13px]">Feb 19, 2026, 12:00 AM (UTC)</div>
                </div>

                <div className="w-full h-[320px] mt-24">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={volumeData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={true}
                                tick={{ fill: '#666', fontSize: 11 }}
                                tickMargin={10}
                                ticks={["Jan 1, 25", "May 1, 25", "Sep 1, 25", "Jan 1, 26"]}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#666', fontSize: 11 }}
                                tickFormatter={yAxisFormatter}
                                domain={[0, 80000]}
                                ticks={[0, 20000, 40000, 60000, 80000]}
                                orientation="right"
                                width={50}
                            />
                            <Tooltip
                                cursor={{ fill: '#2a2a2a' }}
                                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Bar
                                dataKey="value"
                                fill="#9d0c15"
                                radius={[2, 2, 0, 0]}
                                barSize={4}
                                isAnimationActive={false}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
