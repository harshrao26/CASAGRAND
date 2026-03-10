'use client';

import { useState, useEffect } from 'react';
import { MapPin, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects } from '@/data/projects';

// Parse price string to a numeric value in Lakhs
function parsePriceToLakhs(priceStr) {
    if (!priceStr) return null;
    const s = priceStr.toLowerCase().replace(/[₹\s,]/g, '');
    // Find all numbers in the string
    const nums = s.match(/[\d.]+/g);
    if (!nums) return null;
    // Take the first number found (minimum of a range)
    let val = parseFloat(nums[0]);

    if (s.includes('cr')) {
        // e.g. "1.48Cr" → 148L
        val = val * 100;
    }
    // Already in lakhs if just a number like "75 L"
    return Math.round(val);
}

export default function FilterBar() {
    const { applyFilters, clearFilters, filtersApplied, filterCity, filterPriceRange } = useProjectContext();

    // Derive unique cities from project data
    const allProjects = getAllProjects();
    const cities = ['All', ...Array.from(new Set(allProjects.map(p => p.city).filter(Boolean))).sort()];

    // Local state (uncommitted until "Search")
    const [localCity, setLocalCity] = useState('All');
    const [localMin, setLocalMin] = useState(0);
    const [localMax, setLocalMax] = useState(500);
    const [cityOpen, setCityOpen] = useState(false);

    // Sync with context on mount (if filters were already applied)
    useEffect(() => {
        setLocalCity(filterCity);
        setLocalMin(filterPriceRange[0]);
        setLocalMax(filterPriceRange[1]);
    }, []);

    const handleApply = () => {
        applyFilters({ city: localCity, priceRange: [localMin, localMax] });
        setCityOpen(false);
    };

    const handleClear = () => {
        setLocalCity('All');
        setLocalMin(0);
        setLocalMax(500);
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

                    {/* City / Location Filter */}
                    <div className="flex-1 relative">
                        <p className="text-[10px] font-bold text-gray-400 mb-1 tracking-widest uppercase">City / Location</p>
                        <button
                            onClick={() => setCityOpen(v => !v)}
                            className="w-full flex items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-800 hover:border-[#FCB63A] transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#1C8A9B]" />
                                {localCity === 'All' ? 'All Cities' : localCity}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${cityOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {cityOpen && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                                {cities.map(city => (
                                    <button
                                        key={city}
                                        onClick={() => { setLocalCity(city); setCityOpen(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${localCity === city ? 'bg-[#FCB63A]/10 text-[#f5a631] font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                                    >
                                        {city === 'All' ? 'All Cities' : city}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-14 bg-gray-200 self-end mb-1" />

                    {/* Price Range Filter */}
                    <div className="flex-[2]">
                        <div className="flex items-center justify-between mb-1">
                            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Budget Range</p>
                            <p className="text-[11px] font-bold text-[#f5a631]">{priceLabel(localMin)} – {priceLabel(localMax)}</p>
                        </div>
                        {/* Dual range: We simulate with two overlapping range inputs */}
                        <div className="relative h-6 flex items-center">
                            <div className="relative w-full h-1.5 bg-gray-200 rounded-full">
                                {/* Highlighted range */}
                                <div
                                    className="absolute top-0 h-full bg-[#FCB63A] rounded-full pointer-events-none"
                                    style={{
                                        left: `${(localMin / 500) * 100}%`,
                                        right: `${100 - (localMax / 500) * 100}%`,
                                    }}
                                />
                                {/* Min thumb */}
                                <input
                                    type="range"
                                    min={0} max={500} step={5}
                                    value={localMin}
                                    onChange={e => {
                                        const v = Math.min(Number(e.target.value), localMax - 10);
                                        setLocalMin(v);
                                    }}
                                    className="filter-range"
                                    style={{ zIndex: localMin > 450 ? 5 : 3 }}
                                />
                                {/* Max thumb */}
                                <input
                                    type="range"
                                    min={0} max={500} step={5}
                                    value={localMax}
                                    onChange={e => {
                                        const v = Math.max(Number(e.target.value), localMin + 10);
                                        setLocalMax(v);
                                    }}
                                    className="filter-range"
                                    style={{ zIndex: 4 }}
                                />
                            </div>
                        </div>
                        {/* Min/Max Labels */}
                        <div className="flex justify-between text-[10px] text-gray-400 font-medium mt-0.5">
                            <span>0 L</span>
                            <span>5 Cr+</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-14 bg-gray-200 self-end mb-1" />

                    {/* Action Buttons */}
                    <div className="flex items-end gap-2 pb-0.5">
                        {filtersApplied && (
                            <button
                                onClick={handleClear}
                                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-800 hover:bg-gray-100 border border-gray-200 transition-all"
                            >
                                <X className="w-3.5 h-3.5" />
                                Clear
                            </button>
                        )}
                        <button
                            onClick={handleApply}
                            className="flex items-center gap-2 bg-[#FCB63A] hover:bg-[#e0a030] text-black font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 text-sm whitespace-nowrap"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Search
                        </button>
                    </div>
                </div>

                {/* Active Filters Summary */}
                {filtersApplied && (
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] text-gray-500 font-medium">Showing results for:</span>
                        {filterCity !== 'All' && (
                            <span className="bg-[#1C8A9B]/10 text-[#1C8A9B] text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                                <MapPin className="w-3 h-3" />
                                {filterCity}
                            </span>
                        )}
                        <span className="bg-[#FCB63A]/10 text-[#c48a00] text-[11px] font-semibold px-3 py-1 rounded-full">
                            {priceLabel(filterPriceRange[0])} – {priceLabel(filterPriceRange[1])}
                        </span>
                    </div>
                )}
            </div>

            {/* Range slider custom styles */}
            <style>{`
                .filter-range {
                    pointer-events: none;
                    height: 20px;
                    background: transparent;
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    margin: 0;
                }
                .filter-range::-webkit-slider-runnable-track {
                    background: transparent;
                    height: 20px;
                }
                .filter-range::-webkit-slider-thumb {
                    pointer-events: all;
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #FCB63A;
                    border: 2.5px solid #fff;
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(252,182,58,0.5);
                    cursor: grab;
                    transition: transform 0.15s, box-shadow 0.15s;
                }
                .filter-range::-webkit-slider-thumb:active {
                    cursor: grabbing;
                    transform: scale(1.25);
                    box-shadow: 0 3px 10px rgba(252,182,58,0.7);
                }
                .filter-range::-moz-range-track {
                    background: transparent;
                    height: 20px;
                }
                .filter-range::-moz-range-thumb {
                    pointer-events: all;
                    width: 20px;
                    height: 20px;
                    background: #FCB63A;
                    border: 2.5px solid #fff;
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(252,182,58,0.5);
                    cursor: grab;
                }
            `}</style>
        </div>
    );
}
