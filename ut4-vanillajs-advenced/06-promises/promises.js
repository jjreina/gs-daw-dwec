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

/*
calcultePow([1, 2])
  .then((elemnt) => elemnt.map((e) => e + 1)) // 1, 4 -> 2, 5
  .then((elemnt) => elemnt.map((e) => e + 1)) // 3, 6
  .then((elemnt) => calcultePow(elemnt)) // 9, 36
  .then((elemnt) => console.log(elemnt));
*/
