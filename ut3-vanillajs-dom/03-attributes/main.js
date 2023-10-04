const body = document.querySelector("body");
body.classList = "p-3 m-0 border-0 bd-example";

const div = document.createElement("div");
div.className = "list-group";

const styles = [
  "list-group-item list-group-item-action",
  "list-group-item list-group-item-action list-group-item-primary",
  "list-group-item list-group-item-action list-group-item-secondary",
  "list-group-item list-group-item-action list-group-item-success",
  "list-group-item list-group-item-action list-group-item-danger",
  "list-group-item list-group-item-action list-group-item-warning",
  "list-group-item list-group-item-action list-group-item-info",
  "list-group-item list-group-item-action list-group-item-light",
  "list-group-item list-group-item-action list-group-item-dark",
];

const texts = [
  "A simple default list group item",
  "A simple primary list group item",
  "A simple secondary list group item",
  "A simple success list group item",
  "A simple danger list group item",
  "A simple warning list group item",
  "A simple info list group item",
  "A simple light list group item",
  "A simple dark list group item",
];

styles.forEach((style, i) => {
  let elemnt = document.createElement("a");
  elemnt.className = style;
  elemnt.href = "#";
  elemnt.textContent = texts[i];
  div.append(elemnt);
});

body.append(div);
