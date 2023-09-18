

var nav = document.querySelector("#ScrollProd");
var dropdown = document.querySelector("#Dropdown");
var dropdownBox= document.getElementById("Icon_Portafolio");
var dropdownElement = document.getElementById("Dropdown");


// Portafolio Acordeon

function accord(){
    document.getElementById("ScrollProd").classList.remove('overScrollProd');
}

function dropdownHov(){
    accord()
    document.getElementById("Icon_Portafolio").style.background = "#0fb9b6";
    document.getElementById("Dropdown_Box").style.display = "block";
    document.getElementById("Dropdown_Box").style.animationName = "AcordeonOver";
    document.getElementById("Dropdown_Box").style.animationDuration = "0.3s";
    document.getElementById("Dropdown_Box").style.animationIterationCount = "1";
    document.getElementById("Dropdown_Box").style.height = "250px";
}
  
dropdown.addEventListener("mouseover", () => dropdownHov())
  
dropdownElement.addEventListener("mouseout", (e) => {
document.getElementById("Icon_Portafolio").style.background = "#fff";
document.getElementById("Dropdown_Box").style.height = "0px";

});
