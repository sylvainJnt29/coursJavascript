//                                      Mini projet, application météo

// 579312f580220b5f3410d8b740f52076 => clé api


let ville = "Paris";
recevoirTemperature(ville)


let changerVille = document.querySelector('#changer');
changerVille.addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez-vous voir');
    recevoirTemperature(ville);
});


function recevoirTemperature(ville){
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
            + ville + '&appid=579312f580220b5f3410d8b740f52076&units=metric';



    // Création de la requête :
    let requete = new XMLHttpRequest();
    requete.open('GET',url);
    requete.responseType = 'json';
    requete.send();

    // Exécution de la fonction :
    requete.onload = function(){
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } else {
                alert("Une erreur est survenue, veuillez réessayer plus tard !");
            }
        }
    }
}




