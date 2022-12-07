function chooseService() {
  const service = document.querySelectorAll(".service-section .service-item");

  service.forEach((item) => {
    item.addEventListener("click", () => {
      switch (item.dataset.service) {
        case "1":
          document.querySelector(".slider-mini").style.display = "none";
          document.querySelector(".service-section iframe").style.display =
            "block";
          break;
        case "3":
          document.querySelector(".slider-mini").style.display = "flex";
          document.querySelector(".service-section iframe").style.display =
            "none";
          break;

        default:
          document.querySelector(".slider-mini").style.display = "none";
          document.querySelector(".service-section iframe").style.display =
            "block";
          break;
      }
    });
  });
}

chooseService();

const sliderMini = document.querySelector(".slider-mini");

let pointStart = 0;
let pointEnd = 0;

let pressedMouse = false;
let pressStart = 0;
let pressEnd = 0;

let index = 0;

const sliderMiniItem = document.querySelectorAll(".slider-mini-item");

function dragImageStart(e) {
  pressedMouse = true;
  pointStart = e.clientX || e.changedTouches[0].clientX;
  sliderMini.style.cursor = "grabbing";

  pressStart =
    ((e.pageX - sliderMini.offsetLeft) / sliderMini.offsetWidth) * 100 - 128 ||
    ((e.changedTouches[0].pageX - sliderMini.offsetLeft) /
      sliderMini.offsetWidth) *
      100;
}

function dragImageEnd(index, e) {
  pressedMouse = false;
  pointEnd = e.clientX || e.changedTouches[0].clientX;
  sliderMini.style.cursor = "grab";

  if (pressEnd > 0) {
    for (let i = sliderMiniItem.length; i > index; i--) {
      if (index > 0) {
        sliderMiniItem[index - 1].style.marginLeft = 0 + "%";
      }
    }
  } else {
    for (let i = 0; i - 1 < index; i++) {
      if (index < sliderMiniItem.length - 1) {
        sliderMiniItem[i].style.marginLeft = "-100%";
      }
    }
  }
}

function dragImage(e) {
  let distance =
    ((e.pageX - sliderMini.offsetLeft) / sliderMini.offsetWidth) * 100 - 128 ||
    ((e.changedTouches[0].pageX - sliderMini.offsetLeft) /
      sliderMini.offsetWidth) *
      100;

  if (pressedMouse) {
    if (pointStart > e.pageX) {
      pressEnd = -(pressStart - distance);
    } else {
      pressEnd = -(pressStart - distance);
    }
  }
}

function startSlideMini() {
  sliderMiniItem.forEach((item, index) => {
    item.addEventListener("mousedown", dragImageStart);
    item.addEventListener("mouseup", dragImageEnd.bind(this, index));
    item.addEventListener("mousemove", dragImage);

    item.addEventListener("touchstart", dragImageStart);
    item.addEventListener("touchend", dragImageEnd.bind(this, index));
    item.addEventListener("touchmove", dragImage);
  });
}
startSlideMini();
