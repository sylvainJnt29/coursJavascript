try{

    do{
        var choix = prompt("Que souhaitez vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division");
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4 || choix == "" || choix == null); 

    do{
        var premierNombre = prompt("Saisissez le premier nombre :");
        var deuxiemeNombre = prompt("Saisissez le deuxième nombre :");
    } while (premierNombre,deuxiemeNombre == null || isNaN(premierNombre,deuxiemeNombre) ); 

    function addition(nombreA, nombreB){
        let result = nombreA + nombreB;
        return result;
    }

    function multiplication(nombreA, nombreB){
        let result = nombreA * nombreB;
        return result;
    }
    function soustraction(nombreA, nombreB){
        let result = nombreA - nombreB;
        return result;
    }
    function division(nombreA, nombreB){
        let result = nombreA / nombreB;
        return result;
    }

    switch (choix) {
        case 1:
            addition(premierNombre,deuxiemeNombre);
            return result;
            break;
        case 2:
            multiplication(premierNombre,deuxiemeNombre);
            return result;
            break;
        case 3:
            soustraction(premierNombre,deuxiemeNombre);
            return result;
            break;
        case 4:
            division(premierNombre,deuxiemeNombre);
            return result;
            break;
        default:
            alert("Monumentale erreur !");
            break;
    }

} catch(error){
    alert(error);
}
