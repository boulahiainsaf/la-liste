let resultat = 0;
let N = window.prompt("entrez un nombre entier");
let X = window.prompt("entrez un deuxieme nombre");

do {
    resultat = parseInt(X) * parseInt(N);
    alert(" " + X + "*" + N + "=" + resultat);
    N--;
} while (N > 0);
alert("fin de la boucle");