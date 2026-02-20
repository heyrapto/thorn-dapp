"use client";

import React, { useState } from "react";
import { Card } from "@/app/components/ui/Card";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { FiActivity, FiDatabase } from "react-icons/fi";

/* ─── Mock data ─────────────────────────────────────────────── */

const apyData = [
    { date: "Feb 13", apy: 2.2 },
    { date: "Feb 14", apy: 2.2 },
    { date: "Feb 15", apy: 2.2 },
    { date: "Feb 16", apy: 2.2 },
    { date: "Feb 17", apy: 2.2 },
    { date: "Feb 18", apy: 2.2 },
    { date: "Feb 19", apy: 2.2 },
];

const tvlData = [
    { date: "Feb 13", tvl: 15 },
    { date: "Feb 14", tvl: 15 },
    { date: "Feb 15", tvl: 15 },
    { date: "Feb 16", tvl: 15 },
    { date: "Feb 17", tvl: 15 },
    { date: "Feb 18", tvl: 15 },
    { date: "Feb 19", tvl: 15 },
];

const apyBreakdown = [{ name: "USDC", value: 2.2 }];

const TIME_FILTERS = ["1D", "1W", "1M", "3M"] as const;
type TimeFilter = (typeof TIME_FILTERS)[number];

/* ─── Shared time-filter buttons ────────────────────────────── */
function TimeFilterButtons({
    active,
    onChange,
}: {
    active: TimeFilter;
    onChange: (v: TimeFilter) => void;
}) {
    return (
        <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-[#2a2a2a] gap-0.5">
            {TIME_FILTERS.map((f) => (
                <button
                    key={f}
                    onClick={() => onChange(f)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${active === f
                        ? "bg-[#8b1a1a] text-white"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}

/* ─── No-data placeholder ───────────────────────────────────── */
function NoData() {
    return (
        <div className="flex flex-col items-center justify-center py-10 opacity-40">
            {/* bell-jar / empty icon */}
            <svg
                width="48"
                height="60"
                viewBox="0 0 48 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 46 C8 28 40 28 40 46"
                    stroke="#888"
                    strokeWidth="2"
                    fill="none"
                />
                <ellipse cx="24" cy="46" rx="16" ry="3" stroke="#888" strokeWidth="2" />
                <line x1="10" y1="54" x2="38" y2="54" stroke="#888" strokeWidth="2" />
                <line x1="24" y1="20" x2="24" y2="25" stroke="#888" strokeWidth="2" />
                <line x1="14" y1="34" x2="34" y2="34" stroke="#888" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="12" y1="40" x2="36" y2="40" stroke="#888" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>
            <span className="text-xs text-gray-500 mt-3">No Data!</span>
        </div>
    );
}

/* ─── Main component ────────────────────────────────────────── */
export function ChartsArea() {
    const [activeChart, setActiveChart] = useState<"apy" | "tvl">("apy");
    const [timeFilter, setTimeFilter] = useState<TimeFilter>("1W");

    return (
        <div className="flex flex-col gap-6">
            {/* ── Chart Card ── */}
            <Card className="p-0 overflow-hidden">
                {/* Tab header */}
                <div className="flex border-b border-[#222]">
                    <button
                        onClick={() => setActiveChart("apy")}
                        className={`flex-1 py-4 text-sm font-semibold text-center transition-colors ${activeChart === "apy"
                            ? "text-white bg-[#111]"
                            : "text-gray-500 bg-[#0a0a0a] hover:text-gray-300"
                            }`}
                    >
                        APY Chart
                    </button>
                    <button
                        onClick={() => setActiveChart("tvl")}
                        className={`flex-1 py-4 text-sm font-semibold text-center transition-colors ${activeChart === "tvl"
                            ? "text-white bg-[#111]"
                            : "text-gray-500 bg-[#0a0a0a] hover:text-gray-300"
                            }`}
                    >
                        TVL Chart
                    </button>
                </div>

                <div className="p-6">
                    {/* Chart header row */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2 text-white font-medium text-lg">
                            {activeChart === "apy" ? (
                                <FiActivity className="text-gray-400" />
                            ) : (
                                <FiDatabase className="text-gray-400" />
                            )}
                            <span>{activeChart === "apy" ? "APY Chart" : "TVL Chart"}</span>
                        </div>
                        <TimeFilterButtons active={timeFilter} onChange={setTimeFilter} />
                    </div>

                    {/* APY Chart */}
                    {activeChart === "apy" && (
                        <div className="h-[220px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={apyData}
                                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorApy" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#c0564a" stopOpacity={0.5} />
                                            <stop offset="95%" stopColor="#c0564a" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#888" }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#888" }}
                                        tickFormatter={(val) => `${val}%`}
                                        domain={[0, 3]}
                                        width={40}
                                    />
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#2a2a2a"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#111",
                                            borderColor: "#333",
                                            color: "#fff",
                                        }}
                                        itemStyle={{ color: "#e54545" }}
                                        formatter={(val) => [`${val}%`, "APY"]}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="apy"
                                        stroke="#d46b5a"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorApy)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    )}

                    {/* TVL Chart */}
                    {activeChart === "tvl" && (
                        <div className="h-[220px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                    data={tvlData}
                                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                                >
                                    <defs>
                                        <linearGradient id="colorTvl" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#c0564a" stopOpacity={0.5} />
                                            <stop offset="95%" stopColor="#c0564a" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#888" }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: "#888" }}
                                        tickFormatter={(val) => `$${val}`}
                                        domain={[0, 20]}
                                        width={40}
                                    />
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        vertical={false}
                                        stroke="#2a2a2a"
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#111",
                                            borderColor: "#333",
                                            color: "#fff",
                                        }}
                                        itemStyle={{ color: "#e54545" }}
                                        formatter={(val) => [`$${val}`, "TVL"]}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="tvl"
                                        stroke="#d46b5a"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorTvl)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </Card>

            {/* ── APY Breakdown + Asset Allocation ── */}
            <Card className="p-0 overflow-hidden">
                <div className="grid grid-cols-2">
                    {/* APY Breakdown */}
                    <div className="p-6 flex flex-col">
                        <h3 className="text-white font-semibold text-sm mb-6 text-center">
                            APY Breakdown
                        </h3>
                        <div className="flex flex-col items-center justify-center flex-1">
                            {/* Donut chart */}
                            <div className="w-[160px] h-[160px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={apyBreakdown}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={48}
                                            outerRadius={72}
                                            dataKey="value"
                                            strokeWidth={0}
                                        >
                                            <Cell fill="#3b5bdb" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="flex items-center justify-between w-full mt-4 px-2 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                                        <img src="/usdc.webp" alt="USDC" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-gray-400">USDC</span>
                                </div>
                                <span className="text-white font-semibold">2.2%</span>
                            </div>
                        </div>
                    </div>

                    {/* Asset Allocation Info */}
                    <div className="p-6 flex flex-col">
                        <h3 className="text-white font-semibold text-sm mb-6 text-center">
                            Asset Allocation Info
                        </h3>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <NoData />
                        </div>
                    </div>
                </div>
            </Card>

            {/* ── History ── */}
            <Card className="p-0 overflow-hidden">
                <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-6">History</h3>

                    {/* Table header */}
                    <div className="grid grid-cols-3 text-xs text-gray-500 pb-3 border-b border-[#222]">
                        <span>Time</span>
                        <span>Action</span>
                        <span className="text-right">Account Value Change</span>
                    </div>

                    {/* Empty state */}
                    <NoData />
                </div>
            </Card>
        </div>
    );
}
