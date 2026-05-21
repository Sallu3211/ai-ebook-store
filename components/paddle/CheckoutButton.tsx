"use client";

import { useEffect, useState } from "react";
import { PADDLE_CONFIG } from "@/lib/paddle";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paddle?: any;
  }
}

interface CheckoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CheckoutButton({
  className = "",
  children = "Get Instant Access",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPaddleReady, setIsPaddleReady] = useState(false);

  useEffect(() => {
    if (window.Paddle) {
      setIsPaddleReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.onload = () => {
      if (window.Paddle) {
        if (PADDLE_CONFIG.environment === "sandbox") {
          window.Paddle.Environment.set("sandbox");
        }
        window.Paddle.Initialize({
          token: PADDLE_CONFIG.clientToken,
        });
        setIsPaddleReady(true);
      }
    };
    document.head.appendChild(script);
  }, []);

  const openCheckout = () => {
    if (!isPaddleReady || !window.Paddle) return;
    if (!PADDLE_CONFIG.priceId || !PADDLE_CONFIG.clientToken) {
      console.warn(
        "Paddle not configured. Set NEXT_PUBLIC_PADDLE_CLIENT_TOKEN and NEXT_PUBLIC_PADDLE_PRICE_ID in .env.local"
      );
      return;
    }

    setIsLoading(true);
    window.Paddle.Checkout.open({
      items: [{ priceId: PADDLE_CONFIG.priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        theme: "dark",
        locale: "en",
        successUrl: `${window.location.origin}/success`,
      },
      eventCallback: () => {
        setIsLoading(false);
      },
    });
    setIsLoading(false);
  };

  return (
    <button
      onClick={openCheckout}
      disabled={isLoading || !isPaddleReady}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 px-9 py-4 text-lg rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
