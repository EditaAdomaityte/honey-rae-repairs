import { useEffect, useState } from "react";
import { getEmployees } from "../../Services/employeeService.jsx";
import { assignTicket, updateTicket } from "../../Services/ticketService.jsx";

export const Tickets = ({ ticket, currentUser, getAndSetTickets }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    ); //employeeTicket[0] evaluates if the array is empty or not
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  const handleClaim = () => {
    const currentEmployee = employees.find(
      (employee) => employee.userId === currentUser.id
    );
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };
    assignTicket(newEmployeeTicket).then(() => {
      getAndSetTickets();
    });
  };
  const handleClose = () => {
    const closedTicket={
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date(),
    }
    updateTicket(closedTicket).then(()=>{
      getAndSetTickets()
    })
  };

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      {/**/}
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
          {/*checks if there is an assignee, if not(:) shows None. Use ? when expecting undefined*/}
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/*if logged in user is employee and there is no employee ticket associated with the ticket
          when the button  to claim the ticket should display */}
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          ) : (
            ""
          )}
          {/*if logged in user is assigned employee for a ticket and there is no date of completion 
          when the button to close the ticket should display */}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>
              Close
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
