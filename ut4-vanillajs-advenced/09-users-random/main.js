import "./style.css";
import { Person } from "./person";

const url_radomuser_api = "https://randomuser.me/api/";
const url_world_time_api =
  "https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=";
const world_time_options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a",
    "X-RapidAPI-Host": "world-time-by-api-ninjas.p.rapidapi.com",
  },
};
const BUTTON_TEXT = "GENERATE USER";

const container = document.querySelector(".container");
const completeNameSpan = document.createElement("span");
const mailSpan = document.createElement("span");
const phoneSpan = document.createElement("span");
const img = document.createElement("img");

let person = new Person();
let info = "";

const card = document.createElement("div");
card.className = "card";

const button = document.createElement("button");
button.textContent = BUTTON_TEXT;

container.appendChild(card);
container.appendChild(button);

const createContentCard = (name, surname, mail, phone, image) => {
  completeNameSpan.innerHTML = `<strong>Name:</strong> ${name} ${surname}`;
  mailSpan.innerHTML = `<strong>Mail:</strong> ${mail}`;
  phoneSpan.innerHTML = `<strong>Phone:</strong> ${phone}`;
  img.src = image;
  card.appendChild(img);
  card.appendChild(completeNameSpan);
  card.appendChild(mailSpan);
  card.appendChild(phoneSpan);
};

button.addEventListener("click", async () => {
  try {
    const response = await fetch(url_radomuser_api);
    const { results } = await response.json();
    info = results[0];
    createContentCard(
      info.name.first,
      info.name.last,
      info.email,
      info.phone,
      info.picture.large
    );
  } catch (error) {
    console.log(new Error(error));
  }
});
