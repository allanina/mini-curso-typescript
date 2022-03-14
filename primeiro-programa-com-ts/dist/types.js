"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
//string ('foo', "foo", `foo`)
let message;
message = `dale ${isOpen}`;
//number (também aceita hexadecimal, int, float, binario)
let total;
total = 4.4;
//array (precisa se informar o que vai dentro do array type[])
let items;
items = [3];
// ts não permite que vc atribua variaveis com nomes iguais
let total2;
total2 = [1, 2, 3];
// tuple 
let title;
title = [1, 'foo', 'bar'];
//enum cria um conjunto de chave-valor e pode se chamar o que se deseja mais rapido
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
//any (qualquer coisa)
let coisa;
coisa = true;
//void (vazio, serve para tipar funções que nçao retornam nada)
function logger() {
    console.log('oi');
}
//null | undefined em geral se usa undefined ao inves de null
//never (nunca vai retornar)
function error() {
    throw new Error("error");
}
//object (qualquer coisa que não sejam os outros tipos)
let cart;
cart = {
    key: 'allana'
};
//Type Inference (ts já infere o tipo daquela variável a partir do momento que você dá um valor a ela, evita redundância)
let message2 = 'allana';
message2 = 'jose'; //so aceita outras strings depois
//ts sabe que eventListener se trata de um evento com o mouse, aí já indica o tipo de evento que será realizado
window.addEventListener("click", (e) => {
    console.log(e.target);
});
