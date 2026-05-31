"use client"

import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { getAllProducts } from '@/api/services/route.services'
import { ProductType } from '@/api/types'
import Link from 'next/link'
import { IoTrashOutline, IoCart, IoAdd, IoRemove } from 'react-icons/io5'

export default function CartPage() {
    const { cart, addToCart, removeFromCart } = useCart();
    const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    // Group cart items to handle quantities
    const groupedCart = cart.reduce((acc, id) => {
        acc[id] = (acc[id] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    useEffect(() => {
        async function fetchCartProducts() {
            setLoading(true);
            try {
                const allProducts = await getAllProducts();
                // Filter unique products that are in the cart
                const filtered = allProducts?.filter((product: ProductType) =>
                    groupedCart[product.id]
                );
                setCartProducts(filtered || []);
            } catch (error) {
                console.error("Error fetching cart products:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCartProducts();
    }, [cart]);

    const subtotal = cartProducts.reduce((total, product) => {
        const quantity = groupedCart[product.id] || 0;
        const price = product.priceAfterDiscount || product.price;
        return total + (price * quantity);
    }, 0);

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
                        <div className="p-2 bg-green-50 rounded-lg">
                            <IoCart className="text-2xl text-[#0aad0a]" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                    </div>
                    <p className="text-gray-500 text-sm ml-12">You have <span className="text-[#0aad0a] font-bold">{cart.length} items</span> in your cart</p>
                </div>
            </div>

            <div className="px-6 md:px-20 mt-10 max-w-7xl mx-auto">
                {cart.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg">Your cart is empty.</p>
                        <Link href="/" className="text-[#0aad0a] font-bold mt-4 inline-block hover:underline">
                            Go shopping to fill it!
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Cart Items List */}
                        <div className="flex-grow space-y-6">
                            {cartProducts.map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-all">
                                    <div className="w-28 h-28 rounded-2xl overflow-hidden bg-gray-50 border border-gray-50 flex-shrink-0 p-2">
                                        <img
                                            src={product.imageCover}
                                            alt={product.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="font-bold text-gray-800 text-lg mb-1">{product.title}</h3>
                                        <p className="text-sm text-gray-400 mb-4">{product.category.name}</p>

                                        <div className="flex items-center justify-center sm:justify-start gap-4">
                                            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                                                <button
                                                    onClick={() => removeFromCart(product.id)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-red-500 transition-all text-gray-400"
                                                >
                                                    <IoRemove />
                                                </button>
                                                <span className="w-10 text-center font-bold text-gray-700">
                                                    {groupedCart[product.id]}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(product.id)}
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-[#0aad0a] transition-all text-gray-400"
                                                >
                                                    <IoAdd />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => {
                                                    // Remove all instances of this product
                                                    const count = groupedCart[product.id];
                                                    for (let i = 0; i < count; i++) removeFromCart(product.id);
                                                }}
                                                className="text-[12px] font-bold text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                                            >
                                                <IoTrashOutline className="text-lg" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div className="text-right sm:min-w-[120px]">
                                        <p className="text-lg font-black text-gray-900">
                                            {(product.priceAfterDiscount || product.price) * groupedCart[product.id]} EGP
                                        </p>
                                        {groupedCart[product.id] > 1 && (
                                            <p className="text-[11px] text-gray-400 font-medium mt-1">
                                                {product.priceAfterDiscount || product.price} EGP / item
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-4">
                                <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#0aad0a] transition-colors flex items-center gap-2">
                                    &larr; Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="w-full lg:w-[380px]">
                            <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm sticky top-24">
                                <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                                    <span className="w-1.5 h-5 bg-[#0aad0a] rounded-full"></span>
                                    Order Summary
                                </h2>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-gray-500 text-sm">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-gray-800">{subtotal} EGP</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500 text-sm">
                                        <span>Shipping</span>
                                        <span className="text-[#0aad0a] font-bold">FREE</span>
                                    </div>
                                    <div className="h-px bg-gray-50 my-6"></div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-800 font-bold">Total</span>
                                        <div className="text-right">
                                            <p className="text-2xl font-black text-gray-900 leading-none">{subtotal} EGP</p>
                                            <p className="text-[11px] text-gray-400 mt-2">VAT included</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-[#0aad0a] text-white font-black rounded-2xl hover:bg-[#099209] transition-all transform active:scale-[0.98] shadow-lg shadow-green-100 mb-4 flex items-center justify-center gap-3">
                                    Secure Checkout
                                    <IoCart className="text-xl" />
                                </button>

                               
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
