
function numberfiltre(table){
const filteredNumbers =[]
let index = 0; 

for (let i = 0; i < table.length; i++) {
        if (table[i] > 25 ) {
            filteredNumbers[index] = table[i];
            index++;
        } 
    }
    return filteredNumbers
}
console.log(numberfiltre([10, 20, 30, 40, 50])); 
