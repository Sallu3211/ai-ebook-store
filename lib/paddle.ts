// Paddle Billing configuration
// Replace with your actual Paddle seller ID and price ID from paddle.com
export const PADDLE_CONFIG = {
  // Your Paddle seller ID (found in Paddle dashboard → Developer Tools → Authentication)
  clientToken: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "",
  // Your price ID for the ebook (e.g. "pri_01abc...")
  priceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID ?? "",
  // Environment: "sandbox" for testing, "production" for live
  environment: (process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox") as
    | "sandbox"
    | "production",
};
