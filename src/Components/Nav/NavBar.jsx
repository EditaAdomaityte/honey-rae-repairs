import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar =()=>{
    return <ul className="navbar">
        <li className="navbar-item">
            <Link to ='/tickets'>Tickets</Link>{/*A <Link> is an element that lets the user navigate to another page by clicking or tapping on it */}
        </li>
        <li className="navbar-item">
            <Link to ='/customers'>Customers</Link>
        </li>
        <li className="navbar-item">
            <Link to ='/employees'>Employees</Link>
        </li>

    </ul>
}