"use client";

import React from "react";
import { Card } from "@/app/components/ui/Card";
import { FiRefreshCcw } from "react-icons/fi";
import { cn } from "@/app/lib/utils";

const USDC_ICON = "https://cryptologos.cc/logos/usd-coin-usdc-logo.png";

type TabType = "deposit" | "withdraw";

function AmountInput({ label, min }: { label: string; min: string }) {
    return (
        <div className="flex flex-col gap-3">
            {/* Input box */}
            <div className="bg-[#0d0d0d] rounded-2xl border border-[#1e1e1e] p-5 relative min-h-[110px]">
                {/* Token selector + Max — vertically centered right */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-3 py-2 border border-[#2a2a2a]">
                        <img src={USDC_ICON} alt="USDC" className="w-5 h-5 rounded-full object-cover" />
                        <span className="text-white text-sm font-semibold">USDC</span>
                    </div>
                    <button className="text-red-400 border border-red-500/60 rounded-full px-4 py-2 text-sm font-semibold hover:bg-red-500/10 transition-colors">
                        Max
                    </button>
                </div>
                {/* Amount */}
                <span className="text-gray-500 text-base absolute bottom-5 left-5">$0</span>
            </div>

            {/* Min / Balance row */}
            <div className="flex items-center justify-between text-xs px-1">
                <span className="text-red-400">Min {label.toLowerCase()}: {min}</span>
                <span className="text-gray-400">Balance: 0</span>
            </div>
        </div>
    );
}

export function TransactionPanel() {
    const [activeTab, setActiveTab] = React.useState<TabType>("deposit");

    return (
        <div className="flex flex-col gap-5 w-[380px] shrink-0">
            {/* Deposit / Withdraw Card */}
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#141414]">
                {/* Tab header — active tab is raised */}
                <div className="flex relative">
                    {(["deposit", "withdraw"] as TabType[]).map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "flex-1 py-4 text-base font-bold capitalize transition-all relative z-10",
                                    isActive
                                        ? "bg-[#141414] text-white rounded-t-2xl"
                                        : "bg-[#0d0d0d] text-gray-500 hover:text-gray-300"
                                )}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        );
                    })}
                </div>

                {/* Tab body */}
                <div className="p-5 flex flex-col gap-4">
                    {activeTab === "deposit" ? (
                        <>
                            <AmountInput label="Deposit" min="0.01" />
                            <button className="w-full bg-[#1e1e1e] hover:bg-[#252525] text-white py-4 rounded-2xl font-bold text-base transition-colors border border-[#2a2a2a]">
                                Deposit
                            </button>
                        </>
                    ) : (
                        <>
                            <AmountInput label="Withdraw" min="0" />
                            <button className="w-full bg-[#1e1e1e] hover:bg-[#252525] text-white py-4 rounded-2xl font-bold text-base transition-colors border border-[#2a2a2a]">
                                Withdraw
                            </button>
                            <p className="text-[11px] text-gray-500 leading-relaxed">
                                Note: You can only have one active withdrawal request at a time. It can't be canceled. Once completed (~30 minutes), the funds will be sent directly to your wallet.
                            </p>
                        </>
                    )}
                </div>
            </div>

            {/* My Position */}
            <Card className="p-5 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-base">My Position</h3>
                    <FiRefreshCcw className="text-gray-500 w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col gap-4">
                    {[
                        { label: "Net Value", value: "0" },
                        { label: "Pending Withdraw", value: "0" },
                    ].map(({ label, value }) => (
                        <div key={label} className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">{label}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-white text-xl font-semibold">{value}</span>
                                <img src={USDC_ICON} alt="USDC" className="w-5 h-5 rounded-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Support */}
            <Card className="p-5">
                <h3 className="text-white font-semibold text-base mb-3">Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    If there are any needs, feel free to contact us on{" "}
                    <span className="text-red-400 font-medium cursor-pointer hover:underline">Chatbot</span>{" "}
                    Or{" "}
                    <span className="text-red-400 font-medium cursor-pointer hover:underline">Telegram</span>
                </p>
            </Card>
        </div>
    );
}