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

  // console.log(products);
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-y-3">
      {

           Object.keys(products).length > 0 ? (Object.keys(products).map((product) => {
           const prod = products[product];
           
          return (
            <>

            <Card key={prod.name} name={prod.name} description={prod.description} price={prod.price} img={prod.image}/>

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
