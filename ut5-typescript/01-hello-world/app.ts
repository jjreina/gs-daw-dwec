function sayHello_1(name: string): string {
  return `Hello ${name}`;
}

const sayHello = (name?: string): string => {
  return `Hello ${name || "name viene vacío"} `;
};

sayHello();

console.log(sayHello());

const fullName = (name: string = "Juan", surname: string = "Reina"): string => {
  return `${name} ${surname} `;
};

console.log(fullName());

/*let person: {
  name: string,
  surname: string,
  getFullName: () => string
}*/

type Person = {
  name: string;
  surname: string;
  getFullName: () => string;
};

let person: Person = {
  name: "Juan",
  surname: "Reina",
  getFullName: () => `${person.name} ${person.surname}`,
};
