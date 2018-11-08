var app = new Vue ({
    el: '#app',
    data : {
       todos :[
           {text :'Learn Javascript'},
           {text :'Learn Vue'},
           {text :'Build someting awesome'}
       ]
    }
});

app.todos.push({text:'Learn Go langs~'})