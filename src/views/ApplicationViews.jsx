
import { useEffect, useState } from "react";
import { EmployeeViews } from "./EmployeeViews";
import { CustomerViews } from "./CustomerViews";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({}); //set up state for current user that will provide info to all other components that needs it, it should be object representing logged in user

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user"); //getting user from local storage
    const honeyUserObject = JSON.parse(localHoneyUser); // since int is not returning js object we parse it

    setCurrentUser(honeyUserObject);
  }, []);

  return currentUser.isStaff?<EmployeeViews currentUser={currentUser}/> :<CustomerViews currentUser={currentUser}/>
};
