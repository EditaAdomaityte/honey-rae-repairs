export const getTickets = ()=>{
    return fetch ("http://localhost:8088/serviceTickets?_embed=employeeTickets").then ((response)=>response.json())

// = async () =>{
//     const fetchTickets = await fetch ("http://localhost:8088/serviceTickets")
//     const tickets = await fetchTickets.json()


}



