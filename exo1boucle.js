// Créer une page HTML qui demande à l'utilisateur un prénom.
let prenom = window.prompt("entrez un prenom", "");
// La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
listePrenom = new Array();
while (prenom != "") {
    listePrenom.push(prenom);
    prenom = window.prompt("entrez un prenom", "");
}
// Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.
console.log("la liste des prenoms : " + listePrenom);
console.log(listePrenom.length);