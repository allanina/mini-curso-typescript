//existe apenas no TS
//conjunto de dados p descrever a estrutura de um objeto (exclusivo p objetos)
//type alias tbm funciona p tipos primitivos

interface Game {
    id?: number | string;
    title: string;
    description: string;
    //não pode alterar fora da interface
    readonly genre: string;
    //? significa opcional
    platform?: string[];
    //assinatura do método, tem que indicar o retorno dele
    getSimilars?: (title: string) => void;
}

const tlou: Game = {
    title: "The Last of Us",
    description: "Jobo dom d+",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    },
};


interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours", "New characters"],
} 

//minha classe createGame precisa ter todos os tipos descritos na interface game
class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;

    constructor(t: string, d: string, g: string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}