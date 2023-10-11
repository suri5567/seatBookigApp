import React, { useEffect, useState } from "react";
import "./seat.css";
import SeatLayout from "./SeatLayout";

export default function ClubSeat({ count, seatQty, classet, setShowBtn }) {

	const [color, setColor] = useState(false);
	const len = localStorage.getItem("len");
	useEffect(() => {
		localStorage.setItem("check", color);
	}, [color]);

	if (count === 16 || count === 17) {
		return <>&nbsp;&nbsp;</>;
	}

	return (<>
		<span key={count} onClick={() => { localStorage.getItem("qty") == 0 ? alert("please enter ticket type & quantity!!!") : localStorage.getItem("len") < parseInt(localStorage.getItem("qty")) ? setColor(true) : setColor(false) }} className={`${classet ? classet : color ? "clubseat selected" : "clubseat"}`}>
			{count}
		</span>
	</>)
}

