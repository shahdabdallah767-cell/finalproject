import { getAllProducts } from '@/api/services/route.services';
import React, { lazy, Suspense } from 'react'
import ProductCard from './_Components/productCard/productCard';
import Features from './_Components/Features/Features';
import CategorySlider from './_Components/CategorySlider/CategorySlider';
import PromoBanners from './_Components/PromoBanners/PromoBanners';
import HeroSlider from './_Components/HeroSlider/HeroSlider';
import image1 from '@images/images/blog-img-1.jpeg';
import image2 from '@images/images/blog-img-2.jpeg';
import image3 from '@images/images/banner-4.jpeg';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
const CategorySliderAsLazyLoadedComp = lazy(() => import("./_Components/CategorySlider/CategorySlider"))
// import { image1 } from '@images/images/blog-img-1.jpeg';

export default async function page() {
  const allProduct = await getAllProducts();

  return (
    <div className="pb-20">
      <HeroSlider imagesList={[image1.src, image2.src, image3.src]} />
      <Suspense fallback={<div className='w-full py-20 flex justify-center items-center'>
        <BeatLoader />
      </div>}>
        <Features />
        <CategorySliderAsLazyLoadedComp />
      </Suspense>


      <PromoBanners />

      <div className="px-6 md:px-20 mt-10">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-6 bg-[#0aad0a] rounded-full"></span>
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
          {allProduct?.map(product => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
