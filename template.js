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
})


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


const input = document.querySelector('input');
const texte = document.getElementById('texte');

input.addEventListener('change', updateValue);

function updateValue(e) {
  texte.textContent = e.target.value;