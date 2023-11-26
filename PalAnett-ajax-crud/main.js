const api_url = "https://retoolapi.dev/Nag12s/employees"

document.addEventListener("DOMContentLoaded", () => {
  const employeeData = document.getElementById("employeeData");
  fetch(api_url).then(httpResponse => httpResponse.json())
  .then(responseBody => {
    responseBody.forEach(employees => {
      const tableRow =`<tr>
      <td>${employees.id}</td>
      <td>${employees.name}</td>
      <td>${employees.email}</td>
      <td>${employees.title}</td>
      <td>${employees.address}</td>
      <td>${employees.salary}</td>
      <td>${employees.birthdate}</td>
      </tr>`;
    })
  }); 
})