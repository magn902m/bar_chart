`use strict`;

window.addEventListener("DOMContentLoaded", init);

const model = [
  8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30,
  7, 3, 6, 3, 6, 3, 19, 24, 29, 14, 4, 1,
];
const queueSize = getNumberOfCustomers();
const barArray = document.querySelectorAll(".bar");

let timeoutSpeed = 500;
let counter = 0;

// displayData();

function init() {
  console.log("init");
  //   console.log(barArray);
  //   for (let arrayCounter; arrayCounter <= 40; arrayCounter++) {
  //     array = Math.floor(Math.random() * 1);
  //     console.log(array);
  //   https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
  //   }
  //   loop();
}

function loop() {
  //   console.log("loop");
  console.log(counter);
  if (counter < 40) {
    // console.log(counter < 39);
    model.unshift(queueSize);
    counter++;
    // displayData();
  } else {
    model.length = 39;
    model.unshift(queueSize);
  }
  console.log(model);
  setTimeout(displayData, timeoutSpeed);
}

function displayData() {
  console.log("displayData");
  for (let i = 0; i < 40; i++) {
    // console.log(i);
    barArray.textContent = model[i];
    // console.log(barArray[i]);
    barArray[i].style.height = `${model[i]}px`;
  }

  setTimeout(loop, timeoutSpeed);
  //   loop();

  //   barArray.forEach((elm, i) => {
  //     elm.textContent = model[i];
  //     // elm = model[i];
  //     console.log(elm);
  //     barArray[i].style.height = `${model[i]}px`;
  //     // loop();
  //   });
}

//   console.log("tallet til 40");
//   displayData();
//   setTimeout(loop, 3000);

//   model.unshift(counter);
//   setTimeout(loop, 3000);
//   console.log("Tal: ", counter);

// if (i < 39) {
// model.unshift(queueSize);
// i++;
// } else {
// model.length = 39;
// model.unshift(queueSize);
// }

// function loop() {
//     //   console.log("loop");
//     let counter = 0;
//     counter++;
//     if (counter < 40) {
//       // counter - 2;
//       model.pop(counter);
//       console.log("tallet til 40");
//       displayData();
//       setTimeout(loop, 3000);
//     }
//     model.unshift(counter);
//     setTimeout(loop, 3000);
//     console.log("Tal: ", counter);
//   }

function getNumberOfCustomers() {
  console.log("getNumberOfCustomers");
  return Math.floor(Math.random() * 23);
}

function modifyModel() {
  console.log("ModifyModel");
}
