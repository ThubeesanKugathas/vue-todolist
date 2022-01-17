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
        addTodo: function () {
            this.todoList.push(this.temporaryInputTodo);
            this.temporaryInputTodo= {
                testo: '',
                done: false
            }
        },
        removeTodo: function(index) {
            this.todoList.splice(index, 1);
        }
    }
});