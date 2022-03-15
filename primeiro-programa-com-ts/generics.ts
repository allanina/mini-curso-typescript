// S = STATE
// T = TYPE
// K = KEY
// V = VALUE
// E = ELEMENT


//define uma letra que representará o tipo que aquela função deve ter
//extends vc mantém a regra, porém trava alguns tipos que só podem ser eles, por exemplo nesse caso so pode ser string ou number, mas depois de definido ele é travado
// o = vc define qual é o tipo default


//POSSO TBM USAR TYPE ALIAS PARA DEFINIR OS TIPOS E DEPOIS CHAMAR NA FUNÇÃO
/*type numOrStr = number | string;
function useState<S extends numOrStr = string>() {
    let state: S;

    function getState(){
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}
 */
function useState<S extends number | string = string>() {
    let state: S;

    function getState(){
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

// define o tipo em si, que depois não poderá ser alterado
/* const newState = useState<string>(); */
const newState = useState();


//é string
newState.setState("allanina");
console.log(newState.getState());


//dê erro
newState.setState("marshmallow");
console.log(newState.getState());