// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
    id: number,
    name: string,
    //colocar ponto de interrogações para informações opcionais, logo vc n precisa falar mais de um tipo para a mesma variavel
    email?: string
}

const account: AccountInfo = {
    id: 123,
    name: 'Allana',
    email: 'allanaevellynm@gmail.com'
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: 'allanina',
    level: 100
}


//criar um tipo que tem os tipos de dois objetos diferentes (intersection)
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 1234,
    name: "Marshmallow",
    nickname: 'allana',
    level: 100
}

console.log(player.name);

