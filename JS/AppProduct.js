const HamburgBtn = document.getElementById("DropdownHamburg");

var dropdown = document.querySelector("#Dropdown");

var ImgProduct = document.querySelectorAll(".BoxElementProduct");
var btnHamburg = document.getElementById("Btn_Hamburg");
var PortafolioCell = document.getElementById("PortafolioCell");
var DropdownCellBox = document.getElementById("DropdownCellBox");
var product = document.querySelectorAll(".BoxElementProduct");



document.getElementById("ScrollProd").classList.remove("overScrollProd");



window.onscroll = function () {
  var Ejey = window.scrollY;

  if (Ejey < 300) {
    document.getElementById("ScrollProd").classList.remove("overScrollProd");
    document.getElementById("ScrollProd").classList.remove("BlackScroll");
    document.getElementById("nav").classList.remove("ScrollSticky");
  }
  if (Ejey > 500) {
    document.getElementById("ScrollProd").classList.add("overScrollProd");
    document.querySelector(".overScrollProd").style.height = "0px";
  }
  if (Ejey >= 900) {
    document.querySelector(".overScrollProd").style.height = "65px";
    document.getElementById("nav").classList.add("ScrollSticky");
    document.getElementById("ScrollProd").classList.add("BlackScroll");
  }
};
function accord() {
  document.getElementById("ScrollProd").classList.remove("overScrollProd");
}

var backgroundPorta = " ";
var heightCell = 0;
var heightPortafolioCell = 0;

btnHamburg.addEventListener("click", () => {
  
  
  HamburgBtn.style.display = `block`;
  HamburgBtn.style.position = "fixed";
  
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



// Mostrar Imagen


ImgProduct.forEach((punto, i) => {
  ImgProduct[i].addEventListener("click", (e) => {
    const selectProduct = e.target.parentElement;
    readTheContent(selectProduct);

    document.getElementById("BoxMost").style.display = "block"
    document.getElementById("BoxMost").style.animation = "ImgProductAnimated 0.35s 1";
    document.getElementById("BoxMost").style.height = "100%";
    document.getElementById("BoxMost").style.width = "100%";
  });

  ImgProduct[i].addEventListener("mouseover", (e) => {
    
    const selectProduct = e.target.parentElement;
    selectProduct.style.background = "#0fb9b6";
    readTheContent(selectProduct).style.opacity = "80%";
  });
  ImgProduct[i].addEventListener("mouseout", (e) => {
    
    const selectProduct = e.target.parentElement;
    
    readTheContent(selectProduct).style.opacity = "100%";
  });
  
});

function readTheContent(product) {
  if(product){
    const infoProduct = {
      Boximage: product.querySelector("#image"),
      image: product.querySelector("#image").src,
    };
    
    document.querySelector(".ImgBox").innerHTML = `<img class="ImgBoxMost" src="${infoProduct.image}">`;  
    return infoProduct.Boximage
  }
  if(!product){
    document.querySelector(".ImgBox").innerHTML = `<p>Not Found</p>`;
  }
  
}

function ClearBox(){
  document.getElementById("BoxMost").style.animation = "ImgProductAnimatedOut 0.5s 1";
  setTimeout(()=> document.getElementById("BoxMost").style.display = "none", 250);
}

