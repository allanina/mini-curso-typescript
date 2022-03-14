//existe apenas no TS
//conjunto de dados p descrever a estrutura de um objeto (exclusivo p objetos)
//type alias tbm funciona p tipos primitivos
var tlou = {
    title: "The Last of Us",
    description: "Jobo dom d+",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to ".concat(title, ": Uncharted, A Plague Tale, Metro"));
    }
};
tlou.getSimilars(tlou.title);
