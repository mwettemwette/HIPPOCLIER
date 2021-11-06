/* Script pour toutes les pages */

fetch("header.html")
.then(contenu => contenu.text())
.then(texte => {
    document.getElementById("header").innerHTML = texte;
})

fetch("footer.html")
.then(contenu => contenu.text())
.then(texte => {
    document.getElementById("footer").innerHTML = texte;
})

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
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{name}}/g, i.name)
        .replace(/{{nombre}}/g, i.nombre)
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

function calculDate(date1) {
    valRen = false;

    date2f = new Date();
    date2 = date2f.toISOString().split("T")[0];

    date1 = date1.split("-");
    date2 = date2.split("-");

    if(parseInt(date1[0]) <= parseInt(date2[0])){
        if(parseInt(date1[1]) <= parseInt(date2[1])){
            if(Math.abs(parseInt(date2[2]) - parseInt(date1[2])) <= 3){
                valRen = true;
            }
        }
    }
    return valRen;
}



/* Script pour la page Personnalisation */
