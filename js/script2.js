//* Creare un array di oggetti di squadre di calcio.
//* Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
var squadre = [
    {
        nome : 'milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'juve',
        puntiFatti : 0,
        falliSubiti : 0
    }
];  

//* Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). 
const numeriRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < squadre.length; i++){
    let puntiFattiRandom = numeriRandom(0, 3);
    let falliSubitiRandom = numeriRandom(0, 5);
    squadre[i].puntiFatti = puntiFattiRandom;
    squadre[i].falliSubiti = falliSubitiRandom;
}
console.log(squadre);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e 
// falli subiti e stampiamo tutto in console.

