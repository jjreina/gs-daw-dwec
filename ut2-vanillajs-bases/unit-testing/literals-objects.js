export let person = {
  name: "John",
  surname: "Doe",
  country: "USA",
  age: 32,
  getAge: function () {
    return this.age;
  },
  address: {
    street: "C/ Larios",
    number: 25,
    "c.p": 29785,
  },
};
