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

window.addEventListener("scroll", function () {
  let element = document.querySelector("#question_one");
  let position = element.getBoundingClientRect();
  const spanBorder = document.querySelector(".active");
  // checking whether fully visible
  if (element && position.top <= window.innerHeight && position.bottom >= 0) {
    console.log("Element is fully visible in screen");
    spanBorder.classList.add("active-span");
  } else if (position.top < 0) {
    console.log("Element is above viewport");
    spanBorder.classList.remove("active-span");
  }

  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    console.log("Element is partially visible in screen");
  }
});

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
