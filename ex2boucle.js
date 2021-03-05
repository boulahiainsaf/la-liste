let so = 0;
let mo = 0;
let b = 1;
let N = window.prompt("entrez un nombre:");
let i = window.prompt("entrez un autre nombre:")
do {

    i = window.prompt("entrez un nombre:");
    alert(so);
    alert(mo);
} while (i = 0);
so = parseInt(N) + parseInt(i);
mo = so / b;
b++;
alert(so);
alert(mo);