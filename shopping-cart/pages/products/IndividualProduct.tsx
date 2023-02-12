import React from 'react'
import { useRouter } from 'next/router';
import { CartContext } from '@/contexts/cart.context';
import { useContext } from 'react';

const ProductDetail = () => {

   const products = useContext(CartContext);
   const productArray = Object.keys(products);



  const router = useRouter();
  const productId = router.query.productId
  return (
    <>
    <div>{productId}</div>

    </>
  )
}

export default ProductDetail;
