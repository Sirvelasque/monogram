import React from 'react';
import './item.css'; // Import your CSS file

function Item({ price, pictureSrc, description, inStock }) {
  return (
    <div className="item">
      <img src={pictureSrc} alt={description} className="item-image" />
      <div className="item-details">
        <p className="item-description">{description}</p>
        <p className="item-price">{price}</p>
        <button disabled={!inStock} className="item-button">
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
      <Item key={index} name={item.name} img={item.img} description={item.description} price={item.price} inStore={item.inStore} inStock={item.inStoke} />
    </div>
  );
}