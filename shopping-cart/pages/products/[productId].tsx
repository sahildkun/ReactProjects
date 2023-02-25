import React from 'react'
import axios from 'axios';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { getAllProducts } from '@/helpers/api-utils';
import Image from 'next/image';

const ProductDetail = (props) => {

  //  const products = useContext(CartContext);
  //  const productArray = Object.keys(products);
  const {products} = props;
  const router = useRouter();
  console.log(router.query.productId);
  const productId = router.query.productId;

  if(!products){

    return <h1>Loading...</h1>
  }
  const product = products.find((product) => product.id === productId);



  return (
    <>
   <Layout>
     <div className='grid grid-cols-2 m-10'>
       <div>
      <Image src={product.image} className='rounded-lg shadow-2xl' height={400} width={400}/>
      </div>
      <div>
       <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{product.name.toUpperCase()}</h1>
      </div>
     </div>
   </Layout>

    </>
  )
}



export async function getServerSideProps(context) {
  const products = await getAllProducts();

  return {
      props: {
      products: products,
    }
  }
}
export default ProductDetail;
