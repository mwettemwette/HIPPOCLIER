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
    hideImage('Applemodels');
    hideImage('Huaweimodels');
    hideImage('Samsungmodels');
}


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







/* Script pour la page Personnalisation */
