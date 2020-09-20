var deployed = false;
var first = true;
var act = document.getElementById("actFoot");
var act2 = document.getElementById("actFoot2");
var iframe = document.getElementById("music");
act.addEventListener("click",function(){deploy(music);});
act2.addEventListener("click",function(){deploy(music2);});

//Stockez L'iframe désiré dans cette variable
var music = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dKizWyC1ltc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
var music2 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7JRIKL54KiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

function deploy(music){
    if (deployed === false && first===true){
        iframe.style.display = "block";
        act.innerHTML = "Masquer";
        iframe.innerHTML = music;
        deployed = true;
        first = false;
    } else if (deployed === false && first===false){
        act.innerHTML = "Masquer";
        iframe.style.display = "block";
        deployed = true;
    } else {
        act.innerHTML = "Afficher Lecteur";
        iframe.style.display = "none";
        deployed = false;
    }
}

/*Ajouter des contrôles directement accessibles(footer droit)*/
/*Ajouter un Loader pour changer l'iframe/le son*/