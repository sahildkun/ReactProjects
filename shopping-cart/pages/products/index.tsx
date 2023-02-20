import Head from "next/head"
import Link from "next/link"
import { useContext,useState } from 'react'
import { CartContext } from "@/contexts/cart.context"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Card from "@/components/ProductCard/Card"

export default function IndexPage() {

  const products = useContext(CartContext);
  const [searchfield , setSearchfield] = useState("");

  // console.log(products);
const filteredProducts = products.filter((product: { name: string }) => (product.name.toLocaleLowerCase().includes(searchfield)));
console.log(filteredProducts)
// const filteredProducts = products.filter((product: { name: string }) => console.log(product.name.toLocaleLowerCase()));

  return (
    <Layout>

      <input type="search" className='border-white' onChange={(event) => setSearchfield( event.target.value) } />
      <div className="grid grid-cols-3 gap-y-3">
      {

           Object.keys(products).length > 0 ? (filteredProducts.map((product) => {

            // const product = products[product];

          return (
            <>

            <Card key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} img={product.image}/>

            </>
          )
         })) : (<>
          <div className="w-[100rem]">
          <Progress value={88}  />
          </div>
         </>)
      }
      </div>
    </Layout>
  )

  }
