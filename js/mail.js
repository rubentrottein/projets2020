document.getElementById("mailSender").addEventListener('click', sendMail);
function sendMail(){
    let message = prompt("Votre message");
    document.getElementById("mailSender").innerHTML = message;
    document.getElementById("submit").href = "'mailto:ruben.trottein@gmail.com?&subject=Mail Depuis CV2&body='"+ message +"'";
}