import React from "react";
import Image from "next/image";

/**
 * Maps token symbols to their logo paths in /public.
 * Falls back to a coloured initial circle for unknown tokens.
 */
const TOKEN_LOGOS: Record<string, string> = {
    stROSE: "/strose.png",
    ROSE: "/rose-blue.png",
    USDC: "/usdc.webp",
    "USDC(Sapphire)": "/usdc-sapphire.png",
    "USDC(Base)": "/usdc-base.png",
    bitUSDs: "/bitusds.jpg",
    USDT: "/tether.png",
    OCEAN: "/ocean-protocol-logo.jpg",
    "OCEAN(Router)": "/ocean-protocol-logo.jpg",
    "OCEAN(Celer)": "/ocean-protocol-logo.jpg",
};

/** Fallback colours for tokens without a logo */
const FALLBACK_COLORS: Record<string, string> = {
    stROSE: "#5a2e8c",
    ROSE: "#0092f4",
    USDC: "#2775ca",
    bitUSDs: "#00d0c3",
    USDT: "#26a17b",
    OCEAN: "#ffffff",
};

interface TokenIconProps {
    symbol: string;
    size?: number;
}

export function TokenIcon({ symbol, size = 20 }: TokenIconProps) {
    const src = TOKEN_LOGOS[symbol];

    if (src) {
        return (
            <div
                className="rounded-full overflow-hidden border border-[#1c1c1c] flex-shrink-0"
                style={{ width: size, height: size }}
            >
                <Image
                    src={src}
                    alt={symbol}
                    width={size}
                    height={size}
                    className="w-full h-full object-cover"
                    unoptimized
                />
            </div>
        );
    }

    // Fallback: coloured circle with first letter
    const bg = FALLBACK_COLORS[symbol] ?? "#555";
    return (
        <div
            className="rounded-full border border-[#1c1c1c] flex items-center justify-center text-white font-bold flex-shrink-0"
            style={{ width: size, height: size, backgroundColor: bg, fontSize: size * 0.45 }}
        >
            {symbol[0]}
        </div>
    );
}
