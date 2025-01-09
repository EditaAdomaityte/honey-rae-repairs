import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../Services/userServices.jsx";
import "./Customers.css";
import { Users } from "../../Users/User.jsx";

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
          <Users key={customerObj.id} user={customerObj}/>
        );
      })}
    </div>
  );
};
