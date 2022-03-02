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