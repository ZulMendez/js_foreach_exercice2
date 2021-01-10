// - # Exo 1 Boucle FOREACH
//     - ## Créez un un array qui contient 5 éléments
//     - ## Affichez touts les éléments a l'aide d'une boucle foreach
    
let monTab = ['pomme', 'poire', 'banane', 'melon', 'fraise'];

monTab.forEach(element => {
    console.log(element);
});
// -  # Exo 2 Boucles FOREACH
//     ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//     ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
//     ## - Afiichez egalement sa position

let coding16 = ["saliou", "zakaria", "ayoub", "mohamed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

coding16.forEach ((element, i) => {
    console.log(`Bonjour ${element}, numero: ${i}`);
});