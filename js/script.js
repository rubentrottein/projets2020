var static  = document.getElementById("static");
var dynamic = document.getElementById("dynamic");
var section = document.getElementsByTagName('section');
static.addEventListener("click", function(){displayApp(1,2);});
dynamic.addEventListener("click", function(){displayApp(2,1);});
function displayApp(displayedApp,vanishApp){
        section[displayedApp].style.display = "block";
        section[vanishApp].style.display = "none";
        section[3].style.color = "orange";
        document.getElementById("id").innerHTML = "displayed App is " + displayedApp + ", vanished App is " + vanishApp;
}