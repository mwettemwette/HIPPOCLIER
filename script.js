/* Script pour toutes les pages */

fetch("header.html") //ok
.then(contenu => contenu.text())
.then(texte => {
    document.getElementById("header").innerHTML = texte;
})

fetch("footer.html") //ok
.then(contenu => contenu.text())
.then(texte => {
    document.getElementById("footer").innerHTML = texte;
})

var mybutton = document.getElementById("fleche");  //ok 
window.onscroll = function() {popfleche()};

function popfleche() { //ok
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function Monter() { //ok
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Script pour la page Principale (peut être réutilisé)*/

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

    let template1 = document.querySelector("#marques");
    if (template1 != null){
    for(const i of contenu_marques){
      let clone = document.importNode(template1.content, true);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{function}}/g, i.function)
        .replace(/{{image}}/g, i.image)
        .replace(/{{id}}/g, i.id)   
        .replace(/{{name}}/g, i.name)
        .replace(/{{prix}}/g, i.prix)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('grillemarques').appendChild(clone);}}

    let template2 = document.querySelector("#modeles");
    if (template2 != null){
    for(const i of contenu_models){
      let clone = document.importNode(template2.content, true);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{marque}}/g, i.marque)
        .replace(/{{image}}/g, i.image)
        .replace(/{{lien}}/g, i.lien)
        .replace(/{{id}}/g, i.id)
        .replace(/{{name}}/g, i.name)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('grillemodels').appendChild(clone);}}


    let temppanier = document.querySelector("#article");
    if (temppanier != null){
    for(const i of contenu_panier){
      let clone = document.importNode(temppanier.content, true);

      newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, i.image)
        .replace(/{{name}}/g, i.name)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('Panier').appendChild(clone);}}
    

    let tempdetail = document.querySelector("#detailarticle");
    if (tempdetail != null){
    for(const i of contenu_panier){
      let clone = document.importNode(tempdetail.content, true);
      let result = calculprix(i.nombre,i.prix);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{name}}/g, i.name)
        .replace(/{{nombre}}/g, i.nombre)
        .replace(/{{prix}}/g,i.prix)
        .replace(/{{result}}/g,result)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('Detail').appendChild(clone);}}
})


function waw(oui){
  var elems = document.getElementsByClassName(oui);
  var ret = document.getElementsByClassName('Retour');
  var models = document.getElementById('grillemodels');
  for (k = 0; k < models.childElementCount; k++) {
    var model = models.children[k].children;
    model[0].style.display = 'none';
  }
  ret[0].style.display='block';
  for (i = 0; i < elems.length; i++) {
    var elem = elems[i];
    elem.style.display = 'block';
  }
  window.scrollBy(0, 750);
}

function Retour(){
  var models = document.getElementById('grillemodels');
  for (k = 0; k < models.childElementCount; k++) {
    var model = models.children[k].children;
    model[0].style.display = 'none';
  }
}

/* Script pour la page Contact */

/*
  function showElement() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
*/


/* Script pour la page Contenu de la commande*/

var PrixPanier =0 , PrixLiv =0 , PrixTotal=0, PrixExp =0;
x = document.getElementById('PrixPanier');
x.innerHTML = PrixPanier;
y = document.getElementById('PrixLiv');
y.innerHTML = PrixLiv;
z = document.getElementById('PrixTotal');
z.innerHTML = PrixTotal;

fetch('Models.json')
.then(function(response){
    return response.json();})
.then(function(json){
    let contenu_panier=json["Paniertest"];
    let PrixPanier=0;
    if (contenu_panier != null){
      for(const i of contenu_panier){
        PrixPanier = PrixPanier + calculprix(i.nombre,i.prix);}
      x = document.getElementById('PrixPanier')
      x.innerHTML = PrixPanier;
}})

function calculDate(date1) {
  valRen = false;
  PrixExp = 0;
  date2f = new Date();
  date2 = date2f.toISOString().split("T")[0];
  date1 = date1.split("-");
  date2 = date2.split("-");
  if(parseInt(date1[0]) <= parseInt(date2[0])){
    if(parseInt(date1[1]) <= parseInt(date2[1])){
      if(Math.abs(parseInt(date2[2]) - parseInt(date1[2])) <= 3){
        valRen = true;
        PrixExp = 8;}
  x = document.getElementById('PrixLiv');
  x.innerHTML = PrixLiv + PrixExp;
}}}

function calculPrixLiv(adresse){
  
}

function calculprix(nbr,prix){
  let result = nbr * prix;
  return result;
}

var placeSearch, autocomplete;
var componentForm = {
  adresse: 'long_name',
  ville: 'long_name',
  cp: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('adresse')),
      {types: ['geocode']});
  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress());
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  for (var component in componentForm) {
    document.getElementById(component).value = '';}
  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
      console.log(addressType)
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocalisation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log(geolocation)
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}


/* Script pour la page Contact */

/*
function toggleElement(bouton) {
  document.querySelectorAll("[data-num]").forEach(function(el) {
    el.style.display = 'none'
  })

  let div = document.querySelector("[data-num='" + bouton.dataset.numbtn + "']")
  div.style.display = 'block'

  // var x = document.getElementById("myDIV");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

*/

/* Script pour la page Contenu de la commande*/







/* Script pour la page Personnalisation */
/*
toggleElement();*/