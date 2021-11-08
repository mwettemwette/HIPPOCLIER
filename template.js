let contenu_models={};
fetch('Models.json')
.then(function(response){
  return response.json();
})
.then(function(json){
  let contenu_models=json["models"];
  var k = 0;
  let idd = new URLSearchParams(window.location.search).get('id') ;
  console.log(idd)
  for(const p of contenu_models){
    if(p["id"] == idd ){
      console.log(p)
      let dimtel = p.dimtel.split(',');
      console.log(dimtel)
      let dimtrou = p.dimtrou.split(',');
      console.log(dimtrou)
        var test = document.getElementById('test');
        var context = test.getContext('2d');

        context.beginPath();
        context.fillStyle = "black";
        context.lineTo(600,0);
        context.lineTo(600,600);
        context.lineTo(0,600);
        context.lineTo(0,0);
        context.fill();
        context.stroke();

        context.clearRect(dimtel[0],dimtel[1],dimtel[2],dimtel[3]);

        context.beginPath();
        context.fillStyle ="black";
        context.arc(dimtrou[0],dimtrou[1],25,Math.PI,1.5 * Math.PI);
        context.lineTo(225,100);
        context.arc(dimtrou[2],dimtrou[1],25,1.5 * Math.PI,0);
        context.lineTo(275,175);
        context.arc(dimtrou[2],dimtrou[3],25,0,0.5*Math.PI);
        context.lineTo(200,225);
        context.arc(dimtrou[0],dimtrou[3],25,0.5*Math.PI, Math.PI);
        context.lineTo(150,125);
        context.fill();
        context.stroke();
}}})

/*
function Monter() { //ok
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let contenu_models={};
let contenu_marques={};
let contenu_promo={};
let contenu_panier={};

fetch('Models.json')
.then(function(response){
    return response.json();
})
.then(function(json){
    let contenu_marques=json["marques"];
    let contenu_models=json["models"];
    let contenu_promo=json["Code Promo"];
    let contenu_panier=json["Paniertest"];

    let tempmarque = document.querySelector("#marques");
    if(tempmarque===null, false){
    for(const i of contenu_marques){
      let clone = document.importNode(tempmarque.content, true);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, i.image)
        .replace(/{{id}}/g, i.id)   
        .replace(/{{name}}/g, i.name)
      clone.firstElementChild.innerHTML = newContent
      document.body.appendChild(clone);}}





    let temppanier = document.querySelector("#article");
    for(const i of contenu_panier){
      let clone = document.importNode(temppanier.content, true);

      newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, i.image)
        .replace(/{{name}}/g, i.name)
      clone.firstElementChild.innerHTML = newContent
      console.log(clone)
      document.getElementById('Panier').appendChild(clone);}






      let tempdetail = document.querySelector("#detailarticle");
      for(const i of contenu_panier){
        let clone = document.importNode(tempdetail.content, true);
        newContent = clone.firstElementChild.innerHTML
          .replace(/{{name}}/g, i.name)
      .replace(/{{nombre}}/g, i.nombre)
        clone.firstElementChild.innerHTML = newContent
        console.log(clone)
        document.getElementById('Detail').appendChild(clone);}
})*/


/* bandeau défilant *//*
var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
*/
  /*contact*//*
  function showElement() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
*/



/* Script pour la page Personnalisation */

/*
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}*/