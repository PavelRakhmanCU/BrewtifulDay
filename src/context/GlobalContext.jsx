import { createContext, useState, useEffect, useCallback } from "react";
import {
  loadCartFromStorage,
  saveCartToStorage,
  clearCartStorage,
} from "../utils/cartStorage";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [toggleActivator, setToggleActivator] = useState(false);
  const [cartItems, setCartItems] = useState(loadCartFromStorage);
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    saveCartToStorage(cartItems);
    setQuantity(cartItems.length);
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    setCartTotal(0);
    setQuantity(0);
    clearCartStorage();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        toggleActivator,
        setToggleActivator,
        cartItems,
        setCartItems,
        cartTotal,
        setCartTotal,
        quantity,
        setQuantity,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
