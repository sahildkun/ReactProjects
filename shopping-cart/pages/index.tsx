

import { Layout } from "@/components/layout"
import { store } from "@/store/Store"
import { useSelector } from "react-redux"

export default function IndexPage() {

    const cart = useSelector((state) => state);
    console.log(cart);

  return (
    <Layout>
     
    </Layout>
  )
}
