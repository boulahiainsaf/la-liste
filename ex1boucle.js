let res = 0;
let i = 0;
let N = window.prompt("entrez un nombre");
do {
    res = N - i;
    alert("le nombre:" + res);
    i++;
} while (i <= N);
console.log("fin de la boucle");