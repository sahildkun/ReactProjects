
import { createContext } from "react";
import { randEmail, randFullName ,randImg} from '@ngneat/falso';
import { useEffect,useState } from "react";
import axios from "axios";

export const CartContext = createContext();



const CartProvider = ({children}) => {

  const[products, setProducts] = useState([]);
  const[productsError, setProductsError] = useState('');


  // useEffect(() => {
  //   axios.get("https://api.pujakaitem.com/api/products").then((res)=>console.log(res));
  // },[])
  const getApiData = async() => {
try{
  const res = await axios.get("https://api.pujakaitem.com/api/products");
  setProducts(res.data)
}
catch(error){
setProductsError(error.message);
}
  }

  useEffect(() => {
    getApiData();
  },[]);



  return (

  <CartContext.Provider value={products}>{children}</CartContext.Provider>
  )
}

export default CartProvider;
