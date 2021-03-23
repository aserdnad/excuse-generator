/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch"
];

let cantidad = [who.length, action.length, what.length, when.length];
let excusa = [];
let cambio = document.querySelector("#excusa");

window.onload = function() {
  for (let i = 0; i <= 3; i++) {
    excusa.push(Math.floor(Math.random() * cantidad[i]));
  }
  cambio.innerHTML = `${who[excusa[0]]} ${action[excusa[1]]} ${
    what[excusa[2]]
  } ${when[excusa[3]]}`;
};
