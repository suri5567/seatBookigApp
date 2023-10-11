import React from "react";
import "./seatLayout.css";
import "./seat.css";

const SeatLayout = ({remainingSeats}) => {
	
  return (
    <div>
      <h4>Key to Seat Layout:</h4>
      <div className="layout" style={{width: "130px"}}>
      <span className="StandardSeat" >
       </span>
        <span >Unavailable</span>
      </div>
      <div className="layout" style={{width: "150px"}}>
        <span style={{backgroundColor: "whitesmoke"}} className="StandardSeat"></span>
        <span>Available</span><span style={{fontWeight:"bolder", color:"red", fontSize:"25px", backgroundColor:"yellow"}}>{remainingSeats}</span>
      </div> 
      <div className="layout" style={{width: "145px"}}>
        <span style={{backgroundColor: "green"}} className="StandardSeat"></span>
        <span>Your Selection</span>
      </div>
    </div>
  );
};

export default SeatLayout;
