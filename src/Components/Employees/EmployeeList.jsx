import { useEffect, useState } from "react"
import "./Employees.css"
import { getStaffUsers } from "../../Services/userServices.jsx"
import { Users } from "../../Users/User.jsx"

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
                    <Users key={employeeObj.id} user={employeeObj}/>
                )
            })}

        </div>
    )




}