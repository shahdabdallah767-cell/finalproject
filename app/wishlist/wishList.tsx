"use client"

import React, { useEffect, useState } from 'react'
import { useWishlist } from '../context/WishlistContext'
import { getAllProducts } from '@/api/services/route.services'
import { ProductType } from '@/api/types'
import ProductCard from '../_Components/productCard/productCard'

export default function WishlistPage() {
    const { wishlist } = useWishlist();
    const [wishlistProducts, setWishlistProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWishlistProducts() {
            setLoading(true);
            try {
                const allProducts = await getAllProducts() ?? [];               
                const filtered = allProducts.filter((product: ProductType) => 
                    wishlist.includes(product.id)
                );
                setWishlistProducts(filtered);
            } catch (error) {
                console.error("Error fetching wishlist products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchWishlistProducts();
    }, [wishlist]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0aad0a]"></div>
            </div>
        );
    }

    return (
        <div className="p-8 md:p-20">
            <h1 className="text-3xl font-bold mb-8">My Wishlist ({wishlistProducts.length})</h1>
            
            {wishlistProducts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl">
                    <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
                    <a href="/" className="text-[#0aad0a] font-medium mt-4 inline-block hover:underline">
                        Go shopping to add some!
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {wishlistProducts.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
