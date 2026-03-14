'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

export function useUTMs() {
    const searchParams = useSearchParams();

    const utms = useMemo(() => {
        if (typeof window === 'undefined') return {};

        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
        const results = {};

        utmKeys.forEach(key => {
            // Priority: URL > sessionStorage > empty
            results[key] = searchParams.get(key) || sessionStorage.getItem(key) || '';
        });

        return results;
    }, [searchParams]);

    const getContext = () => {
        if (typeof window === 'undefined') return {};
        return {
            submission_url: window.location.href,
            initial_utm_url: sessionStorage.getItem('initial_utm_url') || ''
        };
    };

    return { ...utms, ...getContext() };
}
