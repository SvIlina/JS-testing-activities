async function getUsers() {
    let data = [];
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        data = await response.json();

    } catch (error) {
        console.log('Error:', error);
    }
    return data;
}

async function processUsers() {
    const users = await getUsers();
    users.forEach(user => {
        console.log(user.name);
    });
}

console.log(await processUsers());
