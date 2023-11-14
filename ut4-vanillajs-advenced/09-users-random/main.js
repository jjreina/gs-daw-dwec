import "./style.css";
import { Person } from "./person";

let person = new Person();
let info = "";
const BUTTON_TEXT = "GENERATE USER";

const container = document.querySelector(".container");

const card = document.createElement("div");
card.className = "card";

const button = document.createElement("button");
button.textContent = BUTTON_TEXT;

container.appendChild(card);
container.appendChild(button);

button.addEventListener("click", async () => {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  const { results } = await response.json();
  info = results[0];
  console.log((person.name_first = info.name.first));
});
