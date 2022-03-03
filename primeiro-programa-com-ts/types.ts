// boolean (true / false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = `dale ${isOpen}`

//number (também aceita hexadecimal, int, float, binario)
let total: number
total = 4.4

//array (precisa se informar o que vai dentro do array type[])
let items: number[]
items = [3]

// ts não permite que vc atribua variaveis com nomes iguais
let total2: Array<number>
total2 = [1, 2, 3]

// tuple 
let title: [number, string, string]
title = [1, 'foo', 'bar']


//enum cria um conjunto de chave-valor e pode se chamar o que se deseja mais rapido
enum Colors {
    white = '#fff',
    black = '#000'
}

//any (qualquer coisa)
let coisa: any
coisa = true


//void (vazio, serve para tipar funções que nçao retornam nada)
function logger() {
    console.log('oi')
}

//null | undefined em geral se usa undefined ao inves de null


//never (nunca vai retornar)
function error(): never {
    throw new Error("error");
}

//object (qualquer coisa que não sejam os outros tipos)
let cart: object
cart = {
    key: 'allana'
}

//Type Inference (ts já infere o tipo daquela variável a partir do momento que você dá um valor a ela)
let message2 = 'allana'
message2 = 'jose' //so aceita outras strings depois

