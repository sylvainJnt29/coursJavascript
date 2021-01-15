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

