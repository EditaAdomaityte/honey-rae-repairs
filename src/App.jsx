import "./App.css";
import { CustomerList } from "./Components/Customers/CustomerList";
import { EmployeeList } from "./Components/Employees/EmployeeList";
import { TicketList } from "./Components/Tickets/TicketList";

export const App = () => {
  return (
    <>
      {/* <TicketList />*/}
      <CustomerList />
      <EmployeeList/>
    </>
  );
};
