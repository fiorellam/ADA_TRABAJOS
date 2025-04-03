//Var:
function ejemploVar(){
    // console.log(variableVar); //undefined por hoisting. Is used before being assigned
    var variableVar = 'Soy una variable var';
    console.log(variableVar);
}
ejemploVar();

//Let:
function ejemploLet(){
    // console.log(variableLet); //error igual que arriba. Block-scoped variable used before its declaration
    let variableLet = 'Soy una variable Let';
    console.log(variableLet);
}
ejemploLet();

//Const:
function ejemploConst(){
    const variableConst = 'Soy una variable const';
    console.log(variableConst);
    // variableConst = "Otro valor"; // No se le puede asignar otro valor porque es una constante
}
ejemploConst();