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

label_datemin.textContent = "Enter a date after 2000-01-01: ";
input_datemin.type = "date";
input_datemin.id = "datemin";
input_datemin.name = "datemin";
input_datemin.max = "2000-01-02";

label_quantity.textContent = "Enter a date after 2000-01-01: ";
input_quantity.type = "date";
input_quantity.id = "datemin";
input_quantity.name = "datemin";
input_quantity.max = "2000-01-02";

form.appendChild(label_datemax);
form.appendChild(input_datemax);
form.appendChild(br);
form.appendChild(br.cloneNode());

form.appendChild(label_datemin);
form.appendChild(input_datemin);
form.appendChild(br.cloneNode());
form.appendChild(br.cloneNode());

form.appendChild(label_quantity);

body.appendChild(h1);
body.appendChild(p);
body.appendChild(form);
