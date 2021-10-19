let contenu_models={};
let contenu_marques={};
let contenu_promo={};

fetch('Models.json')
.then(function(response){
    return response.json();
})
.then(function(json) {
    contenu_marques=json["marques"];
    contenu_models=json["models"];
    contenu_promo=json["Code Promo"];
});
console.log(contenu_models)
let template = document.querySelector("#modeles");
for(const i of contenu_models){
    let clone = document.importNode(template.content, true);
    console.log(clone)
    newContent = clone.children.innerHTML
        .replace(/{{marque}}/.g, contenu_models.marque)
        .replace(/{{image}}/.g, contenu_models.image)
        .replace(/{{lien}}/.g, contenu_models.lien)
        .replace(/{{id}}/.g, contenu_models.id)
        .replace(/{{name}}/.g, contenu_models.name);
    clone.children.innerHTML = newContent
    document.body.appendChild(clone);
};