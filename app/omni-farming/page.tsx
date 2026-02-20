import React from "react";
import { YieldSelector } from "@/app/components/omni-farming/YieldSelector";
import { YieldStatsCard } from "@/app/components/omni-farming/YieldStatsCard";
import { ChartsArea } from "@/app/components/omni-farming/ChartsArea";
import { TransactionPanel } from "@/app/components/omni-farming/TransactionPanel";
import { MobileDepositBar } from "../components/omni-farming/MobileDepositBar";
export default function OmniFarmingPage() {
    return (
        <>
            <YieldSelector />
            <div className="flex flex-col lg:flex-row gap-6 w-full pb-24 lg:pb-0">
                <div className="flex-1 flex flex-col min-w-0">
                    <YieldStatsCard />
                    <ChartsArea />
                </div>
                {/* TransactionPanel hidden on mobile – actions surfaced via sticky bar */}
                <div className="hidden lg:block">
                    <TransactionPanel />
                </div>
            </div>

            {/* Sticky Deposit / Withdraw bar — mobile only */}
            <MobileDepositBar />
        </>
    );
}
