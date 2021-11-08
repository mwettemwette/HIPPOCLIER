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

function prixItem(){
  let id_item = new URLSearchParams(window.location.search).get("id")
  let quantité = document.getElementById("qte").value;
  var code= id_item.charAt(0);
  let solidité = document.getElementById("solid").value;
  if (solidité == "maximale") {
    supp= 10;
  }
  else if (solidité == "élevé") {
    supp = 5;
  }
  else {
    supp = 0;
  }

  if (code == '1') {
    prixUnite = 30;
  }
  else if (code == '2') {
    prixUnite = 25;
  }
  else {
    prixUnite = 20;
  }
  let prixFinal = (prixUnite + supp)*quantité
  document.getElementById("PrixArticle").innerHTML = prixFinal
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

var Reduc=0, PrixLiv=0, PrixPanier=0, PrixTotal=0,PrixFinal=0,PrixExp=0;
if(Reduc!=0){
  var x = document.getElementById('promotion');
  x.style.display = 'block';
};

fetch('Models.json')
.then(function(response){
    return response.json();})
.then(function(json){
    let contenu_panier=json["Paniertest"];
    var PrixPanier=0, PrixTotal=0,PrixFinal=0;
    if (contenu_panier != null){
      for(const i of contenu_panier){
        PrixPanier = PrixPanier + calculprix(i.nombre,i.prix);}
      PL = document.getElementById('PrixLiv');
      PL.innerHTML = PrixLiv;
      PP = document.getElementById('PrixPanier');
      PP.innerHTML = PrixPanier;
      PT = document.getElementById('PrixTotal');
      PT.innerHTML = PrixPanier;
      PF = document.getElementById('PrixFinal');
      PF.innerHTML = PrixPanier;}    
})

function calculDate(date1) {
  PrixExp = 0;
  PrixPanier = parseFloat(document.getElementById('PrixPanier').innerHTML);
  date2f = new Date();
  date2 = date2f.toISOString().split("T")[0];
  date1 = date1.split("-");
  date2 = date2.split("-");
  if(parseInt(date1[0]) <= parseInt(date2[0])){
    if(parseInt(date1[1]) <= parseInt(date2[1])){
      if(Math.abs(parseInt(date2[2]) - parseInt(date1[2])) <= 3){
        PrixExp = 8;}
        PL = document.getElementById('PrixLiv');
        PL.innerHTML = PrixLiv + PrixExp;
        PT = document.getElementById('PrixTotal')
        PT.innerHTML = PrixPanier + PrixLiv + PrixExp;
        PF = document.getElementById('PrixFinal');
        PF.innerHTML = PrixPanier + PrixLiv + PrixExp - Reduc;
}}}


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
  autocomplete.addListener('place_changed');
}


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocalisation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude}
        console.log(geolocation);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

function calculAdresse() {
  adress = document.getElementById("adresse").value;
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(adress)}.json?access_token=pk.eyJ1IjoibXdldHRlbXdldHRlIiwiYSI6ImNrdnBlNnBhajB5dGcydnFobHlsczZleG4ifQ.YIRv80xLOk0tglE0pqo6HQ`)
    .then(function(response){
      return response.json();})
    .then(function(json){
          coord = json.features[0].center;
          long=coord[0];
          lat=coord[1];
          fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${encodeURIComponent(long)},${encodeURIComponent(lat)};4.8117584,45.7710399?geometries=geojson&access_token=pk.eyJ1IjoibXdldHRlbXdldHRlIiwiYSI6ImNrdnBlNnBhajB5dGcydnFobHlsczZleG4ifQ.YIRv80xLOk0tglE0pqo6HQ`)
            .then(function(response2){
              return response2.json();})
            .then(function(json2){
                  distance = json2.routes[0].distance;
                  calculPrixLiv(distance);
      });
  });   
};

function calculPrixLiv(distance){
  PrixTotal = parseFloat(document.getElementById('PrixTotal').innerHTML);
  
  if(distance>20000){
    PrixDist = 5 + 0.07 * distance/1000;
    PrixLiv = Math.round(PrixDist)+PrixLiv;
  }else{
    PrixLiv = 0;
  }
  PL = document.getElementById('PrixLiv');
  PL.innerHTML = PrixLiv + PrixExp;
  PT = document.getElementById('PrixTotal')
  PT.innerHTML = PrixTotal + PrixLiv + PrixExp;
  PF = document.getElementById('PrixFinal');
  PF.innerHTML = PrixTotal + PrixLiv + PrixExp - Reduc;
}





/* Script pour la page Contact */


/*function toggleElement(bouton) {
  document.querySelectorAll("[data-num]").forEach(function(el) {
    el.style.display = 'none'
  })

  let div = document.querySelector("[data-num='" + bouton.dataset.numbtn + "']")
  div.style.display = 'block'

  var x = document.getElementById("myDIV");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
}

/*
const input = document.querySelector('input');
const texte = document.getElementById('texte');

input.addEventListener('change', updateValue);

function updateValue(e) {
  texte.textContent = e.target.value;
}*/

/* Script pour la page Personnalisation*/


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
        var test = document.getElementById('canvas');
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




