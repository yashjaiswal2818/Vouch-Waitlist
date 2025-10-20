"use client";

import * as React from "react";

export const REFERRAL_STORAGE_KEY = "echowidget_referral_code";

export type UseReferralTrackingResult = {
    referralCode: string | null;
    clearReferral: () => void;
};

/**
 * Tracks a referral code from the URL and stores it in localStorage.
 * - Reads `?ref=XXXXXX` on mount (client-side) and persists it.
 * - Returns the current referral code and a function to clear it (e.g., after signup).
 * - Safe for App Router and SSR (guards window/localStorage).
 */
export function useReferralTracking(): UseReferralTrackingResult {
    const [referralCode, setReferralCode] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (typeof window === "undefined") return;

        const url = new URL(window.location.href);
        const fromUrl = url.searchParams.get("ref");

        // Load stored value initially
        const stored = safeLocalStorageGet(REFERRAL_STORAGE_KEY);

        if (fromUrl && isLikelyReferralCode(fromUrl)) {
            safeLocalStorageSet(REFERRAL_STORAGE_KEY, fromUrl.toUpperCase());
            setReferralCode(fromUrl.toUpperCase());
        } else if (stored) {
            setReferralCode(stored);
        } else {
            setReferralCode(null);
        }
    }, []);

    const clearReferral = React.useCallback(() => {
        if (typeof window !== "undefined") {
            try {
                window.localStorage.removeItem(REFERRAL_STORAGE_KEY);
            } catch { }
        }
        setReferralCode(null);
    }, []);

    return { referralCode, clearReferral };
}

function isLikelyReferralCode(value: string): boolean {
    const v = value.trim();
    // Accept 4-50 alphanumeric uppercase codes; normalize to uppercase elsewhere
    return /^[A-Za-z0-9]{4,50}$/.test(v);
}

function safeLocalStorageGet(key: string): string | null {
    if (typeof window === "undefined") return null;
    try {
        const v = window.localStorage.getItem(key);
        return v && v.trim().length > 0 ? v : null;
    } catch {
        return null;
    }
}

function safeLocalStorageSet(key: string, value: string): void {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.setItem(key, value);
    } catch { }
}


