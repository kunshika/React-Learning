import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
let [activeItems,setActiveItems]=useState([]);
let onBuyButton =(item,event)=>{
         let newItems=[...activeItems,item];
          setActiveItems(newItems);
}
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bpught={activeItems.includes(item)}
          HandleBuyButtonClicked={(event)=> onBuyButton(item,event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
