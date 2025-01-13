import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../Services/userServices.jsx";
import "./Customers.css";
import { Users } from "../../Users/User.jsx";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, [customers]);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
          <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
            <Users user={customerObj} />
          </Link>
        );
      })}
    </div>
  );
};
