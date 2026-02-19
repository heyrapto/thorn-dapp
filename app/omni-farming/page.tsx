import React from "react";
import { YieldSelector } from "@/app/components/omni-farming/YieldSelector";
import { YieldStatsCard } from "@/app/components/omni-farming/YieldStatsCard";
import { ChartsArea } from "@/app/components/omni-farming/ChartsArea";
import { TransactionPanel } from "@/app/components/omni-farming/TransactionPanel";

export default function OmniFarmingPage() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Left Column: Yield Selection, Stats, and Charts */}
            <div className="flex-1 flex flex-col min-w-0">
                <YieldSelector />
                <YieldStatsCard />
                <ChartsArea />
            </div>

            {/* Right Column: Deposit/Withdraw, Positions, Support */}
            <TransactionPanel />
        </div>
    );
}
