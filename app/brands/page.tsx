import { getAllBrands, getProductsByBrand } from '@/api/services/route.services';
import React from 'react'
import ProductCard from '../_Components/productCard/productCard';
import Link from 'next/link';

export default async function Brands({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
    const brands = await getAllBrands();

    const { id: selectedBrandId } = await searchParams;
    let brandProducts;
    let selectedBrand;

    if (selectedBrandId) {
        brandProducts = await getProductsByBrand(selectedBrandId);
        selectedBrand = brands?.find(brand => brand._id === selectedBrandId);
    }
  

    return (
        <div className="px-6 md:px-20 py-10">
            {!selectedBrandId ? (
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                        <h2 className="text-2xl font-bold text-gray-800">All Brands</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {brands?.map((brand) => (
                            <Link
                                href={`/brands?id=${brand._id}`}
                                key={brand._id}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-20 h-20 rounded-3xl overflow-hidden border-2 border-transparent group-hover:border-[#0aad0a] transition-all p-1 bg-gray-50">
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="w-full h-full object-contain rounded-3xl group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-xs font-bold text-gray-700 group-hover:text-[#0aad0a] transition-colors text-center px-2 leading-tight">
                                    {brand.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <Link href="/brands" className="text-[#0aad0a] text-sm font-semibold hover:underline">
                            &larr; Back to Brands
                        </Link>
                    </div>

                    <div className="mb-10">
                        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-6">
                            <img
                                src={selectedBrand?.image}
                                alt={selectedBrand?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                            <h2 className="text-3xl font-bold text-gray-800">{selectedBrand?.name}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
                        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                        {brandProducts?.map(product => (
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
