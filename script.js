`use strict`;

window.addEventListener("DOMContentLoaded", init);

// const model = [
//   8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 3, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30,
//   7, 3, 6, 3, 6, 3, 19, 24, 29, 14, 4, 1,
// ];

// const queueSize = getNumberOfCustomers();
const model = [];
const barArray = document.querySelectorAll(".bar");

let timeoutSpeed = 500;

function init() {
  console.log("init");
  loop();
}

// Controller
function loop() {
  //   console.log("loop")
  arrUpdate();
  displayData();
  setTimeout(loop, timeoutSpeed);
}

// Model
function arrUpdate() {
  if (model.length < 40) {
    model.unshift(getNumberOfCustomers());
  } else {
    model.length = 39;
    model.unshift(getNumberOfCustomers());
  }
  console.log(model);
}

// View
function displayData() {
  // console.log("displayData");
  for (let i = 0; i < 40; i++) {
    // console.log(i);
    barArray.textContent = model[i];
    // console.log(barArray[i]);
    barArray[i].style.height = `${model[i]}px`;
  }
}

function getNumberOfCustomers() {
  // console.log("getNumberOfCustomers");
  return Math.floor(Math.random() * 32);
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
