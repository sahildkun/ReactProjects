import Head from "next/head"
import Link from "next/link"
import { useContext } from 'react'
import { CartContext } from "@/contexts/cart.context"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Card from "@/components/ProductCard/Card"

export default function IndexPage() {

  const products = useContext(CartContext);

  console.log(products);
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-y-3">
      {

        products.length > 0 ? (products.map((product: { name: any; description: any; price: any; image: any }) => {

          return (
            <>

            <Card name={product.name} description={product.description} price={product.price} img={product.image}/>

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
