async function test1() {
  let result = await fetch("");
  let data = await result.json();
  console.log(data.results[0]);
}
async function test2() {
  let result = await fetch("");
  let data = await result.json();
  console.log(data.results[1]);
}
async function test3() {
  let result = await fetch("");
  let data = await result.json();
  console.log(data.results[2]);
}

async function test4() {
  let result = await fetch("");
  let data = await result.json();
  console.log(data.results);
}

test1();
test2();
test3();
test4();
