/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(lista) {
    let numeroAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numeroAleatorio] + " ";
  }

  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "Messi",
    "Ronaldo"
  ];
  let action = ["ate", "peed", "crushed", "broke", "jumped", "stole"];
  let what = ["my homework", "my phone", "the car", "my house", "my tv"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "when I was in the school",
    "when I took a shower"
  ];

  console.log(
    aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when)
  );
  // who + acion + what + when
};
