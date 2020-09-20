addEventListener('load', function(e) {
    document.querySelector('h1').innerHTML = 'Cheat Meals Picker!';
    document.getElementById("choice").addEventListener("click",function (){start("chocolat");});
    document.getElementById("choice0").addEventListener("click",function (){start("fromage");});
    document.getElementById("choice1").addEventListener("click",function (){start("biscuit");});

    var picks =['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
    var started = false;

    function start(item){
        function picker(){
            return Math.floor(Math.random() * Math.floor(picks.length));
        }
        var myTimer=setInterval(multipick,100);
        function multipick(){
            if (started===false){
                for (pick of picks){
                    document.getElementById("result").innerHTML = picks[picker()];
                }
            }else{
                clearInterval(myTimer);
                switch (item){
                    case "chocolat":
                        document.getElementById("result").innerHTML = picks[picker()];
                        document.getElementById("chocolat").innerHTML = document.getElementById("result").textContent;
                    break;
                    case "fromage":
                        document.getElementById("result").innerHTML = picks[picker()];
                        document.getElementById("fromage").innerHTML = document.getElementById("result").textContent;
                    break;
                    case "biscuit":
                        document.getElementById("result").innerHTML = picks[picker()];
                        document.getElementById("biscuit").innerHTML = document.getElementById("result").textContent;
                    break;
                }
            }
        }
        function stop(){
            if (started===false){started= true;}
        }
        document.getElementById("choice").addEventListener('click', stop);
        document.getElementById("choice").innerHTML = "Stop";
    }
});