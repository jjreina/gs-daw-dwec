import { consume_1, consume_2, consume_3 } from "./consumer.js";

consume_1();
console.log("uno");
consume_2();
console.log("dos");
consume_3();
console.log("tres");

/*Promise.all([consume_2(), consume_1(), consume_3()]).then((values) => {
  console.log(values);
});*/

/*const p = async () => {
  let value = await consume_1();
  console.log("uno");
  console.log(value);
  value = await consume_2();
  console.log("dos");
  console.log(value);
  value = await consume_3();
  console.log("tres");
  console.log(value);
};

p();*/
