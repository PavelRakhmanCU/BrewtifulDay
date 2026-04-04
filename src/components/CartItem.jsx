import { useState, useEffect, useContext, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";

const calculateNewIndividualPrice = (item) => {
  if (item instanceof Map) {
    let basePrice = item.get('price')
    let shotsPrice = 0;
    let syrupPrice = 0;
    let toppingPrice = 0;

    if (item.get('size') === 'medium') {
      basePrice += basePrice * 0.50;
    } else if (item.get('size') === 'large') {
      basePrice += basePrice * 0.75;
    }

    if (item.get('shots') !== 'none') {
      shotsPrice = parseInt(item.get('shots')) * 0.50;
    }

    if (item.get('syrup') !== 'none') {
      syrupPrice = 0.50;
    }

    if (item.get('topping') !== 'none') {
      toppingPrice = 0.20;
    }

    let result = (basePrice + shotsPrice + syrupPrice + toppingPrice) * (item.get('quantity') || 1);
    return result;
  }
}

const CartItem = ({ item }) => {
  const [customize, setCustomize] = useState(false);
  const { setCartTotal } = useContext(GlobalContext)
  const { cartItems, setCartItems } = useContext(GlobalContext)

  //customization input onChange handlers
  const handleQuantityChange = (action) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.get('cartId') === item.get('cartId')) {
        if (action === 'increment') {
          return cartItem.set('quantity', (cartItem.get('quantity') || 1) + 1);
        } else if (action === 'decrement' && (cartItem.get('quantity') || 1) > 1) {
          return cartItem.set('quantity', (cartItem.get('quantity') || 1) - 1);
        }
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const handleSizeChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('size', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
};

  const handleMilkChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('milk', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
};

  const handleSweetenerChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('sweetener', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
};

  const handleSyrupChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('syrup', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
};

  const handleShotsChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('shots', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
};

  const handleToppingChange = (event) => {
  const updatedCartItems = cartItems.map(cartItem => {
    if (cartItem.get('cartId') === item.get('cartId')) {
      return cartItem.set('topping', event.target.value);
    }
    return cartItem;
  });
  setCartItems(updatedCartItems);
}; 

  const handleCustomizeChange = (event) => {
    setCustomize(event.target.checked); //if the checkbox ix checked, setCustomize to true
    //if customize is true, we render customization options
  }

  // Now let's handle th delete button
  const removeItemFromCart = (item) => {
    if (item instanceof Map) {
      let cartId = item.get('cartId')
      const updatedCartItems = cartItems.filter(item => item.get('cartId') !== cartId);
      setCartItems(updatedCartItems);
    }
  } // since in the card component each item gets a unique cartId, we can use it to identify the item to be deleted
  //without impacting the other items in the cart which have the same name and/ or id

  const calculateCartTotal = useCallback(() => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += calculateNewIndividualPrice(cartItem);
    });
    setCartTotal(total);
  }, [cartItems, setCartTotal]);

  useEffect(() => {
    if (cartItems.length > 0) {
      calculateCartTotal();
    } else {
      setCartTotal(0);
    }
  }, [cartItems, calculateCartTotal, setCartTotal]);

  return (
    <div className="cart-item">
      <div className="cart-item-name">
        <span>{item instanceof Map ? item.get('name') + "  " : "Rendering error. Check item type"}<button onClick={() => removeItemFromCart(item)}>Delete</button> </span>
        <span>{item instanceof Map ? '$' + calculateNewIndividualPrice(item) : "Rendering error. Check item type"} </span>
      </div>
      <div className="cart-item-customize-option">
        <input
          type="checkbox"
          checked={customize}
          onChange={handleCustomizeChange}
        />
        <span>Customize</span>
      </div>
      {customize && (
        <div className="cart-item-customization-container">
          <div className="cart-item-quantity">
            <span>Quantity </span><button onClick={() => handleQuantityChange('decrement')}> - </button>
            <span>{item.get('quantity')}</span>
            <button onClick={() => handleQuantityChange('increment')}> + </button>
          </div>
          <div className="cart-item-size-selection">
            <div><label htmlFor="size">Size:</label></div>
            <select name="size" id="size" value={item.get('size') || 'small'} onChange={handleSizeChange}>
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>
</select>
          </div>
          <div className="milk-type-selection">
            <div><label htmlFor="milk">Milk:</label></div>
            <select name="milk" id="milk" value={item.get('milk') || ''} onChange={handleMilkChange}>
  <option value="whole">Whole</option>
  <option value="almond">Almond</option>
  <option value="soy">Soy</option>
</select>
          </div>
          <div className="sweetener-type-selection">
            <div><label htmlFor="sweetener">Sweetener:</label></div>
    <select name="sweetener" id="sweetener" value={item.get('sweetener') || 'none'} onChange={handleSweetenerChange}>
  <option value="none">None</option>
  <option value="sugar">Sugar</option>
  <option value="honey">Honey</option>
</select>
          </div>
          <div className="syrup-flavor-selection">
            <div><label htmlFor="syrup">Syrup:</label></div>
            <select name="syrup" id="syrup" value={item.get('syrup') || 'none'} onChange={handleSyrupChange}>
  <option value="none">None</option>
  <option value="vanilla">Vanilla</option>
  <option value="chocolate">Chocolate</option>
</select>
          </div>
          <div className="extra-shots-selection">
            <div><label htmlFor="shots">Extra Shots:</label></div>
            <select name="shots" id="shots" value={item.get('shots') || 'none'} onChange={handleShotsChange}>
  <option value="none">None</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
          </div>
          <div className="topping-selection">
            <div><label htmlFor="topping">Topping:</label></div>
            <select name="topping" id="topping" value={item.get('topping') || 'none'} onChange={handleToppingChange}>
  <option value="none">None</option>
  <option value="whipped cream">Whipped cream</option>
  <option value="chocolate chips">Chocolate chips</option>
</select> 
          </div>
        </div>
      )}
    </div>
  )
}
export default CartItem; 