const api_url = "https://retoolapi.dev/Nag12s/employees"

document.addEventListener("DOMContentLoaded", () => {
  const employeeData = document.getElementById("employeeData");
  fetch(api_url).then(httpResponse => httpResponse.json())
  .then(responseBody => {
    employeeData.innerHTML = "";
    responseBody.forEach(person => {
      const tableRow = document.createElement("tr");
      const idTableData = document.createElement("td");
      const nameTableData = document.createElement("td");
      const emailTableData = document.createElement("td");
      const titleTableData = document.createElement("td");
      const addressTableData = document.createElement("td");
      const salalryTableData = document.createElement("td");
      const birthdateTableData = document.createElement("td");
      idTableData.textContent = person.id;
      nameTableData.textContent = person.name;
      emailTableData.textContent = person.email;
      titleTableData.textContent = person.title;
      addressTableData.textContent = person.address;
      salalryTableData.textContent = person.salalry;
      birthdateTableData.textContent = person.birthdate;
      tableRow.appendChild(idTableData);
      tableRow.appendChild(nameTableData);
      tableRow.appendChild(emailTableData);
      tableRow.appendChild(titleTableData);
      tableRow.appendChild(addressTableData);
      tableRow.appendChild(salalryTableData);
      tableRow.appendChild(birthdateTableData);
      employeeData.appendChild(tableRow);
    })
  }); 
})