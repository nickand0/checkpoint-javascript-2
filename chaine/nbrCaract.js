function nbrcaract(str){
    //condition si str n'est pas une chaine de caractère
    if(typeof str !== 'string'){
        return "ce n'est pas une chaine de caratère"
    }
    return str.length
}

//exemple
console.log(nbrcaract("nikki"))
console.log(nbrcaract(22))