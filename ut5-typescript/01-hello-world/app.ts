import { getNumber } from "./utils";

let msg: string = "Hello World, TypeScript";
console.log(msg[msg.length]?.toLocaleUpperCase() || "Valor fuera de rango");
