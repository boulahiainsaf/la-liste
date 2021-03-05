let ent = window.prompt("entrez un entier");
let so = parseInt(ent);
listeEnt = new Array();
while (ent != 0) {
    listeEnt.push(ent);
    ent = window.prompt("entrez un entier");
    so = parseInt(so) + parseInt(ent);
}
let mo = so / listeEnt.length;
alert("la somme est :" + so);
alert("la moyenne est : " + mo);
console.log(ent);
console.log(listeEnt);
console.log(so);
console.log(mo)