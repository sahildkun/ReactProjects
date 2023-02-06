
import { createContext } from "react";


export const CartContext = createContext();



const CartProvider = ({children}) => {




  console.log("boyah")
  return (

  <CartContext.Provider value={100}>{children}</CartContext.Provider>
  )
}

export default CartProvider;
