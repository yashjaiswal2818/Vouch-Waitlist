"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Loader2, AlertCircle } from "lucide-react";

type ApiSuccess = {
    success: true;
    position: number;
};

type ApiError = {
    success: false;
    error: string;
};

type ApiResponse = ApiSuccess | ApiError;

type FormState = {
    name: string;
    email: string;
};

const brand = {
    primary: "#2563eb",
    success: "#16a34a",
    successBg: "#dcfce7",
    error: "#dc2626",
};

export default function WaitlistForm(): JSX.Element {
    const [form, setForm] = React.useState<FormState>({ name: "", email: "" });
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<ApiSuccess | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function validate(): string | null {
        const email = form.email.trim();
        if (!email) return "Please enter your email.";
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
        if (!re.test(email)) return "Please enter a valid email address.";
        return null;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setError(null);
        const validation = validate();
        if (validation) {
            setError(validation);
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email.trim(),
                    name: form.name.trim() || undefined,
                }),
            });

            const data = (await res.json()) as ApiResponse;
            if (!res.ok || !("success" in data && data.success)) {
                const msg = (data as ApiError)?.error || "Something went wrong. Please try again.";
                setError(msg);
                return;
            }
            setSuccess(data as ApiSuccess);
        } catch (_e) {
            setError("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    if (success) {
        return (
            <div
                aria-live="polite"
                style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                    padding: 20,
                    background: "#ffffff",
                }}
            >
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                    >
                        <div
                            style={{
                                background: brand.successBg,
                                border: `1px solid ${brand.success}`,
                                color: brand.success,
                                borderRadius: 9999,
                                width: 40,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flex: "0 0 auto",
                            }}
                        >
                            <CheckCircle2 size={22} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    margin: "2px 0 6px",
                                    fontSize: 18,
                                    fontWeight: 800,
                                    color: "#111827",
                                }}
                            >
                                You're on the list!
                            </h3>
                            <p style={{ margin: 0, color: "#374151", fontSize: 14, lineHeight: "20px" }}>
                                Your current position is <strong>#{success.position}</strong>.
                                Please check your email for a confirmation.
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate aria-describedby={error ? "form-error" : undefined}>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr", width: "100%" }}>
                <div style={{ display: "grid", gap: 6 }}>
                    <label htmlFor="name" style={{ fontSize: 14, color: "#374151" }}>
                        Name (optional)
                    </label>
                    <div style={{ position: "relative" }}>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Ada Lovelace"
                            disabled={submitting}
                            style={{
                                width: "100%",
                                border: "1px solid #e5e7eb",
                                borderRadius: 10,
                                padding: "10px 12px",
                                fontSize: 14,
                                outline: "none",
                            }}
                        />
                    </div>
                </div>

                <div style={{ display: "grid", gap: 6 }}>
                    <label htmlFor="email" style={{ fontSize: 14, color: "#374151" }}>
                        Email <span aria-hidden="true" style={{ color: brand.error }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                        <Mail size={18} style={{ position: "absolute", left: 10, top: 10, color: "#6b7280" }} />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            disabled={submitting}
                            style={{
                                width: "100%",
                                border: `1px solid ${error ? brand.error : "#e5e7eb"}`,
                                borderRadius: 12,
                                padding: "16px 16px 16px 44px",
                                fontSize: 16,
                                outline: "none",
                                height: "56px",
                            }}
                            aria-invalid={Boolean(error) || undefined}
                            aria-describedby={error ? "email-error" : undefined}
                        />
                    </div>
                </div>

                {error && (
                    <div id="form-error" role="alert" aria-live="assertive" style={{ display: "flex", alignItems: "center", gap: 8, color: brand.error, fontSize: 14 }}>
                        <AlertCircle size={18} aria-hidden />
                        <span id="email-error">{error}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        width: "100%",
                        background: brand.primary,
                        color: "#ffffff",
                        border: "none",
                        borderRadius: 10,
                        padding: "16px 20px",
                        fontWeight: 700,
                        fontSize: 16,
                        height: "56px",
                        cursor: submitting ? "not-allowed" : "pointer",
                        opacity: submitting ? 0.8 : 1,
                        transition: "transform 0.1s ease, opacity 0.2s ease",
                    }}
                    onMouseDown={(e) => {
                        if (!submitting) {
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(1px)";
                        }
                    }}
                    onMouseUp={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }}
                >
                    {submitting ? (
                        <>
                            <Loader2 size={18} className="spin" />
                            Submitting...
                        </>
                    ) : (
                        "Join the waitlist"
                    )}
                </button>

                <style>
                    {`.spin { animation: spin 1s linear infinite; }
            @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}
                </style>
            </div>
        </form>
    );
}


