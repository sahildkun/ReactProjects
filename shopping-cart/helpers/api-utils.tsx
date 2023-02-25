import axios from "axios";

export async function getAllProducts  () {
const res = await axios.get("https://api.pujakaitem.com/api/products");
const products = res.data;


return products;

}




