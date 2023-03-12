
import Head from "next/head";
import { Layout } from "@/components/layout"
import { store } from "@/store/Store"
import { useSelector } from "react-redux"

export default function IndexPage() {

    const cart = useSelector((state) => state);
    console.log(cart);

  return (
    <>
    <Head>
      <title>MO SHOP</title>
      <meta name="description" content="Ama Odia ecommerce"/>

    </Head>
    <Layout>

    </Layout>
    </>
  )
}
