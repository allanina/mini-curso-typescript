"use strict";
//existe apenas no TS
//conjunto de dados p descrever a estrutura de um objeto (exclusivo p objetos)
//type alias tbm funciona p tipos primitivos
const tlou = {
    title: "The Last of Us",
    description: "Jobo dom d+",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
const leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours", "New characters"],
};
//minha classe createGame precisa ter todos os tipos descritos na interface game
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
