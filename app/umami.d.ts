// The Umami tracker (loaded in app/layout.tsx) exposes window.umami. It is
// missing when the script is blocked (e.g. by an ad blocker), so calls must
// use optional chaining: window.umami?.track(...).
export {};

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void;
    };
  }
}
