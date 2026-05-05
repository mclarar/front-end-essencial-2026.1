//AND - &&
//OR - ||
//NOT - !

//1. AND - &&
//retornar true se TODAS as condições forem verdadeiras

const a = 10;
const b = 20;

if (a > 5 && b > 10) {
   console.log("ambas as condições são verdadeiras");
} else {
   console.log("pelo menos uma condição é falsa");
}

//2. OR - ||
//retornar true se PELO MENOS UMA das condições for verdadeira

const temperatura = 30;

if (temperatura < 15 || temperatura > 25) {
   console.log("a temperatura está fora da faixa ideal, mt frio ou mto quente");
} else {
   console.log("o dia está agradável");
}

//3. NOT - !
//inverte o valor lógico de uma expressão

const isRaining = true;

if (!isRaining) {
   console.log("não está chovendo");
} else {
   console.log("está chovendo");
}

//ternario
let idade = 16;

let verificaIdade = idade >= 18 ? "maior de idade" : "menor de idade";
console.log(verificaIdade);

if (idade >= 18) {
   console.log("maior");
} else {
   console.log("menor");
}

let cor = "amarelo";

switch (cor) {
   case "vernelho":
      console.log("a cor é vermnelha");
      break;
   case "azul":
      console.log("a cor é azul");
      break;
   case "amarelo":
      console.log("a cor é amarela");
      break;
   default:
      console.log("cor não reconhecida");
}
