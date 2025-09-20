function integerSort(inputArray){
    let outputArray = [];
    let indice1 = inputArray.length;

    for(let i = 0; i < indice1; i++){ // Recorrido del arreglo original
        if(outputArray.length === 0){
            outputArray[0] = inputArray[i]; 
        } else {
            let indice2 = outputArray.length;
            let insertado = false;
            
            for(let e = 0; e < indice2; e++){ // Redorrido del nuevo arreglo
                if(inputArray[i] <= outputArray[e]){ // Manejo de numeros menores
                    for(let j = indice2; j > e; j--){
                        outputArray[j] = outputArray[j-1];
                    }
                    outputArray[e] = inputArray[i];
                    insertado = true;
                    break;
                }
            }
            
            if(!insertado){
                outputArray[indice2] = inputArray[i];
            }
        }
    }
    return outputArray;
}

let inputArray = [5, -2, 10, 0, 3, -7];
console.log(integerSort(inputArray));