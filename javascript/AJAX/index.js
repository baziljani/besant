let request = new XMLHttpRequest();
request.open('GET', 'https://fakestoreapi.in/api/products?limit=20');
request.send();
request.onload = () => {
    console.log(JSON.parse(request.response)); // Remove the second JSON.parse
};