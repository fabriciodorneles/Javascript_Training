'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}.`
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const teste = 'willie';
            // não tem problema declara de novo em outro escopo
            //acessa sempre antes do primeiro bloco
            const firstName = 'Steven'; 
            // reassigning
            output = ' NEW OUTPUT';
            const str = `Oh, and you're a millenial, ${firstName}!`
            console.log(str);
            function add(a,b) {
                return a+b;
            }
        }
        // COM VAR CONSEGUE ACESSAR DE FORA DO BLOCO
        console.log(millenial);
        // Essa função aqui só acessa se tirar o strict
        //console.log(add(2,3));
        // essa CONST aqui nunca acessa, com strict ou sem strict
        //console.log(teste);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);