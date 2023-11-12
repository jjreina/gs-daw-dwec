import { Car } from "./classes/car.js";

export const promeseConverToClase = (array) => {
  return new Promise((resolve) => {
    const arrayClassesCars = [];
    array.forEach((car) => {
      let newCar = new Car(car.id, car.make);
      newCar.model = car.model;
      newCar.type = car.type;
      newCar.year = car.year;
      arrayClassesCars.push(newCar);
    });
    resolve(arrayClassesCars);
  });
};

export const promeseGetCarsFrom2010 = (cars) => {
  return new Promise((resolve) => {
    let carsFrom2010 = cars.filter((car) => car.year >= 2010);
    resolve(carsFrom2010);
  });
};

export const promeseGetCarsByYears = (cars, year) => {
  return new Promise((resolve) => {
    let carsByYear = cars.filter((car) => car.year >= parseInt(year));
    resolve(carsByYear);
  });
};

export const promeseGetCarsByMakeOrModelOrType = (cars, fiterSelected) => {
  return new Promise((resolve) => {
    let carsByYear = cars.filter((car) => car[fiterSelected] === fiterSelected);
    resolve(carsByYear);
  });
};

export const promeseGetCarsByFilters = (cars, year, make, model, type) => {
  return new Promise((resolve) => {
    let carsByYear = cars.filter((car) => {
      return year !== "ALL" ? car.year >= parseInt(year) : car;
    });
    let carsByMake = carsByYear.filter((car) => {
      return make !== "ALL" ? car.make === make : car;
    });
    let carsByModel = carsByMake.filter((car) => {
      return model !== "ALL" ? car.model === model : car;
    });
    let carsByType = carsByModel.filter((car) => {
      return type !== "ALL" ? car.type === type : car;
    });
    resolve(carsByType);
  });
};

export const getFiltersValue = (cars, value) => {
  let arrayFiltered = new Set();
  cars.forEach((item) => {
    arrayFiltered.add(item[value]);
  });
  return arrayFiltered;
};
