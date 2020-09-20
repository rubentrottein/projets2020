var nbTimers=3;
var timerTitle = document.getElementsByTagName("h2");
for (i=0;i<=nbTimers;i++){
    let currentArticle = document.getElementsByTagName("article")[i];
    currentArticle.innerHTML = "<p><button id='startTimer"+ i +"'>Start counter "+ i +"</button><button id='stopTimer" + i + "'>Stop counter " + i + "</button></p><aside>Fin de la tâche dans <i><span id='hourDisplay" + i + "'></span> ' <span id='minutesDisplay"+ i +"'></span> '' <span id='secondsDisplay"+ i +"'></span></i></aside>";
}
/***Impossible de boucler sur les listener. A check*
for (i=0;i<=nbTimers;i++){
    document.getElementById("startTimer"+i).addEventListener("click", timer);
}
/*Listeners Lineaires */
document.getElementsByTagName("button")[2].addEventListener("mouseDown", function(){clearInterval(timer(0,1))});
document.getElementsByTagName("button")[3].addEventListener("mouseDown", function(){timer(1,2)});
document.getElementsByTagName("button")[4].addEventListener("mouseDown", function(){timer(2,2)});
document.getElementsByTagName("button")[5].addEventListener("mouseDown", function(){timer(3,1)});

function timer(el,duration) {
    
    console.log("initial parameters =\n el : " + el + " \n duration :" + duration);
    //Variables Initialisation
    var duraMinutes = 59;
    var duraSeconds = 59;
    var totDuration = duration;
    duration = duration-1;
    
    console.log("initial duration = " + duration + ":" + duraMinutes + ":" + duraSeconds);

    //Timers Display
    
    //document.getElementById("hourDisplay"+el).innerHTML = duration;
    //document.getElementById("minutesDisplay"+el).innerHTML = duraMinutes;
    //document.getElementById("secondsDisplay"+el).innerHTML = duraSeconds;

    var hourDisplay = document.getElementsByTagName("span")[el];
    var minuteDisplay = document.getElementsByTagName("span")[el+1];
    var secondDisplay = document.getElementsByTagName("span")[el+2];
    
    hourDisplay.innerHTML = duration;
    minuteDisplay.innerHTML = duraMinutes;
    secondDisplay.innerHTML = duraSeconds;

    //Launch Timers

    tSeconds = setInterval(cSeconds, 1000);

    //Timers Management

    function cSeconds(){
        if (duration === -1){
            clearInterval(tSeconds);
            alert(timerTitle[el].textContent + " Done");
            monitor.innerHTML +="<p>Une session de " + timerTitle[el].textContent + " de " + totDuration + " Heure(s) effectuée<hr></p>";
        }
        if (duraSeconds<=10){
            secondDisplay.innerHTML = "0"+ --duraSeconds;
        } else if (duraMinutes<=10){
            minuteDisplay.innerHTML = "0"+ --duraMinutes;
        } else {
            secondDisplay.innerHTML = --duraSeconds;
        }
        if (duraMinutes===0){
            clearInterval(cSeconds);
            duraSeconds = 60;
            hourDisplay.innerHTML = --duration;
        }
        if (duraSeconds===0){
            clearInterval(cSeconds);
            duraSeconds = 60;
            minuteDisplay.innerHTML = --duraMinutes
        }
    }
}