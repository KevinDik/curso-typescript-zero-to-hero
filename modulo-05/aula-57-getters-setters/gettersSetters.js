"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: gettersSetters.ts
 * descrição: arquivo responsável por ensinar como usar getters e
 * setters no TypeScript
 * data: 01/08/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */
Object.defineProperty(exports, "__esModule", { value: true });
//==>Exemplo 01: Get
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._altura * this._largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
//==> Exemplo 02: Set
class Pessoa {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Glaucia Lemos');
console.log('Meu nome é...: ', pessoa.nome);
//==>Exemplo 03: Get [explicação mais densa]
class Estudante {
    constructor() {
        this._nome = 'Glaucia Lemos';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
//==>Exemplo 04: Set/Get [explicação mais densa]
class Estudante_01 {
    constructor(nomeEstudante, semestreEstudante, cursoEstudante) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const estudante_01 = new Estudante_01('Glaucia Lemos', 5, 'Sistema da Informação');
console.log(estudante_01);
// Setter call
estudante_01.curso = 'Análise e Desenvolvimento de Sistemas';
// Getter call
console.log('Curso atualizado...:', estudante_01.cursos);
