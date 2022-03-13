//classes (poo)

//se eu colocasse que ele era uma classe abstrata, eu poderia apenas extender aquela classe mas não poderia fazer novos objetos a partir dela (interessante quando se quer criar classes que sejam apenas modelos)
// abstract class UserAccount {
class UserAccount {
    //o public é implícito, ele indica que pode ser tanto lido quanto editado fora da classe (publico)
    public name: string;
    //protected permite que seja chamado dentro da classe ou da classe que estende ela, enquanto o private permite apenas dentro daquela classe
    protected age: number;

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
    //accessors (getters e setters)
    //o get funciona como uma função mas é chamado como um método
    //tanto o get quanto o set serve para ecmascript 5 ou mais
    get getLevel() {
        return this.level
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} with ${this.age} year(s) old, has the char ${this.nickname} at level ${this.level}`)
    }
}

const allana = new UserAccount("Allana", 26);
//usando o nodemon, podemos acessar tanto o objeto inteiro quanto alguma das propriedades desse objeto, assim como seus métodos
console.log(allana)
//não pode ser chamada pois está como protected
//console.log(allana.age)
allana.logDetails();


const marshmallow = new CharAccount("Marshmallow", 1, "oMaioral", 1000);
//não consigo alterar o nickname depois de colocar o "private" pois ele é acessável apenas dentro da classe CharAccount
//marshmallow.nickname = "marsh"
console.log(marshmallow);
//o readonly permite que você leia fora da classe, mas não pode alterar as informações (apenas leitura)
console.log(marshmallow.level);
marshmallow.logDetails();
//mesmo com o private eu consigo acessar o metodo logChar pq eu posso chamar a propriedade dentro da classe com o private, inclusive posso editar, porem nunca fora
marshmallow.logCharDetails();


// o get level vc n precisa chamar como se fosse um método, pois ele funciona como uma propriedade qualquer daquele objeto
console.log(marshmallow.getLevel);
//o set não funciona igual ao get, pois vc tem que indicar o valor que aquela propriedade tem que ter agora (n funciona como método)
marshmallow.setLevel = 500;





