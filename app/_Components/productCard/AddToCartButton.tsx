'use client'

import React from 'react'
import { useCart } from '../../context/CartContext'

export default function AddToCartButton({ productId }: { productId: string }) {
    const { addToCart } = useCart();

    return (
        <button 
            onClick={() => addToCart(productId)}
            className="bg-[#0aad0a] text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#099609] transition-all transform active:scale-95 shadow-md"
        >
            Add to Cart
        </button>
    )
}
