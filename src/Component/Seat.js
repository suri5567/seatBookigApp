import React, { useContext, useEffect, useState } from "react";
import "./seat.css";
import SeatLayout from "./SeatLayout";
import EachSeat from "./StandardSeat";
import ClubSeat from "./clubSeat";
import ExecutiveSeat from "./executiveSeat";
import { context } from "../contextApi";

const Seat = () => {
	const { bookedSeats, setbookedSeats, ticketType, setTicketType, showBtn, setShowBtn, seatQty, setSeatQty } = useContext(context);
	const [newRemainingSeats, setnewRemainingSeats] = useState();
	const [seatsAvailable, setSeatsAvailable] = useState([]);
	const [seatsAvailability, setSeatsAvailability] = useState(Array(20).fill(true));
	const [clubSeats, setClubSeats] = useState(Array(23).fill(true));
	const [exeSeats, setExeSeats] = useState(Array(26).fill(true));



	useEffect(() => {
		const result = seatsAvailable.filter(
		  (item, index) => seatsAvailable.indexOf(item) === index
		);
		setbookedSeats(result);
		const remaining = 69 - Math.min(bookedSeats.length, seatQty);
		setnewRemainingSeats(remaining);
	
		if (seatsAvailable.length > 0) {
		  setShowBtn(true);
		}
	
		localStorage.setItem("len", bookedSeats.length);
	  }, [seatsAvailable, seatQty, bookedSeats, setShowBtn, setbookedSeats]);
	

	return (
		<div className="MainContainer" style={{ backgroundColor: "lightBlue"}}>
			<div className="scrollableContainer">
				<div className="seatContainer">
					<div className="left">
						<p>Q</p>
					</div>
					<div style={{ display: "flex" }} className="right">
						{
							seatsAvailability.map((check, index) => {
								return <div style={{ marginRight: "18px" }}>
									<EachSeat check={check} count={index + 1} />
								</div>
							})
						}
					</div>
					<div className="left">
						<p>P</p>
					</div>
					<div style={{ display: "flex" }} className="right">
						{
							seatsAvailability.map((check, index) => {
								return <div style={{ marginRight: "18px" }}>
									<EachSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>N</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => { index >= 10 ? setSeatsAvailable((prev) => [...prev, "M" + (index + 1)]) : alert("Sorry... This seat is not Available") }} style={{ marginRight: "12px" }}>
									{index < 10 ?
										<ClubSeat check={check} count={index + 1} classet={"disable"} />
										:
										<ClubSeat check={check} count={index + 1} />
									}
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>M</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => {
									setSeatsAvailable((prev) => [...prev, "M" + (index + 1)]);
								}}
									style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} seatQty={seatQty} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>L</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "L" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>K</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => {
									setSeatsAvailable((prev) => [...prev, "K" + (index + 1)])
								}}
									style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>J</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "J" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>H</p>
					</div>
					<div style={{ display: "flex" }} className="exe_right">
						{
							exeSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "H" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ExecutiveSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>G</p>
					</div>
					<div style={{ display: "flex" }} className="exe_right">
						{
							exeSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "G" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ExecutiveSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>F</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "F" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>E</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "E" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>D</p>
					</div>
					<div style={{ display: "flex" }} className="clubright">
						{
							clubSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "D" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ClubSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>C</p>
					</div>
					<div style={{ display: "flex" }} className="exe_right">
						{
							exeSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "C" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ExecutiveSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>B</p>
					</div>
					<div style={{ display: "flex" }} className="exe_right">
						{
							exeSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "B" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ExecutiveSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
					<div className="left2">
						<p>A</p>
					</div>
					<div style={{ display: "flex" }} className="exe_right">
						{
							exeSeats.map((check, index) => {
								return <div onClick={() => setSeatsAvailable((prev) => [...prev, "A" + (index + 1)])} style={{ marginRight: "12px" }}>
									<ExecutiveSeat check={check} count={index + 1} setSeatsAvailable={setSeatsAvailable} />
								</div>
							})
						}
					</div>
				</div>
			</div>

			<div className="seatLayout">
				<SeatLayout remainingSeats={newRemainingSeats} />
			</div>
		</div>
	);
};

export default Seat;