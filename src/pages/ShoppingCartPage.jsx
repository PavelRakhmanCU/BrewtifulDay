import CartItem from "../components/CartItem";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ShoppingCartPage = () => {
  const { cartItems, cartTotal, setCartTotal, clearCart } =
    useContext(GlobalContext);
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    if (cartItems.length === 0) {
      setCartTotal(0);
    }
  }, [cartItems, setCartTotal]);

  useEffect(() => {
    if (cartItems.length > 0) setOrderMessage("");
  }, [cartItems.length]);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    clearCart();
    setOrderMessage("Thank you! Your order has been placed.");
  };

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      {orderMessage && (
        <p className="shopping-cart-order-message" role="status">
          {orderMessage}
        </p>
      )}
      <h3>{`Cart total: ${cartTotal.toFixed(2)}`}</h3>
      <h3>{`items in the cart: ${cartItems.length}`}</h3>
      {cartItems.length > 0 && (
        <div className="shopping-cart-actions">
          <button
            type="button"
            className="place-order-button"
            onClick={handlePlaceOrder}
          >
            Place order
          </button>
        </div>
      )}
      <div className="shopping-cart-grid">
        {cartItems.map((item) => (
          <CartItem key={item.get("cartId")} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
