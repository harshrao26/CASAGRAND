'use client';

import { useState, useEffect, useMemo } from 'react';
import { MapPin, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects } from '@/data/projects';

// Parse price string to a numeric value in Lakhs
function parsePriceToLakhs(priceStr) {
    if (!priceStr) return null;
    // Extract the first part of the range (e.g., "53L" from "53L - 1.30Cr")
    const firstPart = priceStr.split(/[–-]/)[0].toLowerCase();
    const nums = firstPart.match(/[\d.]+/g);
    if (!nums) return null;
    
    let val = parseFloat(nums[0]);
    if (firstPart.includes('cr')) {
        val = val * 100;
    }
    return Math.round(val);
}

export default function FilterBar() {
    const { applyFilters, clearFilters, filtersApplied, filterCity, filterPriceRange } = useProjectContext();


    // Local state (uncommitted until "Search")
    const localCity = 'All';
    const [localMin, setLocalMin] = useState(0);
    const [localMax, setLocalMax] = useState(1000);

    const budgetRanges = useMemo(() => {
        const projects = getAllProjects();
        const minPrices = projects
            .map(p => parsePriceToLakhs(p.price))
            .filter(price => price !== null);

        if (minPrices.length === 0) return [];

        const ranges = [];
        // "Under 1 Cr" bucket
        if (minPrices.some(p => p < 100)) {
            ranges.push({ label: 'Under 1 Cr', min: 0, max: 100 });
        }

        const maxPriceFound = Math.max(...minPrices);
        
        // 50L increments starting from 100L (1 Cr) to avoid overlap with "Under 1 Cr"
        for (let min = 100; min <= maxPriceFound; min += 50) {
            const max = min + 50;
            if (minPrices.some(p => p >= min && p < max)) {
                const minLabel = (min / 100).toFixed(1).replace(/\.0$/, '');
                const maxLabel = (max / 100).toFixed(1).replace(/\.0$/, '');
                ranges.push({
                    label: `₹${minLabel} - ₹${maxLabel} Cr`,
                    min,
                    max
                });
            }
        }

        // Add "Above X Cr" for any project that might have been skipped or if absolute max is needed
        // But the loop handles everything up to maxPriceFound. 
        // If the user specifically wants "Above 2.5 Cr" label if the max is > 250, we can do:
        const absoluteMax = Math.floor(maxPriceFound / 50) * 50;
        if (absoluteMax >= 250 && !ranges.some(r => r.min === absoluteMax)) {
             ranges.push({
                label: `Above ${absoluteMax / 100} Cr`,
                min: absoluteMax,
                max: 1000
            });
        }

        return ranges;
    }, []);

    // Sync with context on mount (if filters were already applied)
    useEffect(() => {
        setLocalMin(filterPriceRange[0]);
        setLocalMax(filterPriceRange[1]);
    }, []);

    const handleApply = () => {
        applyFilters({ city: localCity, priceRange: [localMin, localMax] });
    };

    const handleClear = () => {
        setLocalMin(0);
        setLocalMax(1000);
        clearFilters();
    };

    const priceLabel = (val) => {
        if (val >= 100) return `${(val / 100).toFixed(2).replace(/\.00$/, '')} Cr`;
        return `${val} L`;
    };

    return (
        <div className="relative z-40 -mt-6 mx-auto max-w-5xl px-4">
            <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 px-5 py-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">



                    {/* Budget Range Filter */}
                    <div className="flex-[3]">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Select Budget</p>
                            <p className="text-[11px] font-bold text-[#f5a631]">{priceLabel(localMin)} – {priceLabel(localMax)}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <button
                                onClick={handleClear}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${!filtersApplied
                                        ? 'bg-[#FCB63A] border-[#FCB63A] text-black shadow-sm'
                                        : 'bg-white border-gray-200 text-gray-600 hover:border-[#FCB63A] hover:text-[#FCB63A]'
                                    }`}
                            >
                                All Projects
                            </button>
                            <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>
                            {budgetRanges.map((range) => {
                                const isActive = filtersApplied && localMin === range.min && localMax === range.max;
                                return (
                                    <button
                                        key={range.label}
                                        onClick={() => {
                                            setLocalMin(range.min);
                                            setLocalMax(range.max);
                                            // Apply filters immediately and scroll
                                            applyFilters({ city: localCity, priceRange: [range.min, range.max] });
                                        }}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${isActive
                                                ? 'bg-[#FCB63A] border-[#FCB63A] text-black shadow-sm'
                                                : 'bg-white border-gray-200 text-gray-600 hover:border-[#FCB63A] hover:text-[#FCB63A]'
                                            }`}
                                    >
                                        {range.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
