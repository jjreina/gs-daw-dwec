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

/*
export async function getCars(array) {
  let carsClass = await promeseConverToClase(array);
  let carsNewer2010 = await promeseGetCarsFrom2010(carsClass);
}
*/

// getCars(cars);
