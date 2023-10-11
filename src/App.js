import { useState } from "react";
import "./App.css";
import Proceed from "./Component/Proceed";
import TyepQty from "./Component/TyepQty";
import Navbar from "./Component/Navbar"; 
import Seat from "./Component/Seat";
import {context} from './contextApi'

function App() {
  const [showBtn,setShowBtn] = useState(false);
  const [seatQty,setSeatQty] = useState(0);
  const [bookedSeats, setbookedSeats] = useState([]);

  const [ticketType, setTicketType] = useState();
 
  return (
	<>
	<context.Provider value={{bookedSeats,setbookedSeats,ticketType, setTicketType,  showBtn,setShowBtn, seatQty, setSeatQty }}> 
	 <Navbar />
    <div className="App">
      <TyepQty/>
	  <Seat />
      <Proceed
      />
    </div>
	</context.Provider>
	</>
  );
}

export default App;
