const pessoa = {
   nome: "Maria",
   idade: 30,
   profissao: "Dev Full Stack",
   seriesFavoritas: ["Ted Lasso", "House", "The Pitt"],
   estaTrabalhando: true,
   apresentar: function () {
      console.log("Olá!");
   },
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.seriesFavoritas);
console.log(pessoa.estaTrabalhando);
pessoa.apresentar();


