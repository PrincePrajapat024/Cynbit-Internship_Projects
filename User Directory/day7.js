const users = [
  { name: "Prince Prajapat", branch: "AIDS", email: "prince@gmail.com", year: 2025 },
  { name: "Priyansh Jain", branch: "AIDS", email: "priyansh@gmail.com", year: 2024 },
  { name: "Payanshi Jain", branch: "AIDS", email: "payanshi@gmail.com", year: 2023 },
  { name: "Mohit Vijay", branch: "AIDS", email: "mohit@gmail.com", year: 2025 },
  { name: "Palak Gupta", branch: "IT", email: "palak@gmail.com", year: 2022 },
  { name: "Ishita Gupta", branch: "CSE", email: "ishita@gmail.com", year: 2024 }
];

let filteredUsers = [...users]; 


function displayUsers(userArray) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  userArray.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Branch:</strong> ${user.branch}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Year:</strong> ${user.year}</p>
    `;
    userList.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchText) ||
    user.branch.toLowerCase().includes(searchText)
  );
  displayUsers(filteredUsers);
});


function sortByYear() {
  filteredUsers.sort((a, b) => a.year - b.year);
  displayUsers(filteredUsers);
}


displayUsers(filteredUsers);
