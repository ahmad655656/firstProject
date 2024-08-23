// ItemSelectedList.js
import React, { useContext, useEffect, useState } from "react";
import "./ItemSelectedList.css";
import Flex from "../Flex/Flex";
import { BiCart, BiCoinStack } from "react-icons/bi";
import { BsTriangleFill } from "react-icons/bs";
import ItemSelected from "../ItemSelected/ItemSelected";
import { Link, Outlet } from "react-router-dom";
import { ItemContext } from "../../Context/AddItemContext";

export default function ItemSelectedList(props) {
  const { items, removeItem  } = useContext(ItemContext); // Get items and removeItem function from context
  const [totalPrice, setTotalPrice] = useState(0);
  const [Price, setPrice] = useState(0);
  useEffect(() =>{
    items.map((it) =>{
      setPrice(it.price)
      setTotalPrice(x => x + Price)
    })
  }, [items])
  return (
    <div
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className="ItSelectedList"
      style={{ display: props.display, transform: props.transform }}
    >
      {items.map((item) => (
        <ItemSelected
          key={item.id}
          onClick={() => removeItem(item.id)} // Call delete on click
          className={"eachItem"}
          img={item.img}
          text={item.text}
          price={item.price}
        />
      ))}
      {props.children}
      <Flex className={"bottomField"}>
        <Flex className={"details"}>
          <BiCoinStack className="coinIcon" />
          <h3>Cart $257</h3>
        </Flex>
        <Flex className={"details"}>
          <Link
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
            to="checkout"
          >
            <BiCart className="cartIcon" />
              <h3>Check ${totalPrice}</h3>
          </Link>
          <Outlet />
        </Flex>
      </Flex>
      <span className="FooterList">Free shipping on purchases over $100</span>
      <BsTriangleFill className="after" />
    </div>
  );
}
