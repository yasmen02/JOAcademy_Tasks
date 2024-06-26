
// Retrieve existing products array from local storage or initialize an empty array
let productsArray = JSON.parse(localStorage.getItem("productsArray")) || [];

const button = document.getElementById('btn');
button.addEventListener("click", () => {
    const img = document.getElementById('img').value;
    const title = document.getElementById('product-title').value;
    const description = document.getElementById('message').value;

    // Create a new product object
    const newProduct = {
        img: img,
        title: title,
        description: description
    };

    // Add the new product to the products array
    productsArray.push(newProduct);

    // Convert products array to JSON and store it in local storage
    localStorage.setItem("productsArray", JSON.stringify(productsArray));
    // document.cookie="productsArray"
        // Clear input fields after adding product
        document.getElementById('img').value = '';
        document.getElementById('product-title').value = '';
        document.getElementById('message').value = '';
    });