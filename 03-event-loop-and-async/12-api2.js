const button = document.getElementById("loadBtn");
const tableBody = document.querySelector("table tbody");

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    tableBody.innerHTML = "";

    users.forEach(user => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
      `;

      tableBody.appendChild(row);
    });

  } catch (error) {
    alert(error);
    // console.error(error);
  }
}

button.addEventListener("click", getData);
