"use strict";
//Type Aliases and Union
// o pipe | serve pra você indicar diferentes tipos que aquela variável pode ter
// um type alias é um tipo criado por você que pode usar os diferentes tipos que vc deseja que uma variável tenha
//sem type alias
/* function logDetails(uid: number | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`)
} */
//com type alias
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
logDetails(123, 'Batata');
logDetails("123", "Batata");
logInfo(123, "Allana");
logInfo("123", " Allana");
