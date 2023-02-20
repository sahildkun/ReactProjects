import { Layout } from '@/components/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { incrementQuantity,decrementQuantity ,removeItem} from '@/features/Cart/CartSlice'


const cart = () => {

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart)
  const dispatch = useDispatch();

   const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  return (

   <Layout>
    {
      cart.length > 0 ? cart.map((cartProduct) => {



        return (
<>
    <div>
         <div className='grid grid-cols-5 space-y-2 m-10'>
        <Image src={cartProduct.img} alt={'img'} height={200} width={200}/>
         <h1>{cartProduct.name}</h1>

         <div>
         <button className='font-bold text-white text-xl' onClick={() => dispatch(decrementQuantity(cartProduct.id))}>-</button>
         <h1>{cartProduct.quantity}</h1>
         <button className='font-bold text-white text-xl' onClick={() => dispatch(incrementQuantity(cartProduct.id))}>+</button>
         </div>
         {/* <h1>kjnkl<h1> */}
        <div>
         <button
          className='cartItem__removeButton'
          onClick={() => dispatch(removeItem(cartProduct.id))}>
            Remove
        </button>
        </div>
         </div>
     </div>



</>
        )
      }) : (<>
   <h2>Your cart is empty :)</h2>
      </>)
    }

    <div>
    <p className="total__p">
  total ({getTotal().totalQuantity} items)
  : <strong>${getTotal().totalPrice}</strong>
</p>
    </div>
   </Layout>
  )
}

export default cart
