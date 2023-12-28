//Desafio do Felipão 3 / Feito por Tiago Tozzo


//Criando uma classe com 3 propriedades
class heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

//Utilizando um metodo chamado "atacar", realizando verificações e concatenando a mensagem de saída com as propriedades da classe
    atacar(){
        let ataque = ""

        if (this.tipo === "mago"){
            ataque = "magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (this.tipo === "monje"){
            ataque = "artes marciais"
        }
        else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }

       console.log(`O heroi ${this.nome} é um ${this.tipo}, ele tem ${this.idade} anos e atacou usando ${ataque}`)
    }
}

//Dados de entrada dos heróis
let caracteristicaHeroi = new heroi("Pedro","36","mago")
let caracteristicaHeroi01 = new heroi("José","22","guerreiro")
let caracteristicaHeroi02 = new heroi("Leandro","54","ninja")
let caracteristicaHeroi03 = new heroi("Fernando","41","monje")

//Executando o método atacar
caracteristicaHeroi.atacar()
caracteristicaHeroi01.atacar()
caracteristicaHeroi02.atacar()
caracteristicaHeroi03.atacar()