import { promeseConverToClase, promeseGetCarsFrom2010 } from "./async-await.js";
import { mockCars } from "./mockcars.js";

const block = document.querySelector(".block");

export async function getCars(array) {
  let carsClass = await promeseConverToClase(array);
  let carsNewer2010 = await promeseGetCarsFrom2010(carsClass);
  carsNewer2010.forEach((car) => {
    let card = document.createElement("div");
    let p_1 = document.createElement("p");
    let p_2 = document.createElement("p");
    p_1.textContent = `Model: ${car.model}, Make: ${car.make}`;
    p_2.textContent = `Type: ${car.type}, Year: ${car.year} `;
    card.appendChild(p_1);
    card.appendChild(p_2);
    block.appendChild(card);
  });
}

getCars(mockCars);
