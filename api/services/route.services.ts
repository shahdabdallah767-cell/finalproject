import { cache } from "react";
import { BrandType, CategoryType, ProductType } from "../types";

export async function getAllProducts(): Promise<ProductType[] | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{cache:"force-cache" });
        const finalRes = await res.json();
        return finalRes.data;

    } catch (error) {
        console.log("error", error)
    }
}

export async function getSpecificProduct(id: string): Promise<ProductType | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        const finalRes = await res.json();
        return finalRes.data;

    } catch (error) {
        console.log("error", error)
    }
}

export async function getAllCategories(myToken?: string): Promise<CategoryType[] | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
        const finalRes = await res.json();
        return finalRes.data;
    } catch (error) {
        console.log("error", error)
    }
    
}

export async function getProductsByCategory(categoryId: string, token: string): Promise<ProductType[] | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`, {
            headers: { token }
        });
        const finalRes = await res.json();
        return finalRes.data;
    } catch (error) {
        console.log("error", error);
    }
}

export async function getAllBrands(): Promise<BrandType[] | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
        const finalRes = await res.json();
        return finalRes.data;
    } catch (error) {
        console.log("error", error)
    }
}

export async function getProductsByBrand(brandId: string): Promise<ProductType[] | undefined> {
    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`);
        const finalRes = await res.json();
        return finalRes.data;
    } catch (error) {
        console.log("error", error)
    }
}




 



