function programme(){
// mieux vaut utiliser let que var
    function addition(nombreA, nombreB){
        return nombreA + nombreB;
    }

    function multiplication(nombreA, nombreB){
        return nombreA * nombreB;
    }

    function soustraction(nombreA, nombreB){
        return nombreA - nombreB;
    }

    function division(nombreA, nombreB){
        if(nombreB==0){
        throw new Error("Impossible de diviser par zéro !");
        }else{
            return nombreA / nombreB;
        }
    }

    do {
        var choix = Number(prompt("Que souhaitez vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"));
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4); 

    do {
        var premierNombre = Number(prompt("Saisissez le premier nombre :"));
        var deuxiemeNombre = Number(prompt("Saisissez le deuxième nombre :"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre)); 


    try{
        switch (choix) {
            case 1:
                var resultat = addition(premierNombre,deuxiemeNombre);
                break;
            case 2:
                var resultat = multiplication(premierNombre,deuxiemeNombre);
                break;
            case 3:
                var resultat = soustraction(premierNombre,deuxiemeNombre);
                break;
            case 4:
                var resultat = division(premierNombre,deuxiemeNombre);
                break;
            default:
                throw new Error("Monumentale erreur !")
        }
        alert("Le résultat est : " + resultat);
    } 
    catch(error) {
        alert(error);
    }
}

function calculatrice() {  
    do{
        programme();
        var restart = prompt("Voulez vous recommencer ?\n\n 1 - OUI\n 2 - NON ");
    } while (restart==1);
    if (restart == 2) {
        alert("Merci d'avoir utilisé la calculatrice");
    }
}

calculatrice();


