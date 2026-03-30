import { createContext, useState } from "react";



export const GlobalContext = createContext();

const GlobalContextProvider = ({children})=>{
const [toggleActivator, setToggleActivator] = useState(false) //will be used to control the toggle switch and navigation menu
    const [cartItems, setCartItems] = useState([]); // cartItems is an array of objects
const [cartTotal, setCartTotal] = useState(0); //total price of all items in cart
const[quantity, setQuantity] = useState(0); //quantity of items in cart

    return(
    <GlobalContext.Provider value={{
        toggleActivator,
         setToggleActivator,
          cartItems,
           setCartItems,
            cartTotal,
             setCartTotal,quantity, setQuantity}}>{children}</GlobalContext.Provider>
)
}

export default GlobalContextProvider