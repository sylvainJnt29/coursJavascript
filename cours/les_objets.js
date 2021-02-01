//                                      Les objets


/*
let chien = {
    race : "Labrador",
    poil : "court",
    // aboyer : function(){
    //     console.log("wouf wouf");
    // }
    aboyer : () => console.log("Ouaf Ouaf")
}

// console.log("Le  " +chien.race + " à le poil " + chien.poil );

chien.aboyer();
*/

/*
let magicien = {
     attaquer: function(){
         console.log("Le magicien lance un sort.");
     }
}

let guerrier = {
     attaquer: function(){
         console.log("Le guerrier donne un coup d'épée.");
     }
}

magicien.attaquer();
guerrier.attaquer();
*/

//                                      L'affectation par décomposition (destructuring)

/*
let informations = ["Avocat", "25", "Homme"];

// Méthode sans décomposition
// let metier = informations[0];
// let age = informations[1];
// let sexe = informations[2];

// Méthode avec décomposition
let [metier, age, sexe] = informations;

console.log(metier);
console.log(age);
console.log(sexe);

*/

//                                      L'objet SET

/*
let nombres = [10,45,75,10,24,45];
// let monSet = new Set(nombres);
let monSet = new Set();

monSet.add('70');
monSet.add(87);
// monSet.delete(87);+


console.log(monSet.size);
*/ 


//                                      L'objet MAP

/*
let monMap = new Map([
    ['prenom','Mark'],
    ['nom','Dupont']
]);

monMap.set('poste','responsable de site');
// monMap.delete('poste');

console.log(monMap);
*/

/*
let utilisateurs = new Map();

utilisateurs.set('Claude Dupuis',{
    email: 'cd@pog.fr',
    poste: 'Guide touristique',
});

utilisateurs.set("Aurore Saliou",{
    email: "as@sfr.fr",
    poste: 'Conférencière',
});

console.log(utilisateurs);
*/


//                                      L'objet weakSet


/*
// let voitures = new WeakSet();

let voitureA = {
    constructeur: 'Honda',
    modele: 'Jazz'
}
let voitureB = {
    constructeur: 'Renault',
    modele: 'Espace'
}

// voitures.add(voitureA);
// voitures.add(voitureB);

// voitures.delete(voitureA);

let voitures = new WeakSet([voitureA,voitureB]);
console.log(voitures);
*/

//                                      L'objet weakMap


/*
let voitures = new WeakMap();

let index = {
    id: 1
}

let voitureA = {
    constructeur : 'Peugeot',
    modele : '380'
}

voitures.set(index,'5');

// voitures.delete(index);
console.log(voitures);
*/


//                                      Le REST Parameter


/*
function addition(...nombres){

    let resultat = 0;

    nombres.forEach((nombre => {
        resultat += nombre;
        console.log(resultat);
    }))

}

addition(4,9,15,451,85,12);
*/

//                                      Spred Operator ( opérateur de décomposition )



/*
// Exemple 1 : fusionner plusieurs tableaux
/*
let fruits = ['fraise', 'banane','poire'];
let aliments = ['chocolat', 'sucre','lait',...fruits];

// let total = aliments.concat(fruits);

// console.log(total);
// console.log(aliments);
*/

// Exemple 2 : découper une chaine de caractères en plusieurs éléments
/*
let phrase = "Bonjour !";
let phraseBateau = [...phrase];
console.log(phraseBateau);
*/

// Exemple 3 : sélectionner un élément et stocker les autres dans une variable.

/*
let devises = ['dollars','euros','yens'];

// Sans décomposition
/*
let premiereDevise = devises[0];
let autres = [devises[1],devises[2]];
*/

/*
// Avec décomposition
let [premiereDevise,...autres] = devises;

console.log(premiereDevise);
console.log(autres);
*/









/*
//                                      PRISE DE NOTE DE DIN DE COURS


L'objet Set

Créer un objet Set

    let monObjet = new Set();
    // ou
    let monObjet = new Set(['un', 'deux', 'trois']);

Ajouter un élément

    monObjet.add('quatre');

Supprimer un élément

    monObjet.delete('quatre');

Supprimer tous les éléments

    monObjet.clear();

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.size;

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has('un');

Retourner tous les éléments

    monObjet.values();
    // ou
    monObjet.keys();


L'objet Map

Créer un objet Map

    let monObjet = new Map();

Ajouter un élément

    monObjet.set('John Doe', {
        email: 'john@doe.com',
    });

Supprimer un élément

    monObjet.delete('John Doe');

Supprimer tous les éléments

    monObjet.clear();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has('John Doe');

Retourner un élément

    monObjet.get('John Doe');

Retourner tous les éléments

    monObjet.values();
    // ou
    monObjet.keys();


L'objet WeakSet

Créer un objet WeakSet

    let monObjet = new WeakSet();
    // ou
    let monObjet = new WeakSet([objet1, objet2, objet3]);

Ajouter un élément

    monObjet.add(objet4);

Supprimer un élément

    monObjet.delete(objet4);

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.length();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has(objet4);


L'objet WeakMap

Créer un objet WeakMap

    let monObjet = new WeakMap();

Ajouter un élément

    const objet1 = {
        nom: 'John Doe',
    }
     
    monObjet.set(objet1, {
        email: 'john@doe.com',
    });

Supprimer un élément

    monObjet.delete(objet1);

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.length();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has(objet1);

Retourner un élément

    monObjet.get(objet1);
*/

