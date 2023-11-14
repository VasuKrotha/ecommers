import React from "react";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { useShoppingCart } from "../../context";
export const Cartpage = () => {
  //const [cart, setcart] = useState([]);
  const { cartList } = useShoppingCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};
