function digitsSum(inputInt){
    if(!Number.isInteger(inputInt)){
        return console.error("Debes ingresar un numero entero");
    }

    // Separar numeros
    let listaNumeros = inputInt.toString().split("").map(Number);

    let total = 0
    for(let numero of listaNumeros){ // Sumar numeros
        total += numero ;
    }

    return console.log(total); // retornar salida
}

let inputInt = 999;
digitsSum(inputInt);

inputInt = 9184501;
digitsSum(inputInt);

inputInt = 12345;
digitsSum(inputInt);