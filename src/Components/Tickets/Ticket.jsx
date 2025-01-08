import { useEffect, useState } from "react";
import { getEmployees } from "../../Services/employeeService.jsx";

export const Tickets = ({ ticket }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

    useEffect(() => {
      
    const foundEmployee = employees.find(
        (employee) => employee.id === ticket.employeeTickets[0]?.employeeId)//employeeTicket[0] evaluates if the array is empty or not
        setAssignedEmployee(foundEmployee)
    
  }, [employees]);

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      {/**/}
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
      </footer>
    </section>
  );
};
