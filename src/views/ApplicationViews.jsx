import { Route, Outlet, Routes } from "react-router-dom";
import { NavBar } from "../Components/Nav/NavBar";
import { Welcome } from "../Components/Welcome/Welcome";
import { EmployeeDetails } from "../Components/Employees/EmployeeDetails";
import { EmployeeList } from "../Components/Employees/EmployeeList";
import { TicketList } from "../Components/Tickets/TicketList";
import { CustomerDetails } from "../Components/Customers/CustomerDetails";
import { CustomerList } from "../Components/Customers/CustomerList";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../Components/forms/EmployeeEdit";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({}); //set up state for current user that will provide info to all other components that needs it, it should be object representing logged in user

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user"); //getting user from local storage
    const honeyUserObject = JSON.parse(localHoneyUser); // since int is not returning js object we parse it

    setCurrentUser(honeyUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
              {/*when we match child route, we will render his element right here  */}
            </>
          }
        >
          <Route index element={<Welcome />} />
          {/*Route index is route for home route for parents url */}
          <Route
            path="tickets"
            element={<TicketList currentUser={currentUser} />}
          />
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":userId" element={<EmployeeDetails />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":userId" element={<CustomerDetails />} />
            {/*:userId <- route parameter, able to capture Id*/}
          </Route>
          <Route
            path="profile"
            element={<EmployeeForm currentUser={currentUser} />}
          />
          {/*passing currentUser*/}
        </Route>
      </Routes>
    </>
  );
};
