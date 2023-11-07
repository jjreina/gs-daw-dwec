import * as promises from "./promises";

// Objeto que emula una base de datos
const database = {
  users: [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ],
};

describe("DataBase Promises - selectUserById", () => {
  it("should gets user with id = 2", () => {
    return promises.selectUserById(2).then((user) => {
      expect(user.id).toBe(2);
    });
  });
  it("should gets User not found with id = 5", () => {
    return promises
      .selectUserById(5)
      .then((user) => user)
      .catch((error) => {
        expect(error).toBe("User not found");
      });
  });
});

describe("DataBase Promises - selectUserByName", () => {
  it("should gets user with id = Usuario 3", () => {
    return promises.selectUserByName("Usuario 3").then((user) => {
      expect(user.name).toBe("Usuario 3");
    });
  });
  it("should gets User not found with name = John", () => {
    return promises
      .selectUserByName("John")
      .then((user) => user)
      .catch((error) => {
        expect(error).toBe("User not found");
      });
  });
});

describe("Calculate Pow Promise", () => {
  it("should get [1, 4, 9, 16, 25] with [1, 2, 3, 4, 5]", () => {
    promises.calcultePow([1, 2, 3, 4, 5]).then((array) => {
      expect(array[0]).toBe(1);
      expect(array[1]).toBe(4);
      expect(array[2]).toBe(9);
      expect(array[3]).toBe(16);
      expect(array[4]).toBe(25);
    });
  });

  it("should get The length arays is 0 with []", () => {
    promises.calcultePow([]).catch((error) => {
      expect(error).toBe("The length arays is 0");
    });
  });
});
