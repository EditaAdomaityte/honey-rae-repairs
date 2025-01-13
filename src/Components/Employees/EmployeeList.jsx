import { useEffect, useState } from "react"
import "./Employees.css"
import { getStaffUsers } from "../../Services/userServices.jsx"
import { Users } from "../../Users/User.jsx"
import { Link } from "react-router-dom"

export const EmployeeList =() =>{
    const [employees, setEmployees]=useState([])

    useEffect(()=>{
        getStaffUsers().then((employeeArray)=>{
            setEmployees(employeeArray)
        });
    },[employees]);

    return(
        <div className="employees">
            {employees.map((employeeObj)=>{
                return(
                   <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id} ><Users  user={employeeObj}/></Link> 
                )
            })}

        </div>
    )




}