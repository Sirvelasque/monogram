import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem,removeItem, updateItem } from "../redux/shopItem.jsx/itemsSlice";
import Item from "./Item";
import testitems from "../redux/shopItem.jsx/testItems";

const Container = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const handleAddItem = () => {
    dispatch(addItem({ name: 'newItem', price: 20 }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem('plate')); 
  };

  const handleUpdateItem = () => {
    dispatch(updateItem({ name: 'cup', price: 12 })); 
  };

  // for (let i=0 ; i <= items.length; i +=1){
  //   console.log(testitems[i].description);
  //   const itemTest = new Item(testitems.name, testitems.inStore, testitems.inStoke )
  // }
  
  //first create the items and store them in the reducer, then create the component
  return (
    <div>

    </div>
  );

}


export default Container;