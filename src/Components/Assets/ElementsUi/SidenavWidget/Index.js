import React, { useRef } from "react";
import "./sidenav.css";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Index() {
  let ref = useRef();

  return (
    <>
      <div id="mysidenav">
        <div id="sidenavappiontment" ref={ref}>
          <a href="" target="_blank">
            <AiOutlineShoppingCart />
            Buy Products
          </a>
        </div>
        <div id="sidenavphone">
          <a href="tel:+919845426049" target="_blank">
            <IoCallSharp />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}
