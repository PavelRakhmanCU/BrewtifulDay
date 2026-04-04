import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid"; 

const Card = ({ item }) => {
  const { setQuantity } = useContext(GlobalContext);
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    if (toggleActivator) {
      setToggleActivator(false);
    }
  };
  const { toggleActivator, setToggleActivator } = useContext(GlobalContext);
  const{cartItems, setCartItems}=useContext(GlobalContext);

  const addToCart = (beverage) => {
  const itemWithId = new Map([...beverage]);
  itemWithId.set('cartId', uuidv4());
  itemWithId.set('quantity', 1);
  itemWithId.set('size', 'small');
  itemWithId.set('shots', 'none');
  itemWithId.set('syrup', 'none');
  itemWithId.set('topping', 'none');
  itemWithId.set('milk', 'whole');
  itemWithId.set('sweetener', 'none');
  setCartItems([...cartItems, itemWithId]);
  setQuantity(cartItems.length + 1);
} 

useEffect(() => {
  console.log('Cart items updated:');
  console.log(cartItems);
}, [cartItems]);
  return (
    <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={() => handleClick()}>
      <h2 className="card-title">{item.get('name')}</h2>
      {item.get('image') && (
        <img
          src={item.get('image')}
          alt={item.get('name') ? String(item.get('name')) : 'Menu item'}
          className="card-image"
        />
      )}
      <div className="card-body">
        <p className="card-info">{item.get('description')}</p>
        <p>Price: ${item.get('price')}</p>
        <div className="button-container"><button onClick={(event)=>{event.stopPropagation(); addToCart(item)}}>Add to cart</button></div>
      </div>
    </div>
  );
};

export default Card; 