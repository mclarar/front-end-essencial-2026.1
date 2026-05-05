//tipos de dados
// let nome = "Maria"; //string
// let idade = 30; //number
// let isStudent = true; //boolean
// let indefinido; //undefined
// let nulo = null; //null

// tres tipos de variáveis: var, let e const


//tem escopo global, todo o arquivo tem acesso a ela
//pode ser redeclarada e reatribuida
var nome = 'Maria';
console.log(nome);

nome = "Pedro";
console.log(nome);

function printPhone(){
    let phone = "123456789";
    phone ='00000000'
    console.log(phone);   
}

console.log(phone); // erro - 'phone' não existe, ela só existe no escopo em que foi instanciada

printPhone();//chama a função para imprimir o telefone


function printAge(){
    const age = 30;
    age = 31; // TypeError: Assignment to constant variable. 
    // não se pode mudar um valor de uma variável declarada com const, ela é imutável
    console.log(age);
    
};

// console.log(age);

printAge(); //chamada da função