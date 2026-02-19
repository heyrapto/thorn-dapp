import React from "react";
import { YieldSelector } from "@/app/components/omni-farming/YieldSelector";
import { YieldStatsCard } from "@/app/components/omni-farming/YieldStatsCard";
import { ChartsArea } from "@/app/components/omni-farming/ChartsArea";
import { TransactionPanel } from "@/app/components/omni-farming/TransactionPanel";

export default function OmniFarmingPage() {
    return (
        <>
            <YieldSelector />
            <div className="flex flex-col lg:flex-row gap-6 w-full">
                <div className="flex-1 flex flex-col min-w-0">

                    <YieldStatsCard />
                    <ChartsArea />
                </div>
                <TransactionPanel />
            </div>
        </>
    );
}
