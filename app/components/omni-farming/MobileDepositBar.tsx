"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileDepositBar() {
    const [activeAction, setActiveAction] = useState<"deposit" | "withdraw" | null>(null);

    return (
        <>
            {/* Sticky bar */}
            <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#0c0c0c] border-t border-[#222] px-4 py-3 flex gap-3">
                <button
                    onClick={() => setActiveAction(activeAction === "deposit" ? null : "deposit")}
                    className="flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all bg-red-700 hover:bg-red-600 text-white"
                >
                    Deposit
                </button>
                <button
                    onClick={() => setActiveAction(activeAction === "withdraw" ? null : "withdraw")}
                    className="flex-1 py-3.5 rounded-xl font-semibold text-sm transition-all bg-transparent border border-red-700 text-red-500 hover:bg-red-700/20"
                >
                    Withdraw
                </button>
            </div>

            {/* Bottom sheet modal */}
            <AnimatePresence>
                {activeAction && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveAction(null)}
                            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                        />

                        {/* Sheet */}
                        <motion.div
                            key="sheet"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "tween", duration: 0.28 }}
                            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#141414] rounded-t-2xl border border-[#222] border-b-0 p-6 pb-10"
                        >
                            {/* Handle */}
                            <div className="w-10 h-1 bg-[#333] rounded-full mx-auto mb-6" />

                            <h3 className="text-white font-semibold text-lg mb-4 capitalize">
                                {activeAction}
                            </h3>

                            {/* Input */}
                            <div className="bg-[#0a0a0a] rounded-xl border border-[#222] p-4 relative mb-3">
                                <span className="text-gray-500 text-sm">$0</span>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-3 py-1.5 border border-[#333]">
                                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px] font-bold">
                                            $
                                        </div>
                                        <span className="text-white text-sm font-medium">USDC</span>
                                    </div>
                                    <button className="text-red-400 border border-red-900 bg-[#251010] rounded-full px-3 py-1.5 text-xs font-medium">
                                        Max
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs px-1 mb-5">
                                <span className="text-red-400">
                                    {activeAction === "deposit" ? "Min deposit: 0.01" : "Min withdraw: 0"}
                                </span>
                                <span className="text-gray-400">Balance: 0</span>
                            </div>

                            {activeAction === "withdraw" && (
                                <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                                    Note: You can only have one active withdrawal request at a time. It can&apos;t be canceled. Once completed (~30 minutes), the funds will be sent directly to your wallet.
                                </p>
                            )}

                            <button className="w-full bg-red-700 hover:bg-red-600 text-white py-3.5 rounded-xl font-semibold transition-colors capitalize">
                                {activeAction}
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
