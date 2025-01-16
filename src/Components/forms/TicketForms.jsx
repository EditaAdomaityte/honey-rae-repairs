import { useState } from "react";
import "./Form.css";
import { createUser } from "../../Services/userServices";
import { createTicket } from "../../Services/ticketService";
import { Navigate, useNavigate } from "react-router-dom";

export const TicketForm = ({ currentUser }) => {
  const [ticket, setTicket] = useState("");
  const [emergency, setEmergency] = useState(false);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    // Check if ticket is empty or just whitespace
    if (!ticket || ticket.trim() === "") {
      window.alert("Please fill out the description");
      return; // Exit the function early
    }

    const NewTicket = {
      userId: currentUser.id,
      description: ticket.trim(), // Remove any extra whitespace
      emergency: emergency,
      dateCompleted: "",
    };

    createTicket(NewTicket).then(() => {
      navigate("/tickets");
    });
  };

  return (
    <>
      <form>
        <h2>New Service Ticket</h2>
        <fieldset>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description of the problem"
              required
              onChange={(event) => {
                const newTicket = event.target.value;
                setTicket(newTicket);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label>
              Emergency:
              <input
                type="checkbox"
                onChange={(event) => {
                  const NewEmergency = event.target.checked;
                  setEmergency(NewEmergency);
                }}
              />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="form-btn btn-info" onClick={handleSave}>
              Submit Ticket
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
