const api_url = "https://retoolapi.dev/JEUtcz/employee"

document.addEventListener("DOMContentLoaded", () => {
  const employeeForm = document.getElementById("employeeForm");
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetForm);
  employeeForm.addEventListener("submit", handleFormSubmit)
  listEmployee();
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
    listEmployee();
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
  document.getElementById("updateButton").classList.add('hide');
  document.getElementById("submitButton").classList.remove('hide');
}

function listEmployee() {
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

      const actionsTableData = document.createElement("td");
      const updateButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      updateButton.textContent = "Módosít";
      deleteButton.textContent = "Törlés";
      updateButton.addEventListener("click", () => fillUpdateForm(employee.id));
      deleteButton.addEventListener("click", () => deletePerson(employee.id));
      actionsTableData.appendChild(updateButton)
      actionsTableData.appendChild(deleteButton)

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

async function deleteEmployee(id) {
  const response = await fetch(`${api_url}/${id}`, { method: "DELETE" });
  console.log(response);
  console.log(await response.text());
  if (response.ok) {
    listEmployee();
  }
}

async function fillUpdateForm(id) {
  const response = await fetch(`${api_url}/${id}`);
  if (!response.ok) {
    alert("Hiba történt az adatok lekérése során");
    return;
  }
  const person = await response.json();
  document.getElementById("id").value = employee.id;
  document.getElementById("name").value = employee.name;
  document.getElementById("email").value = employee.email;
  document.getElementById("title").value = employee.title;
  document.getElementById("address").value = employee.address;
  document.getElementById("salalry").value = employee.salalry;
  document.getElementById("birthdate").value = employee.birthdate;
  document.getElementById("submitButton").classList.add('hide');
  document.getElementById("updateButton").classList.remove('hide');
}