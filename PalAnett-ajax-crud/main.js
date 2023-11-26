const api_url = "https://retoolapi.dev/Nag12s/employees"

document.addEventListener("DOMContentLoaded", () => {
  const employeeData = document.getElementById("employeeData");
  fetch(api_url).then(httpResponse => console.log(httpResponse));
})