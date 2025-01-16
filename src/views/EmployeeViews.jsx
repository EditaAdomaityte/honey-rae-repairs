import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../Components/Nav/NavBar"
import { Welcome } from "../Components/Welcome/Welcome"
import { TicketList } from "../Components/Tickets/TicketList"
import { EmployeeList } from "../Components/Employees/EmployeeList"
import { EmployeeDetails } from "../Components/Employees/EmployeeDetails"
import { CustomerList } from "../Components/Customers/CustomerList"
import { CustomerDetails } from "../Components/Customers/CustomerDetails"
import { EmployeeForm } from "../Components/forms/EmployeeEdit"


export const EmployeeViews=({currentUser})=>{
    return(
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

    )
}