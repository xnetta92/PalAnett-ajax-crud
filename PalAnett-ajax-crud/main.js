const api_url = "https://retoolapi.dev/Nag12s/employees"

document.addEventListener("DOMContentLoaded", () => {
  const employeeForm = document.getElementById("employeeForm");
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetForm);
  employeeForm.addEventListener("submit", handleFormSubmit)
  listEmployees();
});

function handleFormSubmit(event) {
  event.preventDefault();
  const id = document.getElementById("id").value;
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const title = document.getElementById("title").value;
   const address = document.getElementById("address").value;
   const salalry = document.getElementById("salalry").value;
   const birthdate = document.getElementById("birthdate").value;
   const employee = {
    name: name,
    email: email,
    title: title,
    address: address,
    salalry: salalry,
    birthdate: birthdate
   };
  if (id == "") {
    addEmployee(employee);
  } else {
    updateEmployee(id, employee);
  }
}

async function updateEmployee(id, employee) {
  const response = await fetch(`${api_url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    resetForm();
    listPeople();
  }
}

async function addEmployee(employee) {
   console.log(employee);
   console.log(JSON.stringify(employee));
  
  const response = await fetch(api_url, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
    "Content-Type": "application/json" 
    }
  });
  if (response.ok) {
    listEmployees();
    resetForm();
  }
}

function resetForm() {
  document.getElementById('id').value = "";
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('title').value = "";
  document.getElementById('address').value = "";
  document.getElementById('salalry').value = "";
  document.getElementById('birthdate').value = "";
}

function listEmployees() {
  const employeeData = document.getElementById("employeeData");
  fetch(api_url).then(httpResponse => httpResponse.json())
  .then(responseBody => {
    employeeData.innerHTML = "";
    responseBody.forEach(employee => {
      const tableRow = document.createElement("tr");
      const idTableData = document.createElement("td");
      const nameTableData = document.createElement("td");
      const emailTableData = document.createElement("td");
      const titleTableData = document.createElement("td");
      const addressTableData = document.createElement("td");
      const salalryTableData = document.createElement("td");
      const birthdateTableData = document.createElement("td");
      idTableData.textContent = employee.id;
      nameTableData.textContent = employee.name;
      emailTableData.textContent = employee.email;
      titleTableData.textContent = employee.title;
      addressTableData.textContent = employee.address;
      salalryTableData.textContent = employee.salalry;
      birthdateTableData.textContent = employee.birthdate;
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
}