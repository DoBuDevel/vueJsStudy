Vue.component('todo-item',{
    template:'<li>This is a todo</li>'
})

// parent component
var app = new Vue ({
    el: '#app'
});

//app.todos.push({text:'Learn Go langs~'})