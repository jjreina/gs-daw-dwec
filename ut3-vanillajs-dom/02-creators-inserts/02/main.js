const body = document.querySelector("body");

const h1 = document.createElement("h1");
const p = document.createElement("p");
const form = document.createElement("form");
const label_datemax = document.createElement("label");
const label_datemin = document.createElement("label");
const label_quantity = document.createElement("label");
const input_datemax = document.createElement("input");
const input_datemin = document.createElement("input");
const input_quantity = document.createElement("input");
const br = document.createElement("br");

h1.textContent = "The input min and max attributes";

p.textContent =
  "The min and max attributes specify the minimum and maximum values for an input element.";

form.action = "/action_page.php";

label_datemax.textContent = "Enter a date before 1980-01-01: ";
input_datemax.type = "date";
input_datemax.id = "datemax";
input_datemax.name = "datemax";
input_datemax.max = "1979-12-31";

form.appendChild(label_datemax);
form.appendChild(input_datemax);
form.appendChild(br);
form.appendChild(br);

form.appendChild(label_datemin);
form.appendChild(label_quantity);

body.appendChild(h1);
body.appendChild(p);
body.appendChild(form);
