function MajletterChaqueMot(phrase){
    //pour séparer une phrase en mot dans un tableau avec la fonction .split(' ')
    let Mots=phrase.split(' ');
    //applique une fonction mettre en majuscule la première lettre à chaque element du tableau
    
    let  ChaqueMots =Mots.map(function(mot){
        let firstletter =mot[0].toUpperCase()
        let resteletter =''
        let letter=''
        for(i=1 ;i<=mot.length-1 ;i++){
            resteletter += mot[i]
        }
        letter=firstletter+resteletter
        return letter 
    })
   //joindre les elements dans le tableau
  return ChaqueMots.join(' ')
}

//exemple
console.log(MajletterChaqueMot("ando est un hero"));


