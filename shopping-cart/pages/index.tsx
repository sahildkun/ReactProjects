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
      {
        products.length > 0 ? (products.map((product) => {

          return (
            <>
            <Card name={product.name} description={product.description} price={product.price} img={product.image}/>

            </>
          )
         })) : (<>

          <Progress value={88} />

         </>)
      }
    </Layout>
  )

  }
