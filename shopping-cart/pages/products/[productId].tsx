import React from 'react'
import Head from 'next/head';
import { Layout } from '@/components/layout';
import { useRouter } from 'next/router';
import { getAllProducts } from '@/helpers/api-utils';
import Image from 'next/image';


const ProductDetail = (props) => {

  //  const products = useContext(CartContext);
  //  const productArray = Object.keys(products);
  // const fetcher = (...args) => fetch(...args).then(res => res.json());
  // const { data, error, isLoading } = useSWR('https://api.pujakaitem.com/api/products',fetcher);
  //  console.log(data)
  const {products} = props;
  const router = useRouter();

  const productId = router.query.productId;



  const product = products.find((product) => product.id === productId);



  return (
    <>
    <Head children={undefined}>
    <title>{product.name}</title>
    </Head>
   <Layout children={undefined}>
     <div className='grid grid-cols-2 m-10'>
       <div>
      <Image src={product.image} className='rounded-lg shadow-2xl' height={400} width={400} alt='pls deploy'/>
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
