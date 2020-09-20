//Timer de base: lancer, arrêter, 5sec
var myTimer;
function clock() {
    //initialisation de la seconde
    myTimer = setInterval(myClock, 1000);
    //durée de lintervalle
    var c = 5;

    function myClock() {
        //décrémenter le chiffre chaque 1000ms
        document.getElementById("demo").innerHTML = --c;
        //arrêter le timer quand il atteint 0
        if (c == 0) {
            clearInterval(myTimer);
            alert("Reached zero");
        }
    }
}
/*************Test *******/
    //Constructeur objets Task
var Task = function(id, name, time){
    this.id=id,
    this.name=name,
    this.time=time
};

    //Taches de base
var maintenance= new Task(0,"Maintenance",2);
var formation= new Task(1,"Formation",1);
var projets= new Task(2,"Projets",2);
var administration= new Task(3,"Administration",1);
var demo= new Task(4,"Démo",3);
    //array d'objets Task et enregistrement
var taskTable = [];
taskTable.push(maintenance);
taskTable.push(formation);
taskTable.push(projets);
taskTable.push(administration);
taskTable.push(demo);

var objectApp = document.getElementById('objectApp');
for(i=0;i<=nbTimers;i++){
    var task = taskTable[i];
    objectApp.innerHTML += "<h2>" + task.name + "</h2>";
    objectApp.innerHTML += "<article><p><button id='startTimer"+ i +"'>Démarrer tâche: "+ task.name +"</button><button id='stopTimer" + i + "'>Pause</button></p><aside>Fin de la tâche dans <i id='timer" + i + "'>" + taskTable[i].time + "</i> secondes</aside></article>";
    let timerStarter = document.getElementById("startTimer"+i);timerStarter.addEventListener("click", function(){timer(i);});
}

/****End*****/