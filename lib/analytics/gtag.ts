export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

export const isGaEnabled = GA_MEASUREMENT_ID.length > 0;
export const isGtmEnabled = GTM_CONTAINER_ID.length > 0;

export function pageview(url: string): void {
    if (!isGaEnabled) return;
    if (typeof window === "undefined") return;
    (window as any).gtag?.("event", "page_view", {
        page_path: url,
    });
}

export function pushDataLayerEvent(
    event: string,
    data?: Record<string, unknown>
): void {
    if (!isGtmEnabled) return;
    if (typeof window === "undefined") return;
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event, ...data });
}
