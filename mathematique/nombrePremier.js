function estPremier(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true; 
    }
    if (n % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Exemple 
let nombre = 29;
if (estPremier(nombre)) {
    console.log(`${nombre} est un nombre premier.`);
} else {
    console.log(`${nombre} n'est pas un nombre premier.`);
}
