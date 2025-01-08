export const getEmployees = () => {
    return fetch ("http://localhost:8088/employees?_expand=user").then((response)=>response.json())
}