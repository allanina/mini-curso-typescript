type Todo = {
    title: string;
    description: string;
    completed: boolean;
}


//Readonly
const todo: Readonly<Todo> = {
    title: "Estudar TypeScript",
    description: "Curso do William Justen",
    completed: false,
};

console.log(todo);

/* todo.completed = true; */


//O partial deixa todas as propriedades opcionais, mas apenas para o fieldstoupdate, e nao pra o ToDo
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2);

///// Pick seleciona apenas as propriedades que eu quero colocar dentro daquele novo tipo
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "Curso React Avançado",
    completed: false,
}

///// Omit: omite certas propriedades que queremos "ocultar"
type TodoPreview2 = Omit<Todo, "description">

//ANULAR MAIS COISAS = PICK  - PEGAR MAIS COISAS = OMIT (é o inverso)           