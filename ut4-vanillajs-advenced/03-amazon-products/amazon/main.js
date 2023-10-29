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
let keysProducts = Object.keys(product);
let valuesProducts = Object.values(product);
keysProducts.forEach((item, index) => {
  let li = document.createElement("li");
  let p = document.createElement("p");
  p.textContent = `${item} = ${valuesProducts[index]}`;
  if (item === "price") {
    p.textContent = `${item} = ${valuesProducts[4].currentPrice} ${valuesProducts[4].currency}`;
    li.appendChild(p);
    ul.appendChild(li);
  } else if (item === "review") {
    let values = Object.values(valuesProducts[index]);
    Object.keys(valuesProducts[index]).forEach((item, i) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.textContent = `${item} = ${values[i]}`;
      li.appendChild(p);
      ul.appendChild(li);
    });
  } else {
    li.appendChild(p);
    ul.appendChild(li);
  }
});

container.appendChild(ul);
