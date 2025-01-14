import { useEffect, useState } from "react";
import "./Form.css";
import { getEmployeeByUserId, updateEmployee } from "../../Services/employeeService";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});

    const navigate=useNavigate()

  useEffect(() => {
    getEmployeeByUserId(currentUser.id).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
  }, [currentUser]);     //we want to run this again when we get currentUser, since at first we passing empty obj

  const handleSave=(event)=>{
    event.preventDefault()//preventing default resubmition
    console.log("clicked")


    const editedEmployee={
        id: employee.id,
        specialty: employee.specialty,
        rate: employee.rate,
        userId: employee.userId,
    }

    updateEmployee(editedEmployee).then(()=>{
        navigate(`/employees/${currentUser.id}`)

    })
  }


  return (
    <form className="form-group">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty</label>
          <input
            className="form-control"
            type="text"
            required
            value={employee.specialty? employee.specialty:''}
            onChange={(event)=>{
                const copy={...employee}    //creating a copy of state object. ... spreads all properties of employee
                copy.specialty = event.target.value //setting the specialty
                setEmployee(copy)
            }}  
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate</label>
          <input
            className="form-control"
            type="number"
            required
            value={employee.rate?employee.rate:0}
            onChange={(event)=>{
                const copy={...employee}    //creating a copy of state object. ... spreads all properties of employee
                copy.rate = event.target.value //setting the specialty
                setEmployee(copy)
            }}  

            //check this to make it even more confusing:https://github.com/NSS-Day-Cohort-74/client-side-mastery/blob/master/book-6-honey-rae-repairs/chapters/REPAIR_EMPLOYEE_EDIT.md
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>Save Changes</button>
        </div>
      </fieldset>
    </form>
  );
};
