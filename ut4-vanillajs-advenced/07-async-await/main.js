import {
  promeseConverToClase,
  getFiltersValue,
  promeseGetCarsByFilters,
} from "./async-await.js";
import { mockCars } from "./mockcars.js";

const block = document.querySelector(".block");
const filtersSelectTag = document.getElementsByTagName("select");

// Adds values without repeat to every select tag(yearm, make, model and type)
async function setFilterValues(cars) {
  let filters = Object.keys(cars[0]);
  for (let i = 1; i < filters.length; i++) {
    let filterValues = getFiltersValue(cars, filters[i]);
    filterValues.forEach((value) => {
      let optionTag = document.createElement("option");
      optionTag.text = value;
      filtersSelectTag[i - 1].appendChild(optionTag);
    });
    let optionTag = document.createElement("option");
    optionTag.text = "ALL";
    filtersSelectTag[i - 1].appendChild(optionTag);
  }
}

async function getCars(array, year, make, model, type) {
  // Convert Literal objecto to Classes
  let carsClass = await promeseConverToClase(array);
  // Filters by year, make, model and type
  let carFiltered = await promeseGetCarsByFilters(
    carsClass,
    year,
    make,
    model,
    type
  );
  // Set cars filtered in the DOM
  carFiltered.forEach((car) => {
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

// Clear card section after every filter is changed
const clearSelection = () => {
  while (block.firstChild) {
    block.removeChild(block.lastChild);
  }
};

// Adds event lister to avery select tag
Array.from(filtersSelectTag).forEach((selectTag) => {
  selectTag.addEventListener("change", () => {
    clearSelection();
    getCars(
      mockCars,
      filtersSelectTag[0].value, // year
      filtersSelectTag[1].value, // make
      filtersSelectTag[2].value, // model
      filtersSelectTag[3].value // type
    );
  });
});

// First time
setFilterValues(mockCars);
getCars(mockCars, "ALL", "ALL", "ALL", "ALL");
