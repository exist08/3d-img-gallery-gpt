
function getData() {
    fetch('./data.json')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            console.log(data.length); // Use the JSON data here
            data = data;
            renderProducts(data);
        })
        .catch(error => {
            console.error('Error loading the JSON file:', error);
        });
}

let data = []

getData();


const renderProducts = (data) => {
    const productsContainer = document.querySelector('.carousel')
    data?.map((item, idx) => {
        productsContainer.innerHTML +=
            // `<div class="product masonry-item w-80 flex-shrink-0">
            //     <figure class="image-container">
            //         <img class="product-image" src="${item?.media[0]?.fullUrl}" alt="">
            //     </figure>
            // </div>`
            `<img src="${item?.media[0]?.fullUrl}" alt="Image ${idx+1}" style="--i:${idx}">`
    }
    )
}