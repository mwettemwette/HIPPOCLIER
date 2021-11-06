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
/* Script pour la page Contact */


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



/* Script pour la page Contenu de la commande*/







/* Script pour la page Personnalisation */

toggleElement();