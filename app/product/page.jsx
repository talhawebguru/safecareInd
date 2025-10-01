"use client"
import React, { Suspense } from 'react'
import Hero from '../components/product/Hero'
import ProductPage from '../components/product/ProductPage'
import { useSearchParams } from 'next/navigation';

const ProductPageContent = () => {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category');
    
    return (
        <>
            <Hero />
            <ProductPage initialCategory={initialCategory} />
        </>
    )
}

const Page = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#079FA5] mx-auto"></div>
                    <p className="mt-4 text-[#1e1e1e] font-poppins">Loading products...</p>
                </div>
            </div>
        }>
            <ProductPageContent />
        </Suspense>
    )
}

export default Page