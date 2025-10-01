"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import SingleProduct from '@/app/components/product/SingleProduct';

const ProductDetailPage = () => {
  const params = useParams();
  const productSlug = params.productSlug;

  return (
    <>
      <SingleProduct productId={productSlug} />
    </>
  );
};

export default ProductDetailPage;