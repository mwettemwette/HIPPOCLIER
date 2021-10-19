let models = {};

fetch('Models.json')
.then(function(response){
    return response.json();
})

.then(function(Models){
    console.log(Models["modele"]["marque"]["lien"]["image"]);

    models = Models;
})



let template = document.querySelector("#listemodels");

for (const m of models) {
    let clone = document.importNode(template.Content, true);

    newContent = clone.firstElementChild.innerHTML
        .replace(/{{model}}/g, m.model)
        .replace(/{{lien}}/g, m.lien)
        .replace(/{{image}}/g, m.image);
    
    clone.firstElementChild.innerHTML = newContent

    document.body.appendChild(clone)

}



/* bandeau défilant */
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

  /*contact*/
  function showElement() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
