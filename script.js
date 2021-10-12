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

function Apple(){
    document.getElementsByClassName('grillemarques').style.display='none';
    document.getElementsById('Huawei').style.display='none';
    document.getElementsById('Samsung').style.display='none';
    document.getElementById('Applemodels').style.display = 'block';
    document.getElementById('Huaweimodels').style.display = 'none';
    document.getElementById('Samsungmodels').style.display = 'none';    
}

function Huawei(){
    document.getElementsById('Apple').style.display='none';
    document.getElementsById('Huawei').style.display='none';
    document.getElementsById('Samsung').style.display='none';
    document.getElementById('Applemodels').style.display = 'none';
    document.getElementById('Huaweimodels').style.display = 'block';
    document.getElementById('Samsungmodels').style.display = 'none';    
}

function Samsung(){
    document.getElementsById('Apple').style.display='none';
    document.getElementsById('Huawei').style.display='none';
    document.getElementsById('Samsung').style.display='none';
    document.getElementById('Applemodels').style.display = 'none';
    document.getElementById('Huaweimodels').style.display = 'none';
    document.getElementById('Samsungmodels').style.display = 'block';    
}

/* Script pour la page Contact */

/* Script pour la page Contenu de la commande*/

var A1

function calculPrix(){

    var total = ()

    document.getElementById("Total").value=total;
}

/* Script pour la page Personnalisation */