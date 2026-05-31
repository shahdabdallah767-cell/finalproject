"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface CartContextType {
    cart: string[]; // Store product IDs
    addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    isInCart: (productId: string) => boolean;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<string[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart from localStorage", e);
            }
        }
    }, []);

    // Save to localStorage when cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productId: string) => {
        setCart((prev) => [...prev, productId]);
    };

    const removeFromCart = (productId: string) => {
        setCart((prev) => prev.filter((id) => id !== productId));
    };

    const isInCart = (productId: string) => {
        return cart.includes(productId);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
