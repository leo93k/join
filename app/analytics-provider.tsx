"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
    isGaEnabled,
    isGtmEnabled,
    pageview,
    pushDataLayerEvent,
} from "../lib/analytics/gtag";

export default function AnalyticsProvider() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const query = searchParams?.toString();
        const url = `${pathname}${query ? `?${query}` : ""}`;
        if (isGaEnabled) pageview(url);
        if (isGtmEnabled) pushDataLayerEvent("page_view", { page_path: url });
    }, [pathname, searchParams]);

    return null;
}
