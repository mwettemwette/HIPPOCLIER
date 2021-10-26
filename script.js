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

function showImage(imageId) {
    document.getElementById(imageId).style.display='block';
}

function hideImage(imageId) {
    document.getElementById(imageId).style.display='none';
}

function Retour(){
    showImage('Apple');
    showImage('Huawei');
    showImage('Samsung');
    hideImage('grillemodels');
}

let contenu_models={};
let contenu_marques={};
let contenu_promo={};

fetch('Models.json')
.then(function(response){
    return response.json();
})
.then(function(json){
    let contenu_marques=json["marques"];
    let contenu_models=json["models"];
    let contenu_promo=json["Code Promo"];

    let template1 = document.querySelector("#marques");
    for(const i of contenu_marques){
      let clone = document.importNode(template1.content, true);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, i.image)
        .replace(/{{id}}/g, i.id)   
        .replace(/{{name}}/g, i.name)
        .replace(/{{prix}}/g, i.prix)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('grillemarques').appendChild(clone);}

    let template2 = document.querySelector("#modeles");
    for(const i of contenu_models){
      let clone = document.importNode(template2.content, true);
      newContent = clone.firstElementChild.innerHTML
        .replace(/{{marque}}/g, i.marque)
        .replace(/{{image}}/g, i.image)
        .replace(/{{lien}}/g, i.lien)
        .replace(/{{id}}/g, i.id)
        .replace(/{{name}}/g, i.name)
      clone.firstElementChild.innerHTML = newContent
      document.getElementById('grillemodels').appendChild(clone);
  }
})


/* Script pour la page Contact */


  function showElement() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

/* Script pour la page Contenu de la commande*/

function calculDate(date1) {
    valRen = false;

    date2f = new Date();
    date2 = date2f.toISOString().split("T")[0];

    date1 = date1.split("-");
    date2 = date2.split("-");

    console.log(date1, date2)

    if(parseInt(date1[0]) <= parseInt(date2[0])){
        if(parseInt(date1[1]) <= parseInt(date2[1])){
            if(Math.abs(parseInt(date2[2]) - parseInt(date1[2])) <= 3){
                valRen = true;
            }
        }
        
    }
    console.log(valRen);
    return valRen;
}



/* Script pour la page Personnalisation */
