// Cours Udemy "Javascript la formation ultime de Louis Nicolas Leuillet"
// Commencé le 05/01 - SJ

//                                          EXERCICE 1
/*
function abracadabra () {
    let prenom = prompt("Quel est votre prénom ? ");
    let nom = prompt("Quel est votre nom ? ");
    let age = prompt("Quel est votre âge ? ");
    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
     + prenom 
     + " ! Euh... Je veux dire ... Monsieur le grand magicien " 
     + nom 
     + " ! Cela fait déjà " 
     + age 
    + " ans que vous faites rayonner notre contrée !");
  }

abracadabra();
*/

//                                      EXERCICE 2

/*
function calculerIMC(poids,taille){
    // calculer la taille en mètres
    let tailleEnMetres = taille / 100;
    let tailleCalculee = Math.pow(tailleEnMetres,2);
    let resultat = poids / tailleCalculee;
    return resultat;
}

let poids = prompt("Veuillez saisir votre poids (en KG) :");
let taille = prompt("Veuillez saisir votre taille (en CM) :");


alert(calculerIMC(poids, taille));
*/

//                    EXERCICE 3 ( recursivité )
/*
function somme(nombre){
  if(nombre == 1){
      return 1;
  }
  return nombre + somme(nombre - 1);
}

console.log(somme(3));
*/


//                    EXERCICE 4 ( faire un timer )

/*
let button   = document.querySelector('button');
let secondes = 10;
let intervalle = 0;


function start(){
  setInterval(decompte(),1000);
  alert
}

function decompte(secondes){
  setInterval(secondes--,10000);
  alert(Number(secondes));
  if(secondes === 0){
    stop();
  }
}

function stop(){
  clearInterval();
  alert("STOP !");
}

button.addEventListener('click', () =>{
  start();
});
*/

/*
// correction
let button   = document.querySelector('button');
let interval;
let secondes = 10;

function start(){
  interval = setInterval(decompte,1000);
}

function decompte(){
  secondes--;
  if(secondes == 0){
    stop();
  } else {
    document.body.innerHTML += secondes + '<br>'; 
  }
}

function stop(){
  clearInterval(interval);
  document.body.innerHTML += "STOP !"; // On rajoute à la suite de la page
}

button.addEventListener('click', start);
*/

//                    Exercice 5 ( faire un boutton spoiler )

let button = document.querySelector('button');
let texte = document.querySelector('div');
let hidden = true;

texte.style="visibility:hidden";

button.addEventListener('click', () => {

  if(hidden){
    button.innerHTML = ("Cacher");
    texte.style="visibility:visible";
    hidden=false;
  } else  {
    button.innerHTML = ("Afficher");
    texte.style="visibility:hidden";
    hidden=true;
  }

});