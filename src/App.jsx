import "./App.css";
import { CustomerList } from "./Components/Customers/CustomerList";
import { EmployeeList } from "./Components/Employees/EmployeeList";
import { NavBar } from "./Components/Nav/NavBar";
import { TicketList } from "./Components/Tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";
import { Welcome } from "./Components/Welcome/Welcome";
import { CustomerDetails } from "./Components/Customers/CustomerDetails";
import { EmployeeDetails } from "./Components/Employees/EmployeeDetails";

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
        <Route index element={<Welcome />}/>{/*Route index is route for home route for parents url */}
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees/">
          <Route index element={<EmployeeList />}/>
          <Route path=":userId" element={<EmployeeDetails/>}/>
        </Route>
        <Route path="customers"> 
          <Route index element={<CustomerList />}/>
          <Route path=":userId" element={<CustomerDetails/>}/>{/*:userId <- route parameter, able to capture Id*/}
        </Route>
      </Route>
    </Routes>
  );
};
