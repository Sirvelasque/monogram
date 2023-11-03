const Item = (name, price, description, inStore, inStoke, img) => {

  return (
    <div className="storeItem">
      <div className="itemName"> {name} </div>
      <figure className="itemImg">
        <img src={img} alt={name} />
        <figcaption>
          {description.map((e) => e)}
        </figcaption>
      </figure>
      <div className="itemPrice">{price}</div>
      {inStore ?  null : <div className="preorderSpan">pre order</div>}
      <div className="buyBtnContainer">
        {
          inStoke ?
          <button className="buyBtn">Buy</button>
          :
          <div className="OOS">out of stock</div>
        }
      </div>
    </div>
  );

}


export default Item;