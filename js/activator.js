let rubriques=["plafonds","acre","chomage","avantages","pj", "actu"];
let listes=["janvier","novembreA","novembreB","ASAP","Court_Terme","Long_Terme", "Autres-notes", "test"];
let addElement      = document.getElementById("addElement");
let indexRubriques  = document.getElementById("indexRubriques");
let indexListes     = document.getElementById("indexListes");
let monitor         = document.getElementById("monitor");
let newElement;


addElement.addEventListener("click", addArticle);
monitor.innerHTML = document.cookie;

/**************Menu Dynamique autour de l'array Rubriques ***********/
function refreshMenu(menu){
    this.menu = menu;
    switch (menu) {
        case 'rubriques': 
        console.log("rubriques");
        indexRubriques.innerHTML =``;
        for (let i=0; i<rubriques.length; i++){
            indexRubriques.innerHTML +=`<a href='#'`+ rubriques[i] + `><li id=`+ rubriques[i] + `Tr>`+ rubriques[i] + `</li></a>`;
        }
        break;
        case 'listes' :
        console.log("order: fetch listes");

        indexListes.innerHTML =``;
        for (let i=0; i<listes.length; i++){
            indexListes.innerHTML +=`<a href='#'`+ listes[i] + `><li id=`+ listes[i] + listes[i].replace('_', ' ', '-','/') + `</li></a>`;
        }
    break;
    }
}
indexListes ? refreshMenu('listes') : refreshMenu('rubriques');
if (indexListes){
    console.log("order: refresh listes");
    refreshMenu('listes');
} else {
    console.log("rubrique");
    refreshMenu('rubriques');
}

if (indexRubriques){
    for (let i=0; i<rubriques.length; i++){
        let rubrique;
        rubrique = document.getElementById(rubriques[i] + "Tr");
        rubrique.addEventListener("click", function(){ 
            setActive(rubriques[i], rubriques);
        })
    }
} else {
    for (let i=0; i<listes.length; i++){
        console.log(listes[i]);
        let liste = document.getElementById(listes[i]);
        liste.addEventListener("click", function(){ 
            setActive(listes[i], listes);-
        })
    }
}

function setActive(element,menu){
    this.element = element;
    this.menu = menu;
    for (let i=0; i<menu.length; i++){
        if (menu[i] === element){
            document.getElementById(element).classList.add("active");
            document.getElementById(element + 'Tr').classList.add("selected");
        } else {
            document.getElementById(menu[i]).classList.remove("active");
            document.getElementById(menu[i] + 'Tr').classList.remove("selected");
        }
    }
}
/************ Ajout de Rubriques avec un paragraphe dedans *************/

function addArticle(){
    console.log("Add Element");
    newElement= "added"+rubriques.length;
    rubriques.push(prompt("Rubrique à Ajouter"));
    var newArticle = document.createElement("article");
    var newContent = document.createTextNode("<h3>"+ prompt("titre de la rubrique") + "</h3><p>" + prompt("contenu de la rubrique") + "</p>");
    newArticle.appendChild(newContent);
    newArticle.setAttribute("id", newElement);
    document.cookie = newElement + "=" + newContent + ";path=/;";
    refreshMenu();
}

//document.getElementById(newElement).innerHTML += "Récupéré! ATTENTION TEXT";
/***
 * 
 * Foxtrot Whiskey Hotel Mike Sierra
 */