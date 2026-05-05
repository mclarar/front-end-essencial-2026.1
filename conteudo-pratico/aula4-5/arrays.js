let series = [
   "House",
   "Demolidor",
   "Chaves",
   "The Bear",
   "Lucifer",
   "The Madison",
   "Ted Lasso",
   "Todo Mundo Odeia o Chris",
   "The Witcher",
];

// console.log("imprimindo no console um index apenas: " + series[6]);
// console.log('imprimindo o array inteiro', series);
// console.log(`eu gosto muito da série ${series[6]}`);

//verificando o tamanho do array
// console.log("tamanho do array: " + series.length);

//adicionando um item no final do array
series.push("The Office");
console.log(series);

//map - criar um novo array a partir de um existente, aplicando as condições desejadas


let numerosDobrados = numeros.map((numero)=>{
    return numero * 2;
});
console.log(numerosDobrados);

//filtragem
//cria um novo array a partir de um existente, aplicando as condições de filtragem desejadas
let maiorQue2 = numeros.filter(numero =>numero >2);
console.log('filter', maiorQue2);

//achar um elemento no array
// retorna apenas o primeiro elemento encontrado que satisfaça a condição desejada
let numeros = [1, 2, 3, 4, 5];
let maiorQ3 = numeros.find(numero => numero > 3);
console.log('find', maiorQ3);



