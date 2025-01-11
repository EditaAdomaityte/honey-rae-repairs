import "./App.css";
import { CustomerList } from "./Components/Customers/CustomerList";
import { EmployeeList } from "./Components/Employees/EmployeeList";
import { NavBar } from "./Components/Nav/NavBar";
import { TicketList } from "./Components/Tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />{/*when we match child route, we will render his element right here  */ }
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees/" element={<EmployeeList />} />
      </Route>
    </Routes>
  );
};
