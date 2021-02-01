//                                      DOM (Document Object Model)

/* Premieres manipulations
let header = document.getElementsByTagName("header");
let logo = document.getElementById("logo");
let container = document.getElementsByClassName("container");
let h1 = document.querySelector("h1");// recupere une balise
//let h1 = document.querySelector("#h1");// recupere un id
//let h1 = document.querySelector(".h1");// recupere une class
let p = document.querySelectorAll("p");


console.log(header);
console.log(logo);
console.log(container);
console.log(h1);
console.log(p);
*/

//                                      Modifier le DOM
/*
let h1 = document.querySelector("h1");
h1.textContent = "Hello World !";
h1.innerHTML = "<div style='font-weight: normal'>Hello World !</div>";
console.log(h1);
*/
// Pour aller plus loin
// https://developer.mozilla.org/fr/docs/Web/API/Element


//                                      Ajouter des elements au DOM

/*
// 1ere methode : ecrit juste un texte
document.write('test');

// 2 eme methode : ajouter un element brut
let h1 = document.querySelector('h1');
h1.append(' test');

// 3 eme methode : celle pour les objets
// Creer un element
let helloWorld = document.createElement('div');
// Le personnaliser
helloWorld.textContent = "Hello world !!";
// L'ajouter a la page
// document.body.append(helloWorld); (apres)
// document.body.appendChild(helloWorld); (apres)

// document.body.insertBefore(helloWorld,
// document.querySelector('.container'));

document.querySelector('.container').prepend(helloWorld);
*/


//                                      Supprimer un element du DOM


// let h1 = document.querySelector('h1');
// h1.remove();

// document.querySelector('h1').remove();


//                                      Modification du style

/*
// 1ere methode : decomposee
let header = document.querySelector('header');
header.style.backgroundColor = '#ffbf69';
header.style.margin = '5%';

// 2eme methode : directe
document.querySelector('h1').style.color = "#111d5e";
document.querySelector('h1').style.textAlign = "center";

// 3eme methode : avec une classe
document.querySelector('header').className = "ma_class";
*/

//                                      Exercice : Modifications sans toucher au HTML ni CSS

// A FAIRE

// Supprimer le div avec l'id #a-supprimer
document.getElementById('a-supprimer').remove();

// Créer un header
// Créer un sous-header
// Créer un paragraphe

let header     = document.createElement('header');
let sousHeader = document.createElement('div');
let paragraphe = document.createElement('p');


header.textContent = "Bienvenue";
header.style.backgroundColor = '#e3b04b';
header.style.padding = '30px';
header.style.fontSize = '3em';
header.style.textAlign = "center";
// document.body.append(header);

sousHeader.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>";
sousHeader.style.backgroundColor = '#f1d6ab';
sousHeader.style.padding = '15px';
// document.body.append(sousHeader);

paragraphe.innerHTML = "Ceci est un paragraphe créé avec Javascript !<hr>\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\
    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\
    sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur\
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\
    mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est \
    laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
    .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur \
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\
    est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu \
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
    qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur\
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\
    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea";
paragraphe.style.margin = '15px';
document.body.append(header,sousHeader,paragraphe);
