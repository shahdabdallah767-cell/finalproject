import React from 'react'
import { getSpecificProduct } from '@/api/services/route.services';
import { FaStar } from 'react-icons/fa6';
import AddToCartButton from './../../_Components/productCard/AddToCartButton';

export default async function productDetails({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    await new Promise(resolve => setTimeout(resolve, 2000));

    const data = await getSpecificProduct(id);
    const productDetails = data;

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 items-center gap-12 px-6 md:px-20 py-16'>
            {/* الجزء الخاص بالصورة مع حواف وظل */}
            <div className='col-span-1'>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                        src={productDetails?.imageCover}
                        alt={productDetails?.title}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className='flex gap-2'>
                    {productDetails?.images.map((img: string, index: number) => (
                        <img key={index} className='w-1/6 mt-3' src={img} alt={productDetails.title} />
                    ))}
                </div>
            </div>

            {/* الجزء الخاص بالبيانات وتنسيق الكلام */}
            <div className='col-span-1 md:col-span-3 space-y-6'>
                <div>
                    <h3 className="text-[#0aad0a] font-bold text-lg uppercase">
                        {productDetails?.category?.name}
                    </h3>
                    <h1 className='text-4xl font-bold text-gray-800 mt-2'>
                        {productDetails?.title}
                    </h1>
                </div>

                <p className='text-gray-600 text-lg leading-relaxed'>
                    {productDetails?.description}
                </p>

                <div className='flex items-center gap-4'>
                    {productDetails?.priceAfterDiscount ? (
                        <>
                            <span className='font-bold text-3xl text-gray-900'>
                                {productDetails.priceAfterDiscount} LE
                            </span>
                            <span className='text-xl text-red-500 line-through'>
                                {productDetails.price} LE
                            </span>
                        </>
                    ) : (
                        <span className='font-bold text-3xl text-gray-900'>
                            {productDetails?.price} LE
                        </span>
                    )}
                </div>

                <div className='flex gap-2 items-center bg-gray-50 w-fit px-4 py-2 rounded-full border'>
                    <div className='flex items-center text-yellow-400'>
                        <FaStar className='text-base' />
                    </div>
                    <span className='text-base font-semibold text-gray-700'>{productDetails?.ratingsAverage}</span>
                    <span className='text-base text-gray-400'>({productDetails?.ratingsQuantity} reviews)</span>
                </div>

                <div className="pt-6">
                    <AddToCartButton productId={productDetails?.id || id} />
                </div>
            </div>
        </div>
    )
}
