import { useState } from 'react'

import { Layout } from "@/components/layout"
import Card from "@/components/ProductCard/Card"
import axios from "axios"
import { getAllProducts } from '@/helpers/api-utils';

export default function IndexPage(props) {


  const {products } = props;
  const [searchfield , setSearchfield] = useState("");

  // console.log(products);
const filteredProducts = products.filter((product: { name: string }) => (product.name.toLocaleLowerCase().includes(searchfield)));
console.log(filteredProducts)
// const filteredProducts = products.filter((product: { name: string }) => console.log(product.name.toLocaleLowerCase()));

console.log(products);



  return (
    <Layout>
      <div className="flex flex-row justify-center py-10">
      <input type="search" className='border-white   w-96 p-5 rounded-full font-bold' placeholder="Search Your Products here" onChange={(event) => setSearchfield( event.target.value) } />
      </div>



      <div className="grid grid-cols-3 gap-y-3">
      {

          filteredProducts.length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            <>

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

            </>
          )
         })) : (<>
          <p className="flex justify-items-center text-3xl max-w-3xl">
          No such Product :// pls search correctly
          </p>
         </>)
      }
      </div>
    </Layout>
  )

  }
  export async function getStaticProps() {
    // const res = await axios.get("https://api.pujakaitem.com/api/products");

    const products =  await getAllProducts();
    if(!products) {
      return {
        redirect: {
          destination: '/no-data',
        }
      }
    }
    if( products.length === 0) {
      return {notFound: true};
    }
    return {
      props: {
        products: products,
      }
    }
  }
