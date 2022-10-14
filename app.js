let minusElement = document.querySelector(".delete");
let addElement = document.querySelector(".add");
let result = document.querySelector("#list");
let cards = document.querySelectorAll(".products");
let modal = document.querySelector("#container-modal");
/* let pValue = document.querySelector(".p");
 */

//Aumentar o disminuir cantidad de productos

/* addElement.addEventListener("click", () => {
  userCount++;
  result.value = userCount;
}); */

/* minusElement.addEventListener("click", () => {
  userCount--;
  result.value = userCount;
  if (userCount <= 0) {
    userCount = 0;
  }
  result.value = userCount;
}); */

//Agregar producto al carrito.

let productNotification = document.querySelector(".notification");
let productInModal = document.querySelector(".container-modal-product");
const btnsCart = document.querySelector(".add-cart");

//btnsCart.addEventListener("click", () => {
/* console.log(btnsCart); */

/* let valuePrevius = parseInt(productNotification.innerHTML);
  valuePrevius = valuePrevius + userCount; */

/* productNotification.innerText = userCount;
  productNotification.style.display = `block`;
  
  modal.style.display = `block`; */
/*  result.value = userCount; */
//console.log(valuePrevius);

/* if (userCount === 0) {
    productNotification.style.display = `none`;
  } */
let userCount = 1;

const products = [];
let subtotal = 0;
let total = 0;
add = (producto, price) => {
  productNotification.innerText = userCount;
  productNotification.style.display = `block`;
  userCount = userCount + 1;
  modal.style.display = `block`;
  console.log(producto, price);
  products.push(producto);
  total = total + price;
  console.log(products);
  console.log(total);
  console.log();
  document.getElementById(
    "content-details"
  ).innerHTML = `Total a pagar $${total}`;
};

function pay() {}

const cartNotification = document.querySelector(".notification-btn");
let cartclosed = document.querySelector("#close-img");

cartNotification.addEventListener("click", () => {
  modal.style.display = `block`;
});

cartclosed.addEventListener("click", () => {
  modal.style.display = `none`;
});

//Mostrar  el modal.

//Mostrar el detalle de la compra

//Mostrar valor

//Eliminar todos los articulos del carrito

let deleteProducts = document.querySelector(".delete-all");
let message = document.querySelector(".message");
deleteProducts.addEventListener("click", () => {
  deleteProducts.parentNode.remove();
  message.style.display = `block`;
  productNotification.innerHTML = 0;
});
