import { useNavigate } from "react-router-dom";

export const TicketFilterBar = ({
  setShowOpenOnly,
  setSearchTerm,
  setShowEmergency,
  currentUser,
}) => {

  const navigate=useNavigate()
  return (
    <div className="filter-bar">
      {currentUser.isStaff ? (
        <>
          <button
            className="filter-btn btn-primary"
            onClick={() => {
              setShowEmergency(true);
            }}
          >
            Emergency
          </button>
          <button
            className="filter-btn btn-secondary"
            onClick={() => {
              setShowEmergency(false);
            }}
          >
            Show all
          </button>
          <input
            onChange={(event) => {
              setSearchTerm(
                event.target.value
              ); /* <--capturing event, onChange will pass event to function, and then running setSearchTerm with the input value*/
            }}
            type="text"
            placeholder="Search Tickets"
            className="ticket-search"
          />
        </>
      ) : (
        <>
        <button className="filter-btn btn-primary" onClick={()=>{navigate("/tickets/create")}}>Create a Ticket</button>
        <button className="filter-btn btn-info" onClick={() => {
              setShowOpenOnly(true);
            }}>Open Tickets</button>
        <button className="filter-btn btn-secondary" onClick={() => {
              setShowOpenOnly(false);
            }}>All My Tickets</button>
        </>
      )}
    </div>
  );
};
