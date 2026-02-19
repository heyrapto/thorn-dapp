"use client";

import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/Tabs";
import { FiRefreshCcw } from "react-icons/fi";
import { FaTelegramPlane, FaRobot } from "react-icons/fa";

export function TransactionPanel() {
    return (
        <div className="flex flex-col gap-6 w-[380px] shrink-0">
            {/* Deposit / Withdraw Card */}
            <Card className="p-0 overflow-hidden">
                <Tabs defaultValue="deposit">
                    <TabsList className="bg-[#1a1313] border-b border-[#222]">
                        <TabsTrigger value="deposit" className="px-0 py-4 font-semibold text-center border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-white data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500">Deposit</TabsTrigger>
                        <TabsTrigger value="withdraw" className="px-0 py-4 font-semibold text-center border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-white data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500">Withdraw</TabsTrigger>
                    </TabsList>

                    <TabsContent value="deposit" className="p-6 pt-6 flex flex-col gap-4">
                        <div className="bg-[#0a0a0a] rounded-xl border border-[#222] p-4 pt-8 pb-4 relative mt-1">
                            <span className="text-gray-500 text-sm absolute bottom-4 left-4">$0</span>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-3 py-1.5 border border-[#333]">
                                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                                        $
                                    </div>
                                    <span className="text-white text-sm font-medium">USDC</span>
                                </div>
                                <button className="text-red-400 border border-red-900 bg-[#251010] rounded-full px-3 py-1.5 text-xs font-medium hover:bg-[#351515] transition-colors">
                                    Max
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mt-1 px-1">
                            <span className="text-red-400">Min deposit: 0.01</span>
                            <span className="text-gray-400">Balance: 0</span>
                        </div>

                        <button className="w-full bg-[#1a1a1a] hover:bg-[#222] text-white py-3.5 rounded-xl font-medium mt-2 transition-colors border border-[#333]">
                            Deposit
                        </button>
                    </TabsContent>

                    <TabsContent value="withdraw" className="p-6 pt-6 flex flex-col gap-4">
                        {/* Simplified withdraw structure matching screenshot */}
                        <div className="bg-[#0a0a0a] rounded-xl border border-[#222] p-4 pt-8 pb-4 relative mt-1">
                            <span className="text-gray-500 text-sm absolute bottom-4 left-4">$0</span>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-3 py-1.5 border border-[#333]">
                                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                                        $
                                    </div>
                                    <span className="text-white text-sm font-medium">USDC</span>
                                </div>
                                <button className="text-red-400 border border-red-900 bg-[#251010] rounded-full px-3 py-1.5 text-xs font-medium hover:bg-[#351515] transition-colors">
                                    Max
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mt-1 px-1">
                            <span className="text-red-400">Min withdraw: 0</span>
                            <span className="text-gray-400">Balance: 0</span>
                        </div>

                        <button className="w-full bg-[#1a1a1a] hover:bg-[#222] text-white py-3.5 rounded-xl font-medium mt-2 transition-colors border border-[#333]">
                            Withdraw
                        </button>

                        <p className="text-[11px] text-gray-500 leading-relaxed mt-1">
                            Note: You can only have one active withdrawal request at a time. It can't be canceled. Once completed (~30 minutes), the funds will be sent directly to your wallet.
                        </p>
                    </TabsContent>
                </Tabs>
            </Card>

            {/* My Position */}
            <Card className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-lg">My Position</h3>
                    <FiRefreshCcw className="text-gray-500 w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Net Value</span>
                        <div className="flex items-center gap-2">
                            <span className="text-white text-xl font-semibold">0</span>
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">$</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Pending Withdraw</span>
                        <div className="flex items-center gap-2">
                            <span className="text-white text-xl font-semibold">0</span>
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">$</div>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Support */}
            <Card className="p-6">
                <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    If there are any needs, feel free to contact us on <span className="text-red-400 font-medium cursor-pointer">Chatbot</span> Or <span className="text-red-400 font-medium cursor-pointer">Telegram</span>
                </p>
            </Card>

            {/* Absolute Chatbot icon at the bottom right corner of the window in actual screenshot, but here we can just add a fixed one or omit it if handled globally 
      Actually let's add it fixed to layout or app globally later if needed */}
        </div>
    );
}
