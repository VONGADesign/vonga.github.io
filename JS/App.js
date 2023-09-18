// Variables

const slider = document.querySelector(".Gallery");
const btnSlide = document.querySelectorAll(".btnSlide");
const HamburgBtn = document.getElementById("DropdownHamburg");

var nav = document.querySelector("#Scroll");
var dropdown = document.querySelector("#Dropdown");
var dropdownBox = document.getElementById("Icon_Portafolio");
var dropdownElement = document.getElementById("Dropdown");

var Box_GalleryOne = document.querySelectorAll("Box_1");
var Box_Gallery = document.querySelectorAll(".Box");
var Text_Gallery = document.querySelectorAll(".TextBox");
var btnHamburg = document.getElementById("Btn_Hamburg");
var PortafolioCell = document.getElementById("PortafolioCell");
var DropdownCellBox = document.getElementById("DropdownCellBox");

var active = 0;
let isDown = false;
let startX;
let scrollLeft;
let posicion = 0;
let calculBtn = 0;

window.onscroll = function () {
  var Ejey = window.scrollY;
  // document.getElementById('y').innerText = y;

  if (Ejey < 1100) {
    document.getElementById("Scroll").classList.add("overScroll");
    document.getElementById("Scroll").style.display = "none";
    document.getElementById("Dropdown_Box").style.display = "none";
  }
  if (Ejey >= 1100) {
    document.getElementById("Scroll").style.display = "block";
    document.getElementById("Scroll").style.animationName = "Scrolling";
    document.getElementById("Scroll").style.animationDuration = "0.2s";
    document.getElementById("Scroll").style.animationIterationCount = "1";
  }
};
function accord() {
  document.getElementById("Scroll").classList.remove("overScroll");
}

// Portafolio Acordeon

function dropdownHov() {
  accord();
  document.getElementById("Icon_Portafolio").style.background = "#0fb9b6";
  document.getElementById("Dropdown_Box").style.display = "block";
  document.getElementById("Dropdown_Box").style.animationName = "AcordeonOver";
  document.getElementById("Dropdown_Box").style.animationDuration = "0.3s";
  document.getElementById("Dropdown_Box").style.animationIterationCount = "1";
  document.getElementById("Dropdown_Box").style.height = "250px";
}

dropdown.addEventListener("mouseover", () => dropdownHov());

dropdownElement.addEventListener("mouseout", (e) => {
  document.getElementById("Icon_Portafolio").style.background = "#fff";
  document.getElementById("Dropdown_Box").style.height = "0px";
});

// Carrousell Botones

btnSlide.forEach((punto, i) => {
  btnSlide[i].addEventListener("click", () => {
    active = 1;
    posicion = i;
    posicion = posicion * -20;

    slider.style.transform = `translateX(${posicion}%)`;

    btnSlide.forEach((punto, i) => {
      btnSlide[i].classList.remove("active");
    });

    punto.classList.add("active");
  });
});

// Portafolio Acordeon Celular

var backgroundPorta = " ";
var heightCell = 0;
var heightPortafolioCell = 0;

btnHamburg.addEventListener("click", () => {
  HamburgBtn.style.display = `block`;

  if (!heightCell) {
    heightCell = 900;
    document.querySelector("body").style.overflow = "hidden";
  } else {
    heightCell = 0;
    document.querySelector("body").style.overflow = "auto";
  }

  HamburgBtn.style.height = `${heightCell}px`;
});

PortafolioCell.addEventListener("click", () => {
  DropdownCellBox.style.display = `block`;

  if (!heightPortafolioCell) {
    backgroundPorta = "#0fb9b6";
    HamburgBtn.style.height = "900px";
    heightPortafolioCell = DropdownCellBox.scrollHeight;
  } else {
    backgroundPorta = "#fff";
    heightPortafolioCell = 0;
  }

  DropdownCellBox.style.height = `${heightPortafolioCell}px`;
  document.getElementById(
    "IconPortafolioCell"
  ).style.background = `${backgroundPorta}`;
});

var posBtn = 0;
posicion = 0;

setInterval(() => {
  if (screen.width > 768) {
    if (posicion == -60) {
      btnSlide.forEach((punto, i) => {
        btnSlide[i].classList.remove("active");
      });
      posicion = 0;
      calculBtn = 0;
      btnSlide[calculBtn].classList.add("active");
    } else if (posicion != -60) {
      posicion = posicion - 20;
      calculBtn = (-1 * posicion) / 20;
      btnSlide[calculBtn - 1].classList.remove("active");
    }

    slider.style.transform = `translateX(${posicion}%)`;

    if (calculBtn < 4) {
      btnSlide[calculBtn].classList.add("active");
    }
  }

  if (screen.width < 768) {
    if (posicion == -80) {
      btnSlide.forEach((punto, i) => {
        btnSlide[i].classList.remove("active");
      });

      posicion = 0;
      calculBtn = 0;
      btnSlide[calculBtn].classList.add("active");
    } else if (posicion != -80) {
      posicion = posicion - 20;
      calculBtn = (-1 * posicion) / 20;
      btnSlide[calculBtn - 1].classList.remove("active");
    }

    slider.style.transform = `translateX(${posicion}%)`;

    if (posicion < 5) {
      btnSlide[calculBtn].classList.add("active");
    }
  }
}, 4000);

// Slider hover

Box_Gallery.forEach((punto, i) => {
  Box_Gallery[i].addEventListener("mouseover", () => {
    ActiveBox = 1;
    ElementBox = i;

    Box_Gallery.forEach((punto, i) => {
      Text_Gallery[i].style.display = "none";
    });

    Text_Gallery[i].style.display = "block";
    Text_Gallery[i].style.animationName = "OpacityGallery";
    Text_Gallery[i].style.animationDuration = "0.5s";
    Text_Gallery[i].style.animationIterationCount = "1";
  });
});

Box_Gallery.forEach((punto, i) => {
  Text_Gallery[i].style.display = "none";
});

Box_Gallery.forEach((punto, i) => {
  Box_Gallery[i].addEventListener("mouseover", () => {
    ElementBox = i;

    Box_Gallery.forEach((punto, i) => {
      Text_Gallery[i].style.display = "none";
    });

    Text_Gallery[i].style.display = "inline-block";
  });

  Box_Gallery[i].addEventListener("mouseout", () => {
    Box_Gallery.forEach((punto, i) => {
      Text_Gallery[i].style.display = "none";
    });
  });
});
