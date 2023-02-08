
import { createContext } from "react";
import { randEmail, randFullName ,randImg} from '@ngneat/falso';

export const CartContext = createContext();



const CartProvider = ({children}) => {

  


  console.log(products)
  return (

  <CartContext.Provider value={100}>{children}</CartContext.Provider>
  )
}

export default CartProvider;
