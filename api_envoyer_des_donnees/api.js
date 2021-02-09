//                                      Utilisation d'une API pour Envoyer des données 

const url = "https://lesoublisdelinfo.com/api.php";

let requete = new XMLHttpRequest();

// GET
// requete.open('GET',url);
// requete.responseType = 'json';
// requete.send();

// POST
requete.open('POST',url);
requete.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
requete.responseType = 'json';
requete.send('prenom=John');

requete.onload = function () {
    if ( requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
        } else {
            alert("Un prolème est survenu, merci de revenir plus tard.");
        }
    }
}