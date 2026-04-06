try {
    fetch('https://api.example.com/broken-endpoint')
} catch(error) {
    try{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
     } catch(error) {
        console.log('Both fetch attempts failed');
     }
}
