const {createApp} = Vue;


createApp({

    data(){
        return{
            apiUrl: './server.php',
            todoList: [],
            newTask:'',
            
        }
    },
    
    methods:{
        printList(){
            axios.get(this.apiUrl)
            .then(res =>{
                this.todoList = res.data
                console.log(res.data);
            })
        },
        
    },

    mounted(){
        this.printList()
    }
}).mount('#app')


