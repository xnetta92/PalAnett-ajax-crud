const api_url = "https://retoolapi.dev/Nag12s/employees"

document.addEventListener("DOMContentLoaded", () => {
  const employeeData = document.getElementById("employeeData");
  fetch(api_url).then(httpResponse => httpResponse.json())
  .then(responseBody => {
    responseBody.forEach(person => {
      const tableRow =`<tr>
      <td>${person.id}</td>
      <td>${person.name}</td>
      <td>${person.email}</td>
      <td>${person.title}</td>
      <td>${person.address}</td>
      <td>${person.salary}</td>
      <td>${person.birthdate}</td>
      </tr>`;
    })
  }); 
})