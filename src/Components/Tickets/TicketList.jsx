import { useEffect, useState } from "react";
import { getTickets } from "../../Services/ticketService.js";
import "./Tickets.css";
import { Tickets } from "./Ticket.jsx";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergency] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []); // When the dependency array is empty, the useEffect is only watching for the initial render of this component.

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]); // When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change..

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setShowEmergency(true);
            }}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowEmergency(false);
            }}
          >
            Show all
          </button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return <Tickets key={ticketObj.id} ticket={ticketObj} />;
          })}
        </article>
      </div>
    </>
  );
};

//   const [count, setCount] = useState(0) // returns array [stateVariable, setterFunction] with index 0 holding the value of our state nd a function to set our state

//   const handleButtonCLick=()=>{
//    setCount(count +1)
//     console.log(count)}

//   return (<>
//     <h1> Helloooooo</h1>
//     <div>This is amazing</div>

//     <button className="btn-secondary" onClick={handleButtonCLick}>Click me</button>
//     <div>Count {count}</div>

//   </>)

// }
// //onClick={() => {}} passing anonymous function when button is clicked

// // className instead of class <- for styling
