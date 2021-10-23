/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

//write your code here
function randomize() {
  let randomSuit = Math.floor(Math.random() * 4);
  let randomNumber = Math.floor(Math.random() * 12);
  let suitArray = ["♦", "♥", "♠", "♣"];
  let suitSpace = document.getElementById("topCardSuit");
  let newP = document.createElement("P");
  newP.innerHTML = suitArray[randomSuit];
  suitSpace.appendChild(newP);
  let bottomSuit = document.createElement("DIV");
  bottomSuit.id = "botCardSuit";
  bottomSuit.innerHTML = suitArray[randomSuit];
  cardBody.appendChild(bottomSuit);
  document.getElementById("botCardSuit").style.transform = "rotate(180deg)";
  let numberSpace = document.getElementById("cardNumber");
  numberSpace.innerHTML = randomNumber;
  if (randomSuit == 0 || randomSuit == 1) {
    newP.style.color = "red";
    bottomSuit.style.color = "red";
    numberSpace.style.color = "red";
  }
  if (randomNumber == 0) {
    numberSpace.innerHTML = "A";
  }
}

window.onload = randomize();
