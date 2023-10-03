const body = document.querySelector("body");
const img = document.createElement("img");
const h1 = document.createElement("h1");
const p_1 = document.createElement("p");
const p_2 = document.createElement("p");

img.src = "./assests/img_la.jpg";
img.alt = "LA";

body.appendChild(img);

h1.textContent = "This is a Heading";
body.appendChild(h1);

p_1.textContent = "This is a paragraph.";
body.appendChild(p_1);

p_2.textContent = "This is a another paragraph.";
body.appendChild(p_2);
