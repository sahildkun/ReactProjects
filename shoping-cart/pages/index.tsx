import Head from "next/head"
import Link from "next/link"
import { useContext } from 'react'
import { CartContext } from "@/contexts/cart.context"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { log } from "console"

export default function IndexPage() {

  const value = useContext(CartContext);

  return (
    <Layout>
    

    </Layout>
  )
}
