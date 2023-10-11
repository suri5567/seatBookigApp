import React, { useContext, useEffect, useState } from "react";
import { Select, MenuItem, InputLabel } from "@mui/material"; 
import "./typeQty.css";
import { context } from "../contextApi";

const TyepQty = () => {
	const { ticketType, setTicketType, showBtn, setShowBtn, seatQty, setSeatQty } = useContext(context);
	const [ticketCount, setTicketCount] = useState(1);
	const [selectedSeats, setSelectedSeats] = useState([]);

	const handleTicketTypeChange = (event) => 
		setTicketType(event.target.value);

	const handleTicketCountChange = (event) => {
		console.log("eeeee", event.target.value);
		setTicketCount(event.target.value);
	};

	useEffect(() => {
		setSeatQty(ticketCount);
		localStorage.setItem("qty", ticketCount);
	}, [ticketCount]);

	const handleProceedClick = () => {
		setSelectedSeats([
			...selectedSeats,
			...Array(ticketCount).fill("Unavailable"),
		]);
		setTicketType("Ticket Type");
		setTicketCount(1); 
	};

	return (
		<div className="MainContainer" style={{ backgroundColor: "#ff8f00 "}}>
			<div className="scrollableContainer" style={{ display: "flex", height: "100px", borderRadius: "10px" }}>
				<div>
					<InputLabel style={{ fontWeight: "bolder", color: "#333" }}>Ticket Type</InputLabel>
					<Select
						sx={{
							marginTop: 1,
							width: 250,
							height: 50,
							marginRight: 5,
							borderRadius: 15
						}}
						id="ticket-type"
						defaultValue="Standard"
						value={ticketType}
						onChange={(event) => handleTicketTypeChange(event)} 
					>
						<MenuItem value="Standard">Standard</MenuItem>
						<MenuItem value="Premium">Premium</MenuItem>
					</Select>
				</div>
				<div>
					<InputLabel style={{ fontWeight: "bolder" }}>Qty</InputLabel>
					<Select
						sx={{
							marginTop: 1,
							width: 250,
							height: 50,
							marginRight: 5,
							borderRadius: 15
						}}
						id="ticket-quantity"
						defaultValue="1" 
						value={ticketCount}
						onChange={(event) => handleTicketCountChange(event)}
					>
						<MenuItem value={1}>1</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={6}>6</MenuItem>
						<MenuItem value={7}>7</MenuItem>
						<MenuItem value={8}>8</MenuItem>
						<MenuItem value={9}>9</MenuItem>
					</Select>
				</div>
			</div> 
		</div>
	);
};

export default TyepQty;
