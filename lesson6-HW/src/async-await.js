async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    displayUsers(data);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

function displayUsers(users) {
  users.forEach(user => {
    console.log(user.name);
  });
}

console.log(getUsers());