"use client"

import React, { useEffect, useState } from 'react'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import { getAllProducts } from '@/api/services/route.services'
import { ProductType } from '@/api/types'
import Link from 'next/link'
import { IoHeart, IoTrashOutline } from 'react-icons/io5'
import { FaCartPlus } from 'react-icons/fa6'

export default function WishlistPage() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();
    const [wishlistProducts, setWishlistProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWishlistProducts() {
            setLoading(true);
            try {
                const allProducts = await getAllProducts();
                const filtered = allProducts?.filter((product: ProductType) => 
                    wishlist.includes(product.id)
                );
                setWishlistProducts(filtered || []);
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
        <div className="pb-20 bg-gray-50/30 min-h-screen">
            {/* Header Section */}
            <div className="px-6 md:px-20 py-10 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-50 rounded-lg">
                            <IoHeart className="text-2xl text-red-500" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
                    </div>
                    <p className="text-gray-500 text-sm ml-12">{wishlist.length} items saved</p>
                </div>
            </div>

            <div className="px-6 md:px-20 mt-10 max-w-7xl mx-auto">
                {wishlistProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">Your wishlist is empty.</p>
                        <Link href="/" className="text-[#0aad0a] font-bold mt-4 inline-block hover:underline">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 text-gray-400 text-[13px] uppercase tracking-wider">
                                        <th className="px-8 py-5 font-semibold">Product</th>
                                        <th className="px-8 py-5 font-semibold text-center">Price</th>
                                        <th className="px-8 py-5 font-semibold text-center">Status</th>
                                        <th className="px-8 py-5 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {wishlistProducts.map((product) => (
                                        <tr key={product.id} className="group hover:bg-gray-50/30 transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0 p-2">
                                                        <img 
                                                            src={product.imageCover} 
                                                            alt={product.title} 
                                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{product.title}</h3>
                                                        <p className="text-[12px] text-[#0aad0a] font-medium">{product.category.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="font-bold text-gray-900">
                                                        {product.priceAfterDiscount || product.price} EGP
                                                    </span>
                                                    {product.priceAfterDiscount && (
                                                        <span className="text-[12px] text-red-500 line-through">
                                                            {product.price} EGP
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#0aad0a] text-[11px] font-bold">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0aad0a]"></span>
                                                    In Stock
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex items-center justify-end gap-3">
                                                    <button 
                                                        onClick={() => addToCart(product.id)}
                                                        className="flex items-center gap-2 px-5 py-2.5 bg-[#0aad0a] text-white text-[13px] font-bold rounded-xl hover:bg-[#099209] transition-all shadow-sm active:scale-95"
                                                    >
                                                        <FaCartPlus className="text-sm" />
                                                        Add to Cart
                                                    </button>
                                                    <button 
                                                        onClick={() => removeFromWishlist(product.id)}
                                                        className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                        title="Remove from wishlist"
                                                    >
                                                        <IoTrashOutline className="text-xl" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                <div className="mt-8">
                    <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#0aad0a] transition-colors">
                        &larr; Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
