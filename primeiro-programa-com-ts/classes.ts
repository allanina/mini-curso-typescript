//classes (poo)

class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    //pode se criar métodos e usá-los depois
    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

//uma classe que extende de outra classe
class CharAccount extends UserAccount {
    //o private é a forma mais pesada, e define que nao se pode chamar nem alterar o nickname
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        //so na hora de atribuir o valor que os nomes das variaveis precisam ser iguais
        //o super() pega as propriedades da classe superior
        super(name, age)

        this.nickname = nickname;
        this.level = level;

    }
    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
    }
}

const allana = new UserAccount("Allana", 26);
//usando o nodemon, podemos acessar tanto o objeto inteiro quanto alguma das propriedades desse objeto, assim como seus métodos
console.log(allana)
console.log(allana.age)
allana.logDetails();


const marshmallow = new CharAccount("Marshmallow", 1, "oMaioral", 1000);
//não consigo alterar o nickname depois de colocar o "private" pois ele é acessável apenas dentro da classe CharAccount
//marshmallow.nickname = "marsh"
console.log(marshmallow);
marshmallow.logDetails();
//mesmo com o private eu consigo acessar o metodo logChar pq eu posso chamar a propriedade dentro da classe com o private, inclusive posso editar, porem nunca fora
marshmallow.logCharDetails();




