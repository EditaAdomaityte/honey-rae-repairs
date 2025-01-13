export const getEmployees = () => {
    return fetch ("http://localhost:8088/employees?_expand=user").then((response)=>response.json())
}

{/*export const getEmployeeById = (employeeId) => {
    return fetch(`http://localhost:8088/employee/${employeeId}?_expand=user`).then((response)=>response.json())
}
example to display assignee by fetching employee by id:
https://www.youtube.com/watch?v=Sq4CzHMLXTk

*/}

export const getEmployeeByUserId=(userId)=>{
    return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user`).then(res=>res.json())
}