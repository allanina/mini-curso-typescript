//classes (poo)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//se eu colocasse que ele era uma classe abstrata, eu poderia apenas extender aquela classe mas não poderia fazer novos objetos a partir dela (interessante quando se quer criar classes que sejam apenas modelos)
// abstract class UserAccount {
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    //pode se criar métodos e usá-los depois
    UserAccount.prototype.logDetails = function () {
        console.log("The player ".concat(this.name, " is ").concat(this.age, " years old."));
    };
    return UserAccount;
}());
//uma classe que extende de outra classe
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = 
        //so na hora de atribuir o valor que os nomes das variaveis precisam ser iguais
        //o super() pega as propriedades da classe superior
        _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        //accessors (getters e setters)
        //o get funciona como uma função mas é chamado como um método
        //tanto o get quanto o set serve para ecmascript 5 ou mais
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player ".concat(this.name, " with ").concat(this.age, " year(s) old, has the char ").concat(this.nickname, " at level ").concat(this.level));
    };
    return CharAccount;
}(UserAccount));
var allana = new UserAccount("Allana", 26);
//usando o nodemon, podemos acessar tanto o objeto inteiro quanto alguma das propriedades desse objeto, assim como seus métodos
console.log(allana);
//não pode ser chamada pois está como protected
//console.log(allana.age)
allana.logDetails();
var marshmallow = new CharAccount("Marshmallow", 1, "oMaioral", 1000);
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
