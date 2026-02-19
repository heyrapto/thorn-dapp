"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@/app/lib/utils";

type TabsContextType = {
    activeTab: string;
    setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className={cn("flex flex-col w-full", className)}>{children}</div>
        </TabsContext.Provider>
    );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            {children}
        </div>
    );
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabsTrigger must be used within Tabs");

    const isActive = context.activeTab === value;

    return (
        <button
            onClick={() => context.setActiveTab(value)}
            className={cn(
                "px-4 py-3 text-sm font-medium transition-colors border-b-2 flex-1 text-center",
                isActive
                    ? "border-red-500 text-white bg-[#1a1a1a]"
                    : "border-transparent text-gray-500 hover:text-gray-300",
                className
            )}
        >
            {children}
        </button>
    );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
    const context = useContext(TabsContext);
    if (!context) throw new Error("TabsContent must be used within Tabs");

    if (context.activeTab !== value) return null;

    return <div className={cn("pt-4", className)}>{children}</div>;
}
