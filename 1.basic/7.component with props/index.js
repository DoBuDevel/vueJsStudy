// child component
Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

// parent component
var app = new Vue ({
    el: '#app',
    data: {
        groceryList: [
            {id:0, text:'Vegetables'},
            {id:1, text:'Cheese'},
            {id:2, text:'Whatever else humans are suppose to eat'}
        ]
    }
});
