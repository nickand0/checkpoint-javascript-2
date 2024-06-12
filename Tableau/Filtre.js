const nombres = [10, 20, 30, 40, 50];

function isGreaterThan25(number) {
    return number > 25;
}

const filteredNumbers =[]
let index = 0; 

for (let i = 0; i < nombres.length; i++) {
    if (isGreaterThan25(nombres[i])) {
        filteredNumbers[index] = nombres[i];
        index++;
    }
}
console.log(filteredNumbers); 
