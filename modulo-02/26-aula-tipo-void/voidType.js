"use strict";
/**
 * arquivo: voidType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'void'
 * data: 27/08/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#void
 */
// ==> Exemplo 01 - funções:
function logError(errorMessage) {
    console.log(errorMessage);
    // return errorMessage;
}
logError('Required field - Name!');
// ==> Exemplo 02 - funções:
const logErrorExample2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrorExample2('Required field - Surname');
// ==> Exemplo void: variáveis
let variavelExemploVoid;
// variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;
console.log(variavelExemploVoid);
