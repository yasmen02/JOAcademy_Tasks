
    const numProductsToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 992 ? 2 : (window.innerWidth <= 1200 ? 3 : 4));
    const preSliderBtn = document.querySelector('.pre-slider');
    const nextSliderBtn = document.querySelector('.next-slider');
    const container = document.getElementById('tea-product');
    let currentIndex = 0;

    // Retrieve products array from local storage
    let productsArray = JSON.parse(localStorage.getItem("productsArray")) || [];

    // Create an array to hold product divs
    const productDivs = [];

    // Display products
    productsArray.forEach(product => {
        const newProductDiv = document.createElement('div');
        newProductDiv.classList.add('product');

        const imgElement = document.createElement('img');
        imgElement.src = product.img;
        imgElement.alt = "Product Image";
        newProductDiv.appendChild(imgElement);

        const productDetailsDiv = document.createElement('div');
        productDetailsDiv.classList.add('product-details');
        newProductDiv.appendChild(productDetailsDiv);

        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;
        titleElement.style.fontSize = '20px';
        productDetailsDiv.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;
        descriptionElement.style.fontSize = "15px";
        productDetailsDiv.appendChild(descriptionElement);

        container.appendChild(newProductDiv);

        // Push the product div into the productDivs array
        productDivs.push(newProductDiv);
    });

    function updateProduct() {
        for (let index = 0; index < productDivs.length; index++) {
            if (index >= currentIndex && index < currentIndex + numProductsToShow) {
                productDivs[index].style.display = "inline-block";
                productDivs[index].style.opacity = '1';
            } else {
                productDivs[index].style.display = "none";
                productDivs[index].style.opacity = '0';

            }
        }
    }

    window.addEventListener('resize', updateProduct);
    updateProduct(); // Call the function once to set initial visibility

    preSliderBtn.addEventListener('click', () => {
        const maxIndex = Math.max(productsArray.length - numProductsToShow, 0);
        // console.log(maxIndex);
        
        // Calculate the maximum index for the current screen size
        currentIndex = Math.max(currentIndex - 1, 0); // Move to the previous index
        // console.log(currentIndex);

        // If arrived on the first product, move to the last set of products
        if (currentIndex === 0) {
            currentIndex = maxIndex;
        }
   
        updateProduct();
    });

    nextSliderBtn.addEventListener('click', () => {
        const maxIndex = productsArray.length - numProductsToShow;
        if (currentIndex < maxIndex) {
            currentIndex++; 
        } else {
            currentIndex = 0; 
        }

        updateProduct();
    });

