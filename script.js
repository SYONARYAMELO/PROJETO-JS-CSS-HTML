let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicatiors");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".item.active");
  itemOld.classList.remove("active");

  let dotsOld = indicator.querySelector("ul li.active");
  dotsOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML = "0" + (active + 1);
}

nextButton.onclick = () => {
  list.style.setProperty("--calculation", 1);
  if (active + 1 > lastPosition) {
    active = firstPosition;
  } else {
    active = active + 1;
  }

  setSlider();

  items[active].classList.add("active");
};

prevButton.onclick = () => {
    list.style.setProperty("--calculation", -1);
  if (active - 1 < firstPosition) {
    active = lastPosition;
  } else {
    active = active - 1;
  }

  setSlider();

  items[active].classList.add("active");
};
