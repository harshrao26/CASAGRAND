'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UTMTracker() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
        let hasNewUtms = false;
        const currentUtms = {};

        // 1. Check if any UTMs exist in current URL
        utmKeys.forEach(key => {
            const value = searchParams.get(key);
            if (value) {
                currentUtms[key] = value;
                hasNewUtms = true;
            }
        });

        // 2. If new UTMs are found, persist them to sessionStorage
        if (hasNewUtms) {
            utmKeys.forEach(key => {
                if (currentUtms[key]) {
                    sessionStorage.setItem(key, currentUtms[key]);
                }
            });
            // Also track the landing page where UTMs were first seen in this session
            sessionStorage.setItem('initial_utm_url', window.location.href);
        }
    }, [searchParams]);

    return null; // This component doesn't render anything
}
