import { useEffect, useState } from "react";
import { getTickets } from "../../Services/ticketService.jsx";
import "./Tickets.css";
import { Tickets } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergency] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAndSetTickets = () => {
    getTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  };

  useEffect(() => {
    getAndSetTickets();
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

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <>
      <div className="tickets-container">
        <h2>Tickets</h2>
        <TicketFilterBar
          setShowEmergency={setShowEmergency}
          setSearchTerm={setSearchTerm}
        />
        <article className="tickets">
          {filteredTickets.map((ticketObj) => {
            return (
              <Tickets
                currentUser={currentUser}
                key={ticketObj.id}
                ticket={ticketObj}
                getAndSetTickets={getAndSetTickets}
              />
            );
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
