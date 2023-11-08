// Objeto que emula una base de datos
const database = {
  users: [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ],
};

export const selectUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = database.users.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const selectUserByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = database.users.find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const calcultePow = (array) => {
  return new Promise((resolve, reject) => {
    if (array.length !== 0) {
      let newArray = array.map((element) => element * element);
      resolve(newArray);
    } else {
      reject("The length arays is 0");
    }
  });
};

/*** ejemplod de promesa */
/*
calcultePow([1, 2])
  .then((elemnt) => elemnt.map((e) => e + 1)) // 1, 4 -> 2, 5
  .then((elemnt) => elemnt.map((e) => e + 1)) // 3, 6
  .then((elemnt) => calcultePow(elemnt)) // 9, 36
  .then((elemnt) => console.log(elemnt));

const myPromise = (array) => {
  return new Promise((resolve) => {
    let newArray = array.map((item) => item + 1);
    resolve(newArray);
  });
};

myPromise([1, 2, 3])
  .then((result) => result.map((item) => item + 2)) // 2, 3, 4 -> 4 , 5, 6, 
  .then((result) => {
    let newArray = result.map((item) => item + 3); // 7, 8, 9
    console.log(`Result: ${newArray}`);
  })
  .finally(() => console.log("All eperations finished"));
  */

const myPromise = (array) => {
  return new Promise((resolve) => {
    let newArray = array.map((item) => item + 1);
    resolve(newArray);
  });
};

myPromise([1, 2, 3])
  .then((result) => myPromise(result))
  .then((result) => myPromise(result))
  .then((result) => console.log("Promise: " + result))
  .catch((error) => console.log(error))
  .finally(() => console.log("All ok"));

async function res() {
  let result = await myPromise([1, 2, 3]);
  result = await myPromise(result);
  result = await myPromise(result);
  console.log("Async/Await: " + result);
}
res();
