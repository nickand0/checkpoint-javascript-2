const nombres = [10, 20, 30, 40, 50];

function isGreaterThan25(number) {
  return number > 25;
}

const filteredNumbers = nombres.filter(isGreaterThan25);

//exemple 
console.log(filteredNumbers);
