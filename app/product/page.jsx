"use client"
import React from 'react'
import Hero from '../components/product/Hero'
import ProductPage from '../components/product/ProductPage'
import { useSearchParams } from 'next/navigation';


const Page = () => {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category');
    
    return (
        <>
            <Hero />
            <ProductPage initialCategory={initialCategory} />
        </>
    )
}

export default Page