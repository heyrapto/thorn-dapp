"use client";

import React, { useState } from "react";
import { Sidebar } from "@/app/components/layout/Sidebar";
import { Topbar } from "@/app/components/layout/Topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />
                <div className="px-4 md:px-10 pb-10 w-full max-w-[1400px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
