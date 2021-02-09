//                                      Les dates

/*
// 1er Janvier 1970 à minuit UTC ( heure de Londres ).

let dateActuelle = Date();
console.log(dateActuelle); // norme anglo-saxonne.

let dateEnSecondes = Date.now();
console.log(dateEnSecondes);


let datePrecise = new Date(2021,01,08,21,14);
// Les mois commencent à zéro.
console.log(datePrecise);
*/

/*
let dateActuelle = new Date();

console.log(dateActuelle.getFullYear());

console.log(dateActuelle.getDay()); // jour de la semaine, qui commence à partir de dimanche à l'index 0 !

console.log(dateActuelle.getDate()); // jour d'aujourd'hui.

//  Les setters :

dateActuelle.setMonth(08);

console.log(dateActuelle.getMonth());

console.log(dateActuelle.getUTCDay());

*/


// Format local :

/*

let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année.
// toLocaleTimeString = l'heure.
// toLocaleDateString = jour, mois, l'année, l'heure.
// On choisi selon les besoins.


console.log(navigator.language);

let dateLocale = dateActuelle.toLocaleString('fr-FR',{
    weekday: 'long', // short (3 1eres lettres), narrow(1ere lettre), long (toutes les lettres.)
    year: 'numeric', // numeric (xxxx), 2-digit (xx).
    month: 'long', // short (3 1eres lettres), narrow(1ere lettre), long (toutes les lettres.), numeric.
    day: 'numeric', // numeric (xxxx), 2-digit (xx).
    hour:'numeric',
    minute:'numeric',
    seconde:'numeric'
});

alert(dateLocale);

*/

// Les templates string


// Avant :
/*
let prenom = "John";
let bonjour = "Bonjour " + prenom;
console.log(bonjour);
*/

// Maintenant :
let prenom = "John";
let bonjour = `Bonjour ${prenom}.`;
console.log(bonjour);

// Avec les dates :
let date = new Date().getUTCFullYear();
let copyright = `${date} © Sylvain Janot`;
console.log(copyright);

// Les calculs :
let aliments = {fruits: 5,legumes: 1,biscuits: 75}
let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles.`;
console.log(panier);
