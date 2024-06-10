function Calculfactorielle (number){
    //initialiser la variable
    let factorielle=1 
    for (i=1 ;i<=number;i++){
        factorielle *= i
    }   
    return factorielle;
}
//exemple
console.log(Calculfactorielle(5))
