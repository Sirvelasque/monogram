import testitems from "../redux/shopItem.jsx/testItems";
import Item from './Item';
import React, { useState } from 'react';

function ItemsContainer() {
  const [visibleItems, setVisibleItems] = useState(testitems.slice(0, 5));

  const handleSeeMore = () => {
    setVisibleItems(testitems.slice(0, visibleItems.length + 5));
  };

  return (
    <div className="items-container">
      <div className="header-row">
        <h2>{/* Your Header Content */}</h2>
        <button onClick={handleSeeMore}>See More</button>
      </div>
      <div className="items-row">
        {visibleItems.map((item, index) => (
          <div key={index} className="item">
            <Item key={index} name={item.name} img={item.img} description={item.description} price={item.price} inStore={item.inStore} inStock={item.inStock} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemsContainer;