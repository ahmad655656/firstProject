// ItemContext.js
import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr11-600x600.jpg",
      text: "Aberdeen Angus Burgers",
      price: 66,
    },
    {
      id: 2,
      img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr3-600x600.jpg",
      text: "The Sparkling Mineral Water",
      price:  76,
    },
    {
      id: 3,
      img: "https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/pr10-600x600.jpg",
      text: "Ocado Cowboy Steak",
      price: 66,
    },
  ]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemContext.Provider>
  );
};
