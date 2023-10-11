import React, {useState} from "react";
import "./seat.css";
import SeatLayout from "./SeatLayout";

export default function ExecutiveSeat({check,count,setSeatsAvailable}) {
    const [color,setColor] = useState("");

    function seatClick(event){
        const ind = event.target.alt;
        console.log(ind);
        return setSeatsAvailable((prev)=>{
            return [...prev,ind];
        })
    }

    if(count === 3 || count === 19 || count === 20){
        return <>&nbsp;&nbsp;</>;
      }

    return (<>
       <span key={count} className="clubseat">
          {count}
       </span>
    </>)
}