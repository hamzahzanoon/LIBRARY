let productName = document.querySelector("#product-name");
let productAuthor = document.querySelector("#product-desc");
let creatForm = document.querySelector("#creat-form");
let inputFile = document.querySelector("#upload_images_file");
let productImg;

creatForm.addEventListener("submit" , creatProducFun);
inputFile.addEventListener("change" , uploadImages)

function creatProducFun(e) {
    e.preventDefault();
    let allproducts = JSON.parse(localStorage.getItem("products")) || productsDb;
    let nameValue = productName.value;
    let author = productAuthor.value;

    if(nameValue && author) {
        let obj = {
            id : allproducts ? allproducts.length + 1 : 1,
            imgUrl : productImg,
            title : nameValue,
            author : author,
        };
        let newproducts = allproducts ? [...allproducts, obj] : [obj];
        localStorage.setItem("products", JSON.stringify(newproducts));
    
        productName.value = "";
        productAuthor.value = "";

        setTimeout(() => {
          window.location = "index.html"
        }, 1000)
    } else {
        alert ("Enter Data ...");
       }
    }

let preview;
    function uploadImages() {
        let file = this.files[0];
        console.log(file);

        getImagesBase64(file);
        productImg = URL.createObjectURL(file);
    } 

    function getImagesBase64(file) {
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            productImg = reader.result;
        };
        reader.onerror = function () {
            alert("Enter !!");
        }
    }