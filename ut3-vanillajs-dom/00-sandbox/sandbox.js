/*const body = document.querySelector("body");
const p = document.createElement("p");
const textNode_1 = document.createTextNode("Hola Text Node 1");
const textNode_2 = document.createTextNode("Hola Text Node 2");
console.log(p.isConnected);
p.appendChild(textNode_1);
p.appendChild(textNode_2);
console.log(p.isConnected);
console.log(p);
console.log(p.textContent);
body.appendChild(p);
console.log(p.childNodes[0]);
console.log(p.childNodes[1]);
console.log(p.isConnected);*/
/*const container = document.querySelector(".container");
const p_1 = document.createElement("p");
const p_2 = document.createElement("p");
const span_1 = document.createElement("span");
p_1.textContent = "Párrafo 1";
p_2.textContent = "Párrafo 2";
span_1.textContent = "Span 1";
container.appendChild(p_1);
container.appendChild(p_2);
container.insertBefore(span_1, p_2);
const newSpan = document.createElement("span");
newSpan.textContent = "Nuevo span usando replaceChildren";
container.replaceChildren(newSpan);
span_1.onclick((e) => {
  alert("Hello World!!!");
});

span_1.addEventListener("click", (e) => {
  alert("Hello World!!!");
});*/
// container.removeChild(p_2);
const button = document.querySelector("button");
const clickAction = () => alert("Click Event");
const mouseEnterAction = () => alert("Mouse Enter Event");
const mouseLeaveAction = () => alert("Mouse Leave Event");
button.addEventListener("click", clickAction, bub);
//button.addEventListener("mouseenter", mouseEnterAction);
//button.addEventListener("mouseleave", mouseLeaveAction);
