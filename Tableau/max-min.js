
function MaximumMinimum (tableau){
    let maximum=Math.max(...tableau)
    let minimum=Math.min(...tableau)
    return {maximum,minimum};
}
console.log(MaximumMinimum([1,5,3,10,100]))