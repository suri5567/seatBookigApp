import React, {useState} from "react";
import "./seat.css";
import SeatLayout from "./SeatLayout";

export default function EachSeat({check,count,setSeatsAvailable}) {
    const [color,setColor] = useState("");

    function seatClick(event){
        const ind = event.target.alt;
        console.log(ind);
        return setSeatsAvailable((prev)=>{
            return [...prev,ind];
        })
    }

    if(count === 3 || count === 6 || count === 9 || count === 12 || count === 15 || count === 18 || count === 21){
        return <>&nbsp;&nbsp;</>;
      }

    return (<>
       <span key={count} className="StandardSeat">
          {count}
       </span>
    </>)
}