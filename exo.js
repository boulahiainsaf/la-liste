//Créer les 2 fonctions suivantes :
//produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.

//afficheImg(image) qui affiche l'image passée en paramètre. ( Le paramètre image corresond au chemin de votre image )

var x = window.prompt("entrez un nombre :");
var y = window.prompt("entrez un multiplicateur: ");

function produit() {
    var t = x * y;
    return t;

}
t = produit();

function afficheImg(img) {
    var img = document.createElement("img");
    img.src = "papillon.jpg";
    var div = document.getElementById("demo");
    div.appendChild(img);
    document.write("le cube de " + x + " est égale à" + x * x * x + " \n" + "le produit de " + x + "*" + y + " est égale à " + t);

}
afficheImg();
console.log(t);