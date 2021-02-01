//                                                      LES FONCTIONS
/*
function hello() {
    alert("Avé, oh, Utilisatus Adorus !");
}

hello()


// function addition(nombreUn, nombreDeux){
//     console.log(nombreUn+nombreDeux);
// }
// addition(5,2.5);

// function direBonjour(prenom){
//     alert("Bonjour " + prenom + "."); 
// }
// direBonjour("Antoine");

let cri = "Toujours plus bas !"; // variable globale

function criDeGuerre(){
    let cri = "Toujours plus fort !"; // variable locale
    // cri = "Toujours plus fort !"; 
    console.log(cri);
}
criDeGuerre();
console.log(cri);



let nombreUn = 4, nombreDeux = 7;

function addition(nombreA, nombreB){
    let result = nombreA + nombreB;
    // console.log(result); // affiche
    return result;
    console.log("test"); // Plus rien après un return
}
// console.log(addition(nombreUn,nombreDeux));

function division(nombreA, nombreB){
    let result = nombreA / nombreB;
    return result;
}

let resultatAddition = addition(nombreUn,nombreDeux);
let resultatDivision = division(nombreUn,nombreDeux);
console.log(resultatAddition * resultatDivision);


// let nombreUn = 4, nombreDeux = 7;

// function addition(nombreA, nombreB = 10){
//     let result = nombreA + nombreB;
//     return result;
// }
// function division(nombreA, nombreB){
//     let result = nombreA / nombreB;
//     return result;
// }
// console.log(addition(nombreUn));
// console.log(addition(nombreUn,nombreDeux));



function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15){
    let result = (nombreDeGateaux * (minutesDeCuisson + minutesDePreparation));
    
    return result;
}
//console.log(cuisiner(5));

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1,20);
console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);



function prevoirAge(){
    let reponse = prompt("Quel âge avez vous ?");
    // reponse = parseInt(reponse); // convertir en entier (sans les virgules)
    // reponse = parseFloat(reponse); // convertir avec les virgules
    //reponse = Number(reponse); // recommandée


    // nombre = 45;
    // nombreEnString = nombre + ""; // convertir en string en méthode barbare
    // nombreEnString = nombre.toString();




    alert("Bientôt vous aurez " + (reponse+1)  + " ans.");
}
prevoirAge();


//                                          FONCTIONS ANONYMES

// let fonctionAnonyme = function() {
//     console.log("Je suis une fonction anonyme");
// }
// fonctionAnonyme();

// (function() {console.log("Je suis une fonction anonyme")})();

*/

//                                      FONCTIONS FLECHEES

/*
// let maFonction = function(){
//     console.log("test");
// }

// maFonction();

// let maFonction = (parametre, autreParametre) => {
//     console.log("test");
// }

let maFonction = () => console.log("test");

maFonction();
*/

//                                      LES CLOSURES (FERMERTURES)
// Permet de sauvegarder une variable locale a l'interieur d'une fonction


/*
function bonjour(prenom){

    let resultat ="Bonjour " + prenom; // variable locale
    let maClosure = () => console.log(resultat);
    return maClosure;

}

function bonjour_bis(prenom){

    let resultat ="Bonjour " + prenom; // variable locale
    console.log(resultat);

}

let maFonction = bonjour('Sophie');
maFonction();

bonjour_bis("Marceau");

*/

/*
function timer(){
    let secondes = 0;

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure;
}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());
console.log(monTimer());
console.log(monTimer());

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer());
console.log(monTimer());
*/

