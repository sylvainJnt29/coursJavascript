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