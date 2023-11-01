import "./style.css";
import { Product } from "./classes/product";
import { Price } from "./classes/price";
import { Review } from "./classes/review";
import { createModal } from "./modal";
//import { createModal } from "./modal";

let price = new Price("USD", 399.0);
let review = new Review(4.6, 73);
let product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
  335.8,
  price,
  review
);

const container = document.querySelector(".container");
const modal = createModal(product);

const img = document.createElement("img");
img.src = product.urlImage;
img.addEventListener("mouseover", () => {
  modal.style.display = "block";
});

container.appendChild(modal);
container.appendChild(img);

window.addEventListener("click", () => {
  modal.style.display = "none";
});
