let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".wrapper2");

let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = `
  <div class="left">
    <img src="${productDetails.imgUrl}" alt=""/>
    </div>
    <div class="right">
    <h4>Title :  <span>${productDetails.title}</span> </h4>
    <h6>Author : <span>${productDetails.author}</span></h6>
  </div>`