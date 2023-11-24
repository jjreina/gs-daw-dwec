import { promise_1, promise_2, promise_3 } from "./promieses.js";

export const consume_1 = async () => {
  console.log("promesa 1 antes del await");
  let array1 = await promise_1();
  console.log("promesa 1 despues del await");
  return array1;
};
export const consume_2 = async () => {
  console.log("promesa 2 antes del await");
  let array2 = await promise_2();
  console.log("promesa 2 despues del await");
  return array2;
};
export const consume_3 = async () => {
  console.log("promesa 3 antes del await");
  let array3 = await promise_3();
  console.log("promesa 3 depues del await");
  return array3;
};
