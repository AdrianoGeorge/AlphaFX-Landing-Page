const check1 = document.getElementById("yes1");
const check2 = document.getElementById("yes2");
const check3 = document.getElementById("yes3");
const button = document.getElementById("btn");

const buttonWrap = document.querySelector(".button");
const checkboxes = document.querySelectorAll("input[type=radio]");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (check1.checked && check2.checked && check3.checked) {
      buttonWrap.classList.add("active");
      console.log("checked");
    } else {
      buttonWrap.classList.remove("active");
      console.log("UNchecked");
    }
  });
});

// VIEWPORT ANIMATION
// The read-only Window property innerWidth returns the interior width of the window in pixels. This includes the width of the vertical scroll bar, if one is present.

// The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

// The layout viewport is the viewport into which the browser draws a web page. Essentially, it represents what is available to be seen, while the visual viewport represents what is currently visible on the user's display device.

// console.log(position.height); // height of element in viewport (visible) in (px)
// console.log(window.innerHeight);// window.innerHeight returns the height of the viewport including the browser chrome and the scrollbar. It is the same as the height of the window.
// console.log(position.bottom); // bottom position of element in viewport (px)
// console.log(position.top); // top position of element in viewport (px)
// console.log(position.right); // right position of element in viewport (px)
// console.log(position.left); // left position of element in viewport (px)
// console.log(position.width); // width of element in viewport (px)
// console.log(position.height); // height of element in viewport (px)
// console.log(position.x); // x position of element in viewport (px)
// console.log(position.y); // y position of element in viewport (px)
// console.log("Element is fully visible in screen");

// OFFSET
const element1 = document.querySelector("#question_one");
const element2 = document.querySelector("#question_two");
const element3 = document.querySelector("#question_three");
const spanBorder1 = document.querySelector(".active1");
const spanBorder2 = document.querySelector(".active2");
const spanBorder3 = document.querySelector(".active3");
const positionIndicator = document.querySelector(".position-indicator");

window.addEventListener("scroll", function () {
  let position = element1.getBoundingClientRect();

  let questionOneVisible =
    position.top >= 0 &&
    position.left >= 0 &&
    position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.right <=
      (window.innerWidth || document.documentElement.clientWidth);

  let questionOneNotVisible =
    position.top < 0 ||
    position.left < 0 ||
    position.bottom >
      (window.innerHeight || document.documentElement.clientHeight) ||
    position.right >
      (window.innerWidth || document.documentElement.clientWidth);

  if (questionOneVisible) {
    spanBorder1.classList.add("active-span");
    console.log("element is FULLY VISIBLE in viewport");
    // check the element is not visible
  } else if (questionOneNotVisible) {
    spanBorder1.classList.remove("active-span");
    console.log("Element   is NOT VISIBLE in viewport");
  }
});

// Event trigger question two
window.addEventListener("scroll", function () {
  let position = element2.getBoundingClientRect();
  let questionTwoVisible =
    position.top >= 0 &&
    position.left >= 0 &&
    position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.right <=
      (window.innerWidth || document.documentElement.clientWidth);

  let questionTwoNotVisible =
    position.top < 0 ||
    position.left < 0 ||
    position.bottom >
      (window.innerHeight || document.documentElement.clientHeight) ||
    position.right >
      (window.innerWidth || document.documentElement.clientWidth);

  if (questionTwoVisible) {
    console.log("element is FULLY VISIBLE in viewport");
    spanBorder2.classList.add("active-span");
    // check the element is not visible
  } else if (questionTwoNotVisible) {
    console.log("Element   is NOT VISIBLE in viewport");
    spanBorder2.classList.remove("active-span");
  }
});

