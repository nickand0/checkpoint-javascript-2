function SommeTableau (table){
    let somme=0
    for(i=0 ;i<=table.length-1 ;i++){
        somme += table[i]
    }
    return somme
}
console.log(SommeTableau([1,5,7,9]))
