'use client';

export default function LeadForm({ className = "" }) {
    return (
        <form className={`space-y-4 ${className}`}>
            {/* Full Name */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                />
            </div>

            {/* Email Address */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Phone Number
                </label>
                <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                />
            </div>

            {/* Preferred Location */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Preferred Location
                </label>
                <div className="relative">
                    <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none text-gray-900">
                        <option value="" disabled selected>Select location</option>
                        <option value="north-chennai">North Chennai</option>
                        <option value="west-chennai">West Chennai</option>
                        <option value="omr">OMR (Old Mahabalipuram Road)</option>
                        <option value="gst-road">GST Road</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all mt-2"
            >
                View Projects & Offers
            </button>

            {/* Security Note */}
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5 mt-4">
                <span className="text-yellow-600">🔒</span> No spam. Your details are safe with us.
            </p>
        </form>
    );
}
