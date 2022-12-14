import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false)

  function handleClick(){
    setInCart(inCart => !inCart);
  }

  const className = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
