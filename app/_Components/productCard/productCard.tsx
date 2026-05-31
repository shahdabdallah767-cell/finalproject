"use client"

import React, { useState } from 'react'
import { productCardProps } from './productCard.types'
import { FaStar, FaPlus } from "react-icons/fa6";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }: productCardProps) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const isWishlisted = isInWishlist(product.id);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product.id);
        }
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product.id);
    };

    return (
        <div className='group relative border border-gray-200 rounded-xl p-4 transition-all duration-300 hover:border-[#0aad0a] hover:shadow-lg bg-white overflow-hidden' >
            {/* Wishlist Icon */}
            <button
                onClick={toggleWishlist}
                className='absolute top-3 right-3 p-2 rounded-full bg-white shadow-sm transition-colors z-10'
            >
                {isWishlisted ? (
                    <IoHeart className='text-xl text-red-500' />
                ) : (
                    <IoHeartOutline className='text-xl text-gray-400 hover:text-red-500' />
                )}
            </button>

            {/* Product Image */}
            <div className='aspect-square overflow-hidden rounded-lg mb-4 bg-gray-50'>
                <img
                    src={product.imageCover}
                    alt={product.title}
                    className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
                />
            </div>

            {/* Product Info */}
            <div className='space-y-1'>
                <div className='text-[11px] font-medium text-[#0aad0a] uppercase tracking-wider'>
                    {product.category.name}
                </div>

                <h2 className='font-bold text-sm text-gray-800 line-clamp-1'>
                    {product.title.split(" ").slice(0, 2).join(" ")}
                </h2>

                <div className='flex gap-1 items-center py-1'>
                    <div className='flex items-center text-yellow-400'>
                        <FaStar className='text-xs' />
                    </div>
                    <span className='text-[12px] font-semibold text-gray-700'>{product.ratingsAverage}</span>
                    <span className='text-[11px] text-gray-400'>({product.ratingsQuantity})</span>
                </div>

                <div className='flex items-center justify-between mt-2 pt-1'>
                    <div className='flex items-center gap-2'>
                        {product.priceAfterDiscount ? (
                            <>
                                <span className='font-bold text-base text-gray-900'>
                                    {product.priceAfterDiscount} LE
                                </span>
                                <span className='text-[13px] text-red-500 line-through'>
                                    {product.price} LE
                                </span>
                            </>
                        ) : (
                            <span className='font-bold text-base text-gray-900'>
                                {product.price} LE
                            </span>
                        )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className='w-9 h-9 flex items-center justify-center rounded-lg bg-[#0aad0a] text-white hover:bg-[#099209] transition-all transform active:scale-95 shadow-sm'
                    >
                        <FaPlus className='text-sm' />
                    </button>
                </div>
            </div>
        </div>
    )
}
