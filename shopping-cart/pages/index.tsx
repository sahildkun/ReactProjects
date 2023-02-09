import Head from "next/head"
import Link from "next/link"
import { useContext } from 'react'
import { CartContext } from "@/contexts/cart.context"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"


export default function IndexPage() {

  const products = useContext(CartContext);


  return (
    <Layout>
      {
        products.length > 0 ? (products.map((product) => {

          return (
            <>
            <h1>{product.name}</h1>

            </>
          )
         })) : (<>

         Sorry For the inconvinience :(  some trouble has occurred
         </>)
      }
    </Layout>
  )

  }
