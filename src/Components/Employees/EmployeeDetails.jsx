import { useEffect, useState } from "react";
import "./Employees.css";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../Services/employeeService";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});

  const { userId } = useParams();

  useEffect(() => {
    getEmployeeByUserId(userId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [userId]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email :</span>
        {employee.user?.email}
      </div>
      <div>
        <span className="customer-info">Rate per hour ($) : </span>
        {employee.rate}
      </div>
      <div>
        <span className="customer-info">Specialty : </span>
        {employee.specialty}
      </div>
    </section>
  );
};
