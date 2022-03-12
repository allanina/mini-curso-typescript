"use strict";
//classes (poo)
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //pode se criar métodos e usá-los depois
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
//uma classe que extende de outra classe
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        //so na hora de atribuir o valor que os nomes das variaveis precisam ser iguais
        //o super() pega as propriedades da classe superior
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    logCharDetails() {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}
const allana = new UserAccount("Allana", 26);
//usando o nodemon, podemos acessar tanto o objeto inteiro quanto alguma das propriedades desse objeto, assim como seus métodos
console.log(allana);
console.log(allana.age);
allana.logDetails();
const marshmallow = new CharAccount("Marshmallow", 1, "oMaioral", 1000);
//não consigo alterar o nickname depois de colocar o "private" pois ele é acessável apenas dentro da classe CharAccount
//marshmallow.nickname = "marsh"
console.log(marshmallow);
marshmallow.logDetails();
//mesmo com o private eu consigo acessar o metodo logChar pq eu posso chamar a propriedade dentro da classe com o private, inclusive posso editar, porem nunca fora
marshmallow.logCharDetails();
