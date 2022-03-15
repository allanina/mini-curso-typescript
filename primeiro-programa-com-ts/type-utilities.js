var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Readonly
var todo = {
    title: "Estudar TypeScript",
    description: "Curso do William Justen",
    completed: false
};
console.log(todo);
/* todo.completed = true; */
//O partial deixa todas as propriedades opcionais, mas apenas para o fieldstoupdate, e nao pra o ToDo
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Curso React Avançado",
    completed: false
};
//ANULAR MAIS COISAS = PICK  - PEGAR MAIS COISAS = OMIT (é o inverso)           
