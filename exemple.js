// Manipulations sur la portée des variables.


let variableLet = "globale";
var variableVar = "globale";

if(true){

    let variableLet = "locale";
    var variableVar = "locale";

    console.log("let : " + variableLet);
    console.log("Var : " + variableVar);

}

console.log("let : " + variableLet);
console.log("Var : " + variableVar);
