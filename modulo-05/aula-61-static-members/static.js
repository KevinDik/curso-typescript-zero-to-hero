"use strict";
/**
 * arquivo: static.ts
 * descrição: arquivo responsável por ensinar uso de métodos e propriedades
 * estáticos no TypeScript
 * data: 16/08/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        // nome classe + nome propriedade
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
const funcionario_01 = new Funcionario('Glaucia', 'Lemos', 'Developer');
const funcionario_02 = new Funcionario('Jurema', 'Lemos', 'Professora');
console.log(Funcionario.contratacoes);
// ==> Exemplo 02 - Métodos estáticos
class Funcionario_01 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        Funcionario_01.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
}
Funcionario_01.contratacoes = 0;
const funcionario_01 = new Funcionario_01('Glaucia', 'Lemos', 'Developer Advocate');
const funcionario_02 = new Funcionario_01('Jurema', 'Lemos', 'Professora');
console.log(Funcionario_01.retornarContratacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
Cachorro.QTD_CACHORRO_VENDIDO = 0;
const cachorro_01 = new Cachorro('Pipoca', 4, ['Spitz Alemão']);
const cachorro_02 = new Cachorro('Farofa', 6, ['Yorkshire']);
