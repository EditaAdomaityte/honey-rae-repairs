import { useEffect, useState } from "react"
import { getTickets } from "./Services/ticketService.js"
import "./App.css"

export const App = () => {

  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getTickets().then(ticketsArray => {
      setAllTickets(ticketsArray)
      console.log('tickets set')
    })
  }, [])

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      ) 
      setFilteredTickets (emergencyTickets)}
        else {setFilteredTickets(allTickets)}
    }
  , [showEmergencyOnly, allTickets])


return <>
  <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() => { setShowEmergency(true) }}>
        Emergency</button>
      <button className="filter-btn btn-secondary" onClick={() => { setShowEmergency(false) }}>Show all</button>
    </div>
    <article className="tickets">
      {filteredTickets.map(ticket => {
        return (
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>

          </section>
        )
      })}
    </article>

  </div>

</>

}



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


