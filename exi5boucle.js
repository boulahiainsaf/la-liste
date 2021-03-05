let mot = window.prompt("saisissez un mot :");
let n = mot.length;
let i = mot.substr(0, 1);
let nb = 0;
let p = 0;
while (p < n) {
    if ((i != "a") && (i != "e") && (i != "u") && (i != "i") && (i != "o") && (i != "y")) {
        nb++;
        p++;
        i = mot.substr(p, 1);
    } else {
        nb = nb;
        p++;
        i = mot.substr(p, 1);


    }
}
let voyelles = n - nb;
alert("le nombre de voyelles de ce mot est : " + voyelles);
console.log(p);
console.log(nb);