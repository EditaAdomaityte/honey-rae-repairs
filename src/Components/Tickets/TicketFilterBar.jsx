export const TicketFilterBar = ({ setSearchTerm, setShowEmergency }) => {
  return (
    <div className="filter-bar">
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
    </div>
  );
};
