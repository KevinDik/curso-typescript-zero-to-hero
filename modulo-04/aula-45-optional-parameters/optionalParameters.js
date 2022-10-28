"use strict";
/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 14/02/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...: ', nome);
    if (email != undefined)
        console.log('E-mail...: ', email);
}
informarDadosPessoa(775544, 'Glaucia Lemos');
informarDadosPessoa(994411, 'Jurema Lemos', 'jurema@example.com');
// ==> Exemplo 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}
mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso');
let pessoa;
pessoa = {
    idFuncionario: 112233,
    nome: 'Glaucia Lemos',
};
console.log(pessoa);
