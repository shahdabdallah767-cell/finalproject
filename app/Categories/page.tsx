import { getAllCategories, getProductsByCategory } from '@/api/services/route.services';
import React from 'react'
import ProductCard from '../_Components/productCard/productCard';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function Categories({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
    const cookie = await cookies();
    const myToken = cookie.get('tkn')?.value ?? "";

    const categories = await getAllCategories(myToken);
    const { id: selectedCategoryId } = await searchParams;

    let categoryProducts;
    let selectedCategory;

    if (selectedCategoryId) {
        categoryProducts = await getProductsByCategory(selectedCategoryId, myToken);
        selectedCategory = categories?.find(cat => cat._id === selectedCategoryId);
    }
  

    return (
        <div className="px-6 md:px-20 py-10">
            {!selectedCategoryId ? (
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                        <h2 className="text-2xl font-bold text-gray-800">All Categories</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {categories?.map((category) => (
                            <Link
                                href={`/Categories?id=${category._id}`}
                                key={category._id}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-full aspect-square rounded-3xl overflow-hidden border-2 border-transparent group-hover:border-[#0aad0a] transition-all p-1 bg-gray-50">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-700 group-hover:text-[#0aad0a] transition-colors text-center px-2 leading-tight">
                                    {category.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <Link href="/Categories" className="text-[#0aad0a] text-sm font-semibold hover:underline">
                            &larr; Back to Categories
                        </Link>
                    </div>

                    <div className="mb-10">
                        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-6">
                            <img
                                src={selectedCategory?.image}
                                alt={selectedCategory?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                            <h2 className="text-3xl font-bold text-gray-800">{selectedCategory?.name}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                        {categoryProducts?.map(product => (
                            <Link href={`/product/${product.id}`} key={product.id}>
                                <ProductCard product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
