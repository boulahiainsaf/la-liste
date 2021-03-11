var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let prenom = window.prompt("saisissez un prénom : ");
let t = tab.length;
let tab1 = new Array();
let i = 0;
let j = 0;
for (let i = 0; i < tab.length; i++) {
    tab[i] = tab[i].toUpperCase();
};
prenomMaj = prenom.toUpperCase();

var check = tab.includes(prenomMaj);

if (check) {
    tab.splice(tab.indexOf(prenomMaj), 1);
    tab.push("")

}
document.write(tab);
console.log(tab);