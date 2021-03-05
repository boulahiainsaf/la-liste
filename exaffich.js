let taille = window.prompt("entrez la taille du tableau : ");
tableau = new Array();
let i = 0;
while (i != taille) {
    let ent = window.prompt("entrez un entier");
    tableau.push(ent);
    i++;

}
document.write("le contenu de tableau: " + tableau);
console.log(taille);
console.log("la liste des prenoms : " + tableau);