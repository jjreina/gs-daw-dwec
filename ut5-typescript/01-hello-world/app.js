"use strict";
function sayHello_1(name) {
    return `Hello ${name}`;
}
const sayHello = (name) => {
    return `Hello ${name || "name viene vacío"} `;
};
sayHello();
console.log(sayHello());
const fullName = (name = "Juan", surname = "Reina") => {
    return `${name} ${surname} `;
};
console.log(fullName());
