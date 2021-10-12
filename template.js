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