
function MaximumMinimum (tableau){
  let  minimum = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < minimum) {
        minimum = tableau[i];
    }
}

    let maximum = tableau[0];
    for (let i = 1; i < tableau.length; i++){
        if (tableau[i]>maximum){
            maximum = tableau[i];
        }
    }
return {minimum,maximum}
}
console.log(MaximumMinimum([20,100 ,1,3,9]))