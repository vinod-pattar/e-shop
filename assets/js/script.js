fetch('https://dummyjson.com/products?limit=3&select=title,description,price')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    const products = data.products;
    const productsElement = document.getElementById('products')

    products.forEach((product, index) => {
        const divColElement = document.createElement("div");
        divColElement.classList.add("col");

        const divCardElement = document.createElement("div");
        divCardElement.classList.add("card");
        divCardElement.style.width = "18rem";

        const imageElement = document.createElement("img");
        imageElement.src = `https://placehold.co/400x400/000/fff?text=Product${index + 1}`;
        imageElement.classList.add("card-img-top");
        imageElement.alt = `Product ${index + 1}`;

        const cardBodyElement = document.createElement("div");
        cardBodyElement.classList.add("card-body");

        const cardHeadingElement = document.createElement("h5");
        cardHeadingElement.classList.add("card-title");
        cardBodyElement.innerText = product.title;

        const cardDescriptionElement = document.createElement("p");
        cardDescriptionElement.classList.add("card-text");
        cardDescriptionElement.innerText = product.description;

        const cardButtonElement = document.createElement("a");
        cardButtonElement.href = "#";
        cardButtonElement.classList.add("btn", "btn-primary");
        cardButtonElement.innerText = `${product.price} Buy`

        cardBodyElement.appendChild(cardHeadingElement);
        cardBodyElement.appendChild(cardDescriptionElement);
        cardBodyElement.appendChild(cardButtonElement);

        divCardElement.appendChild(imageElement);
        divCardElement.appendChild(cardBodyElement)

        divColElement.appendChild(divCardElement)

        productsElement.appendChild(divColElement)
    });



})
.catch(function(error) {
    console.log(error)
})
.finally(function() {
    console.log('Finally')
})