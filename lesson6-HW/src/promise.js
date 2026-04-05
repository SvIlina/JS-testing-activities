function getUsers() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    displayUsers(data)
})
.catch(error => {console.log('Error fetching users:', error)});
}
    

function displayUsers(users) {
users.forEach(user => {
    console.log(`User: ${user.name}`);
    })}
console.log(getUsers());
