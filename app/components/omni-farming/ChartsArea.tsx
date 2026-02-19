"use client";

import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/Tabs";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { FiActivity } from "react-icons/fi";

const mockData = [
    { date: "Feb 13", apy: 2.2 },
    { date: "Feb 14", apy: 2.2 },
    { date: "Feb 15", apy: 2.2 },
    { date: "Feb 16", apy: 2.2 },
    { date: "Feb 17", apy: 2.2 },
    { date: "Feb 18", apy: 2.2 },
    { date: "Feb 19", apy: 2.2 },
];

export function ChartsArea() {
    return (
        <div className="flex flex-col gap-6">
            {/* Main Chart */}
            <Card className="p-0">
                <Tabs defaultValue="apy">
                    <TabsList className="bg-transparent border-b border-[#222]">
                        <TabsTrigger value="apy" className="px-8 font-semibold w-auto flex-none border-b border-transparent">APY Chart</TabsTrigger>
                        <TabsTrigger value="tvl" className="px-8 font-semibold w-auto flex-none border-b border-transparent">TVL Chart</TabsTrigger>
                    </TabsList>

                    <TabsContent value="apy" className="p-6 pt-6">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2 text-white font-medium text-lg">
                                <FiActivity className="text-gray-400" />
                                <span>APY Chart</span>
                            </div>
                            <div className="flex bg-[#1a1a1a] rounded-lg p-1 border border-[#333]">
                                <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded-md">1D</button>
                                <button className="px-3 py-1 text-xs text-white bg-[#e54545] rounded-md font-medium">1W</button>
                                <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded-md">1M</button>
                                <button className="px-3 py-1 text-xs text-gray-400 hover:text-white rounded-md">3M</button>
                            </div>
                        </div>

                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorApy" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#e54545" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#e54545" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="date"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#888' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 12, fill: '#888' }}
                                        tickFormatter={(val) => `${val}%`}
                                        domain={[0, 3]}
                                    />
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                                        itemStyle={{ color: '#e54545' }}
                                    />
                                    <Area type="monotone" dataKey="apy" stroke="#e54545" strokeWidth={2} fillOpacity={1} fill="url(#colorApy)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </TabsContent>
                    <TabsContent value="tvl" className="p-6 pt-6 text-gray-400 text-sm text-center">
                        TVL Chart Data
                    </TabsContent>
                </Tabs>
            </Card>

            {/* Breakdowns */}
            <Card className="p-6">
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col h-full">
                        <h3 className="text-white font-medium text-sm mb-6 text-center">APY Breakdown</h3>
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[160px]">
                            {/* Mock Donut */}
                            <div className="relative w-32 h-32 rounded-full border-[20px] border-[#3b5bdb] flex items-center justify-center mb-6">
                                <div className="w-12 h-12 bg-[#0a0a0a] rounded-full absolute"></div>
                            </div>
                            <div className="flex items-center justify-between w-full px-4 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[7px] font-bold text-white">S</div>
                                    <span className="text-gray-400">USDC</span>
                                </div>
                                <span className="text-white font-medium">2.2%</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col h-full">
                        <h3 className="text-white font-medium text-sm mb-6 text-center">Asset Allocation Info</h3>
                        <div className="flex-1 flex flex-col items-center justify-center min-h-[160px] opacity-40">
                            <div className="w-10 h-14 border border-gray-500 rounded-t-full relative mb-3">
                                <div className="w-full h-px bg-gray-500 absolute top-1/2"></div>
                                <div className="w-full h-px bg-gray-500 absolute top-2/3"></div>
                            </div>
                            <span className="text-xs text-gray-400 mt-2">No Data!</span>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