// Event trigger question THree
window.addEventListener("scroll", function () {
  let position = element3.getBoundingClientRect();
  let questionThreeVisible =
    position.top >= 0 &&
    position.left >= 0 &&
    position.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    position.right <=
      (window.innerWidth || document.documentElement.clientWidth);

  let questionThreeNotVisible =
    position.top < 0 ||
    position.left < 0 ||
    position.bottom >
      (window.innerHeight || document.documentElement.clientHeight) ||
    position.right >
      (window.innerWidth || document.documentElement.clientWidth);

  if (questionThreeVisible) {
    spanBorder3.classList.add("active-span");
    console.log("element is FULLY VISIBLE in viewport");
  } else if (questionThreeNotVisible) {
    spanBorder3.classList.remove("active-span");
    console.log("Element   is NOT VISIBLE in viewport");
  }
});

// window.addEventListener("scroll", function () {
//   let element = document.querySelector("#question_three");
//   let position = element.getBoundingClientRect(); // getBoundingClientRect() returns the size and position of an element relative to the viewport.
//   //   console.log(position.top);
//   const spanBorder = document.querySelector(".active");
//   // checking whether fully visible
//   if (
//     position.top >= 0 &&
//     position.left >= 0 &&
//     position.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     position.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   ) {
//     console.log("element is FULLY VISIBLE in viewport");

//     spanBorder.classList.add("active-span");
//     // check the element is not visible
//   } else if (
//     position.top < 0 ||
//     position.left < 0 ||
//     position.bottom >
//       (window.innerHeight || document.documentElement.clientHeight) ||
//     position.right > (window.innerWidth || document.documentElement.clientWidth)
//   ) {
//     // console.log("Element is partially visible in screen");
//     // console.log("Element is above viewport");
//     console.log("Element   is NOT VISIBLE in viewport");
//     spanBorder.classList.remove("active-span");
//   }

//  V3
// let myElement = document.getElementById("my-element");
// function elementInViewport() {
//   let rect = document.getElementById("my-element");
//   console.log(rect);
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight + rect.height ||
//         document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
// v2
// Scroll ViewPort
// const isInViewport = function () {
//     const element = document.querySelector(".block");
//   const bounding = element.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// // Debounce a function call
// const debounce = (func, delay) => {
//   let inDebounce;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(inDebounce);
//     inDebounce = setTimeout(() => func.apply(context, args), delay);
//   };
// };

// // Function which will make the API call
// const getBlocks = function () {
//   blocks.forEach((block) => {
//     if (isInViewport(block)) {
//       console.log(block.innerText);
//     }
//   });

//   console.log(" ");
// };

// // Get all the products
// const blocks = document.querySelectorAll(".blocks");

// // Assign the event listener
// window.addEventListener("scroll", debounce(getBlocks, 1000), false);

// var bottomBar = document.getElementById("bottombar");
// var viewport = window.visualViewport;
// function viewportHandler() {
//   var layoutViewport = document.getElementById("layoutViewport");

//   // Since the bar is position: fixed we need to offset it by the visual
//   // viewport's offset from the layout viewport origin.
//   var offsetLeft = viewport.offsetLeft;
//   var offsetTop =
//     viewport.height -
//     layoutViewport.getBoundingClientRect().height +
//     viewport.offsetTop;

//   // You could also do this by setting style.left and style.top if you
//   // use width: 100% instead.
//   bottomBar.style.transform =
//     "translate(" +
//     offsetLeft +
//     "px," +
//     offsetTop +
//     "px) " +
//     "scale(" +
//     1 / viewport.scale +
//     ")";
// }
// window.visualViewport.addEventListener("scroll", viewportHandler);
// window.visualViewport.addEventListener("resize", viewportHandler);

// IntersectionObserver**************

// function onVisible(element, callback) {
//   new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.intersectionRatio > 0) {
//         callback(element);
//         observer.disconnect();
//       } //check if element is not visible in viewport - not working yet
//       else {
//         console.log("Element is not visible in screen");
//       }
//     });
//   }).observe(element);
// }
// onVisible(document.querySelector("#question_two"), () =>
//   console.log("it's visible")
// );
