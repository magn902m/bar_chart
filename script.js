`use strict`;

window.addEventListener("DOMContentLoaded", init);

// let arrayCounter;
// let array = 1;
const model = [
  8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30,
  7, 3, 6, 3, 6, 3, 19, 24, 29, 14, 4, 1,
];
const queueSize = getNumberOfCustomers();
const barArray = document.querySelectorAll(".bar");

displayData();

function init() {
  console.log("init");
  //   console.log(barArray);
  //   for (let arrayCounter; arrayCounter <= 40; arrayCounter++) {
  //     array = Math.floor(Math.random() * 1);
  //     console.log(array);
  //   https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
  //   }
}

function loop() {
  console.log("loop");
}

function getNumberOfCustomers() {
  console.log("getNumberOfCustomers");
  return Math.floor(Math.random() * 23);
}

function displayData() {
  console.log("displayData");
  barArray.forEach((elm, i) => {
    elm.textContent = model[i];
    // elm = model[i];

    console.log(elm);
    // barArray[11].style.height = "50%";
    barArray[i].style.height = `${model[i]}px`;
  });
}

function modifyModel() {
  console.log("ModifyModel");
  //   for (let counter = 0; counter <= 40; counter++) {
  //     console.log(counter);
  //   }
  //   div.style.height = "50%";
  //   model.style.height = ();
}
