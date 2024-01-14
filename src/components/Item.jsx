import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, price, description, inStore, inStock, img }) => {
  return (
    <div className="storeItem">
      <div className="itemName">{name}</div>
      <figure className="itemImg">
        <img src={img} alt={name} />
        <figcaption>
          {/* Assuming description is now an array */}
          {description.map((e) => e)}
        </figcaption>
      </figure>
      <div className="itemPrice">{price}</div>
      {inStore ? null : <div className="preorderSpan">pre order</div>}
      <div className="buyBtnContainer">
        {inStock ? (
          <button className="buyBtn">Buy</button>
        ) : (
          <div className="OOS">out of stock</div>
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  inStore: PropTypes.bool.isRequired,
  inStock: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

export default Item;