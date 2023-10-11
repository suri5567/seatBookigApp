import React, { useContext } from "react";
import "./Proceed.css";
import { context } from "../contextApi";

export default function Proceed() {
  const { showBtn, bookedSeats } = useContext(context);
  const buttonClassName = `proceed-button ${showBtn || bookedSeats.length > 0 ? "" : "non_vis"}`;
  
  return (
    <div>
      <button className={buttonClassName}>PROCEED</button>
    </div>
  );
}
