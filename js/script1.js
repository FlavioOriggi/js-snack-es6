//* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciclette = [
    {
        nome : 'pinco',
        peso : 2
    },
    {
        nome : 'pallino',
        peso : 5
    },
    {
        nome : 'attila',
        peso : 1
    }
];

//* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let pesoMin = biciclette[0];

for (let i = 0;  i < biciclette.length; i++){
    if(biciclette[i].peso < pesoMin.peso){
        pesoMin = biciclette[i];
    }       
}
// console.log(pesoMin);

//*destructuring
const {nome, peso} = pesoMin;
console.log(nome, peso);

//*template literal
document.getElementById('testo').innerHTML = 
` <ul>
    <li>Nome: ${nome}</li>
    <li>Peso: ${peso}</li> 
  </ul>
`;



