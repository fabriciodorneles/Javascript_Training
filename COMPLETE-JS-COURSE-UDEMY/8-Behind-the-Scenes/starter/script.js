// 'use strict';
// console.log('This Global',this);

// const funcTst = () => {
//     const a= 2+3;
//     console.log('funcTst.this',this);
// };
// const objTest = {
//         name: 'fara',
//         exibename: function () {
//             console.log(this);
//         }
//     };

//     objTest.exibename();
// function calcAge(birthYear) {
//     console.log('This function',this);
    
        
//         const age = 2037 - birthYear;
//         function printAge() {
//             let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//             console.log(output);
            
//             if(birthYear >= 1981 && birthYear <= 1996) {
//                 var millenial = true;
//                 const teste = 'willie';
//                 // não tem problema declara de novo em outro escopo
//                 //acessa sempre antes do primeiro bloco
//                 const firstName = 'Steven'; 
//                 // reassigning
//                 output = ' NEW OUTPUT';
//                 const str = `Oh, and you're a millenial, ${firstName}!`
//                 console.log(str);
//                 function add(a,b) {
//                     return a+b;
//                 }
//             }
//             // COM VAR CONSEGUE ACESSAR DE FORA DO BLOCO
//             console.log(millenial);
//             // Essa função aqui só acessa se tirar o strict
//             //console.log(add(2,3));
//             // essa CONST aqui nunca acessa, com strict ou sem strict
//             //console.log(teste);
//         }
//         printAge();
//         funcTst();
//         return age;
//     }

// const firstName = 'Jonas';
// calcAge(1991);

//PRIMITIVES
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
// Davis Willians

//REFENCE
const jessica = {
    firstName:'Jessica',
    lastName:'Willians',
    age: 27
}
const oldJessica = jessica;
jessica.lastName = 'Davis';
console.log(jessica.lastName, oldJessica.lastName);
// Davis Davis

// Se quiser MESMO Copying Object
const jessica2 = {
    firstName:'Jessica',
    lastName:'Willians',
    age: 27
}
const oldJessica2 = Object.assign({}, jessica2);
jessica2.lastName = 'Davis';
console.log(jessica2.lastName, oldJessica2.lastName);
// Davis Willians

// !!!!ATENÇÃO!!!!! - COM ARRAY DENTRO (ARRAY É UM OBJETO)
const jessica3 = {
    firstName:'Jessica',
    lastName:'Willians',
    age: 27,
    family: ['jena', 'jika']
}
const oldJessica3 = Object.assign({}, jessica3);
jessica3.family.push('gina');
jessica3.family.push('ginko');
console.log(jessica3.family, oldJessica3.family);
// ["jena", "jika", "gina", "ginko"] 
// ["jena", "jika", "gina", "ginko"]
// IGUAL !!!
// TERIA QUE FAZER UM "DEEP CLONE"