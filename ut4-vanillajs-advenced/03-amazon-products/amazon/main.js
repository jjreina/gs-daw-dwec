import "./style.css";
import { Product } from "./classes/product";
import { Price } from "./classes/price";
import { Review } from "./classes/review";

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
const ul = document.createElement("ul");
let keysProduct = Object.keys(product);
let valuesProduct = Object.values(product);

const createReviewItem = (object, ul) => {
  let values = Object.values(object);
  Object.keys(object).forEach((item, i) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = `${item} = ${values[i]}`;
    li.appendChild(p);
    ul.appendChild(li);
  });
};

keysProduct.forEach((item, index) => {
  let li = document.createElement("li");
  let p = document.createElement("p");

  if (item === "review") {
    createReviewItem(valuesProduct[index], ul);
  } else {
    p.textContent =
      item === "price"
        ? `${item} = ${valuesProduct[index].currentPrice} ${valuesProduct[index].currency}`
        : `${item} = ${valuesProduct[index]}`;
    li.appendChild(p);
    ul.appendChild(li);
  }
});

container.appendChild(ul);
