import { useParams } from "react-router-dom";
import "./Customers.css";
import { useEffect, useState } from "react";
import { getCustomerByUserId } from "../../Services/customerService";

export const CustomerDetails = () => {
    const[customer, setCustomer]=useState({})
  //customers/3  <--3 is the value
  // path="/customers/customerId" <--customerId is the key

    // usedParam hook to get customerId
  const {userId}=useParams()// will return userId:3, does get it from app.jsx rout path


  useEffect(()=>{
    getCustomerByUserId(userId).then((data)=>{// we get array with all the object that match
        const customerObj=data[0]// since we expecting only one result to match we are getting first object from array
        setCustomer(customerObj)
    })
  },[userId])// runs it again if userId ever changes

  return <section className="customer">
    <header className="customer-header">{customer.user?.fullName}</header>
    <div>
        <span className="customer-info">Email :</span>
        {customer.user?.email}
    </div>
    <div>
        <span className="customer-info">Address :</span>
        {customer.address}
    </div>
    <div>
        <span className="customer-info">Phone # :</span>
        {customer.phoneNumber}
    </div>
  </section>

};
