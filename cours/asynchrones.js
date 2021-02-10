//                                      Requêtes asynchrones, callacks et promises

/*
let i = 0;

console.log("Fonction commencée");

while(i < 9999999999){
    i++;
}

console.log("Fonction terminée");
*/

//                                      Les promesses

// En cours, honorée, rompue



/*
// const promesse = new Promise((resolve,reject) => {
//     //Tâches asynchrones

//     // Promesse honorée : resolve()

//     // Promesse rompue : reject()
// });

function chargerScript(script){
    return new Promise((resolve, reject) => {
        // Créer un élément
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        // Deux possibilités : resolve()
        element.onload = () =>  resolve('Fichier ' + script + ' a été chargé');

        // Ou reject()
        element.onerror = () =>  reject(new Error("Opération impossible pour le script " + script));

    });
}

// const promesse = chargerScript('test.js');

// promesse.then(
//     function(result){
//         console.log(result);
//     },
//     function(error){
//         console.log(error);
//     }
// );

chargerScript('test.js').catch(console.log);
*/

//                                      async et await

// = "sucres syntaxiques"


// async function direBonjour(){

//     const promesse = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Promesse tenue !'), 3000);
//     });

//     let resultat = await promesse;
//     console.log(resultat);

// }

// direBonjour();


function chargerScript(script){
    return new Promise((resolve, reject) => {
        // Créer un élément
        let element = document.createElement('script');
        element.src = script;
        document.head.append(element);

        // Deux possibilités : resolve()
        element.onload = () =>  resolve('Fichier ' + script + ' a été chargé');

        // Ou reject()
        element.onerror = () =>  reject(new Error("Opération impossible pour le script " + script));

    });
}

async function resultat() {
    try{
        const scriptA = await chargerScript('test.js');
        console.log(scriptA);
        const scriptB = await chargerScript('autre.js');
        console.log(scriptB);
    }
    catch(error){
        console.log(error);
        document.head.lastChild.remove();
    }
  }

  resultat();
