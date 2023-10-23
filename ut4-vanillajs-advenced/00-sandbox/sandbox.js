import { PI, circunference } from "./utils.js";

PI;
circunference;
// const { name, surname, age, job } = person;

// const { surname: apellido, age: edad, job: trabajo } = person;
// console.log(apellido, edad, trabajo);
// console.log({ apellido, edad, trabajo });

const person = {
  name: "Pedro",
  surname: "Perez",
  age: 32,
  job: "Doctor",
};

const getPerson = (person) => {
  return { name, age };
};

const cars = ["Audi", "Mercedes", "BMW", "Tesla"];
const getCars = () => {
  return cars;
};

let [, secondCar] = cars;
let str = `Literal strings: ${getCars()[0]} ${secondCar}`;
console.log(str);
