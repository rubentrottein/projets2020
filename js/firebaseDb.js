/*********************FireBase***************/
/*The core Firebase JS SDK is always required and must be listed first
        
    *see Script markup*
*/

/* 
TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries
*/

var firebaseConfig = {
    apiKey: "AIzaSyApGDy7WUvtwjaDVKsr4edIOU2nvwUwQdg",
    authDomain: "timerapp-da1b8.firebaseapp.com",
    databaseURL: "https://timerapp-da1b8.firebaseio.com",
    projectId: "timerapp-da1b8",
    storageBucket: "timerapp-da1b8.appspot.com",
    messagingSenderId: "332050072763",
    appId: "1:332050072763:web:5eacc9b3b8bf54210bd59e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*************Controleur***************
var timerDb = firebase.database(timersapp-da1b8);
console.log("Firebase renvoie \n" + timerDb);
/*end*/