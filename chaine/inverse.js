function inverser(str) {
    //initialisation
        let reversestr ='';
    
    //boucle for pour parcourir la chaine de la fin vers le début
        for (let i=str.length-1; i>=0;i--){
            reversestr+=str[i];
    
        }
    //return la chaine  inverser
    return reversestr;
    }
    //exemple
   console.log(inverser("nikki"))
   