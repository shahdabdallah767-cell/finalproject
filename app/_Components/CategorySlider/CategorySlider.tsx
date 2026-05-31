import React from 'react'
import { getAllCategories } from '@/api/services/route.services'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function CategorySlider() {
    const categories = await getAllCategories();

    return (
        <div className="px-6 md:px-20 py-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                    Shop By Category
                </h2>
                <Link href="/Categories" className="text-[#0aad0a] text-sm font-semibold hover:underline">
                    View All Categories &rarr;
                </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-y-10 gap-x-6">
                {categories?.map((category) => (
                    <Link
                        href={`/Categories?id=${category._id}`}
                        key={category._id}
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-24 h-24 rounded-3xl  overflow-hidden border-2 border-transparent group-hover:border-[#0aad0a] transition-all p-1 bg-gray-50">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover rounded-3xl  group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-[13px] font-bold text-gray-700 group-hover:text-[#0aad0a] transition-colors text-center px-2 leading-tight">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
