// Créer un cookie
document.cookie = 'prenom=John';

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = 'prenom=Jack';

// Supprimer un cookie
document.cookie = 'prenom=';

// Options
document.cookie = 'prenom=John; path=/admin';

document.cookie = 'prenom=John; path=/admin; domain=exemplededomain.com';

let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie = 'prenom=John; path=/admin; domain=exemplededomain.com;expires=' + date;
// OU
document.cookie = 'prenom=John; path=/admin; domain=exemplededomain.com;max-age=315360000000';

document.cookie = 'prenom=John; path=/admin; domain=exemplededomain.com;max-age=315360000000;secure'; // sur les sites https


//                                      localStorage et sessionStorage

// localStorage = stcké dans le navigateur même après fermeture.
// sessionStorage = Stocké pendant la session.

// setItem([clé],[valeur]) / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clef située à l'index donné
// length : obtenir le nombre d'éléments stockés.

if(localStorage.getItem('prenom')){
    document.body.append("Bonjour " + localStorage.getItem('prenom'));
} else {
    let prenom = prompt("Quel est votre prénom ?");
    localStorage.setItem('prenom',prenom);
    document.body.append('Bonjour '+ prenom);
}

//localStorage.clear();



