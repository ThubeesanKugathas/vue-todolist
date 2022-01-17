new Vue({
    el: '#app',
    data: {
        todoList: [
            {
                testo: 'Fare la Spesa',
                done: true
            },
            {
                testo: 'Fare la Spesa',
                done: false
            },
            {
                testo: 'Fare la Spesa',
                done: false
            },
        ],
        temporaryInputTodo: {
            testo: '',
            done: false
        },
    },
    methods: {
        // push nuovo object nell'array
        addTodo: function () {
            this.todoList.push(this.temporaryInputTodo);
            this.temporaryInputTodo= {
                testo: '',
                done: false
            }
        },
        // splice obejct dall'array
        removeTodo: function(index) {
            this.todoList.splice(index, 1);
        },
        // funzione che cambia proprietà al key "done" degli oggetti
        doneUndone: function(index) {
            this.todoList[index].done = !this.todoList[index].done;
        }
    }
});