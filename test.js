let re = 0;
let n1 = window.prompt("entrez le premier nombre");
let n2 = window.prompt("entrez le deuxieme nombre ");
let op = window.prompt("saisez l'un de ces opérateur : +,-,* ou /");
while (op != "+" && op != "-" && op != "*" && op != "/") {
    alert("erreur");
}

switch (op) {
    case "+":
        re = parseInt(n1) + parseInt(n2);
        alert("le résultat est:" + re);
        break;
    case "-":
        re = parseInt(n1) - parseInt(n2);
        window.alert("le résultat est : " + re);
        break;
    case "*":
        re = parseInt(n1) * parseInt(n2);
        alert("le résultat est : " + re);
        break;
    case "/":
        if (n2 == 0) {
            alert("impossible");
        }
        re = parseInt(n1) / parseInt(n2);
        alert("le résultat est :" + re);
        break;
}