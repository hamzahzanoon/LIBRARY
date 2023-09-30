// Defind product
let prodctsDom = document.querySelector(".wrapper");
let products = productsDb;

// Display products 
let drawProdctsUI;
(drawProdctsUI = function (products = []) {
    let prodctsUI = products.map((item) => {
        return `<div class="card">
        <img src="${item.imgUrl}" alt="music" title="music">
        <div class="content">
            <div class="row">
                <div class="details">
                    <a onclick="savaItemData(${item.id})">Title :${item.title}</a>
                    <p>Author :${item.author}</p>
                </div>
            </div>
        </div>
    </div>`
    });
    prodctsDom.innerHTML = prodctsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products); 



function savaItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "cartDetails.html";
}
