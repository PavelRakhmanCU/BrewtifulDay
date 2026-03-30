import CartItem from "../components/CartItem";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
const ShoppingCartPage = () => {
  const {cartItems, setCartItems} = useContext(GlobalContext);
  const {cartTotal, setCartTotal}= useContext(GlobalContext);
  console.log(cartItems)
  useEffect(() => {
  if (cartItems.length === 0) {
    setCartTotal(0);
  }
}, [cartItems]);
  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      <h3>{`Cart total: ${cartTotal.toFixed(2)}`}</h3>
      <h3>{`items in the cart: ${cartItems.length}`}</h3>
      <div className="shopping-cart-grid">
        {cartItems.map((item,index)=><CartItem key={index} item={item}/>)}
      </div>
    </div>
  );
}
export default ShoppingCartPage;