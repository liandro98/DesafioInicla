function isPalindrome(inputStr){
    if(typeof inputStr != "string"){
        return console.error("Ingresa una cadena");
    }

    let textoOriginal =  inputStr;
    let textoInvertido = "";
    let indiceTexto = textoOriginal.length -1;

    // Invertir texto
    while(textoInvertido.length < textoOriginal.length){
        textoInvertido += textoOriginal[indiceTexto];
        indiceTexto--;
    }

    // Comparar
    if(textoOriginal === textoInvertido){
        return true;
    } else {
        return false;
    }

}

inputStr = "aabaa";
console.log(isPalindrome(inputStr));

inputStr = "abac";
console.log(isPalindrome(inputStr));

inputStr = "salas";
console.log(isPalindrome(inputStr));