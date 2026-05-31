import React from 'react'

export default function PromoBanners() {
    return (
        <div className="px-6 md:px-20 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Banner 1 */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0aad0a] p-8 md:p-12 text-white group h-[220px] md:h-[280px] flex flex-col justify-center">
                    <div className="relative z-10 space-y-4 max-w-[60%]">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Deal of the day
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                            Fresh Organic <br /> Fruits
                        </h3>
                        <p className="text-white/90 text-sm">
                            Get up to <span className="font-bold text-yellow-300">40% OFF</span> on selected items
                        </p>
                        <button className="px-6 py-2 bg-white text-[#0aad0a] font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                            Shop Now &rarr;
                        </button>
                    </div>
                    {/* Decorative Image/Shape Placeholder */}
                    <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                </div>

                {/* Banner 2 */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 md:p-12 text-white group h-[220px] md:h-[280px] flex flex-col justify-center">
                    <div className="relative z-10 space-y-4 max-w-[60%]">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                            Special Offer
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                            Exotic <br /> Vegetables
                        </h3>
                        <p className="text-white/90 text-sm">
                            Discover our latest collection of premium vegetables<br /> <span className="font-bold text-yellow-300">25% OFF</span>
                        </p>
                        <button className="px-6 py-2 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                            Explore Now &rarr;
                        </button>
                    </div>
                    {/* Decorative Image/Shape Placeholder */}
                    <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-black/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                </div>
            </div>
        </div>
    )
}
