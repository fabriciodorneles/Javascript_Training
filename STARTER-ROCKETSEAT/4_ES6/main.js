// CLASSES E INHERITANCE-----------------------------------------------------------
class List {
    constructor() {
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{  //inheritance
    constructor() {
        super();  //aqui tá referenciando o constructor do pai
        this.usuario  = 'Diego';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('mais uno');
}

MinhaLista.mostraUsuario();

//Método ESTATICO na classe---------------------------------------------------------
class Matematica {
    //Método estático não pode acessar nem guardar nenhuma informação da classe.
    //Mas pode ser usado sem inicializar com new
    static soma(a,b){
        return a+b;
    }
}

//VETORES, FUNÇÔES DE MANIPULAÇÂO --------------------------------------------------
// const arr = [1,3,4,5,8,9];
// console.log(arr);
// // método que percorre todo o array e executa o codigo para cada item
// const newArr = arr.map(function(item,index){ 
//     return item +index;
// })
// console.log(newArr);
// // itera o array todo te dando o resultado da soma e o proximo elemento
// const sum = arr.reduce(function(total, next){
//     return total+next;
// })
// console.log(sum);
// // itera todo o array e passa para o novo os elementos que derem true no teste
// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// })
// console.log(filter);
// // Retorna o elemento se conseguiu achar, senão retorna undefined
// const find = arr.find(function(item) {
//     return item === 4;    
// })
// console.log(find);

//ARROW FUNCTION -----------------------------------------------------------------------
//quando for função anônima e tiver só um item de parametro dá pra fazer tudo isso
const arr1 = [1, 3, 4, 5, 6];
//const newArr1 = arr1.map(function(item){ 
//const newArr1 = arr1.map((item) => {     
//const newArr1 = arr1.map(item => {     
//    return item * 2;
//})
const newArr1 = arr1.map(item => item * 2);         

console.log(newArr1);
//isso aqui é um função que vai ser atribuída à teste
// const teste = () => {
//     return 'teste';
// }
//const teste = () => 'teste'; //OK
//const teste = () => [1,2,3]; //OK
//const teste = () => { nome: 'fabricio'}; //Aqui não dá pq a chave de objeto tb pressupões função
const teste = () => ({ nome: 'fabricio'}); //Por isso tem que ter os partenses, aí rola
console.log(teste())

//VALORES PADRÂO --------------------------------------------------
//Implentação sem valores padrão
// function soma(a,b){
//     return a+b;    
// }

// console.log(soma(1));
// console.log(soma()); //normalmente aqui vai dar erro,claro

// function soma(a=3,b=7){
//     return a+b;    
// }

// console.log(soma(1));
// console.log(soma()); //agora aqui não vai mais pq tá definido os valores default na função

//e pode ser usado com arrow function
const soma = (a=3, b=7) => (a + b);

console.log(soma(1));
console.log(soma()); //agora aqui não vai mais pq tá definido os valores default na função

//DESESTRUTURAÇÃO DE OBJETOS ----------------------------------------------------
const usuario = {
    nome: 'Fabricio',
    idade: 42,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
    },
};

console.log(usuario);
// metódo padrão
// const nome = usuario.nome;
// const idade =  usuario.idade;
// const idade = usuario.endereço.cidade;

// com desestruturação
const { nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// function mostraNome(usuario){
    //     console.log(usuario.nome, usuario.idade);
    // }
//dá pra usar tb nos parâmetros de função
function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);

//REST (teve que instalar o plugin pro babel)

