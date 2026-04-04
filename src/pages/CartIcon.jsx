import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
const ShoppingCart = () => {
    const { cartItems } = useContext(GlobalContext);
    let navigate = useNavigate();
    return(
        <div className="shopping-cart">
        <FaShoppingCart onClick={()=>navigate('/cart')}></FaShoppingCart>    
        <div className="item-counter">{cartItems.length}</div>
        </div>
    )
}

export default ShoppingCart
