var vue = new Vue({
    el: '#app',
    data: {
        title: 'todo List with vue.js',
        list: [{
                text: 'do homework',
                isDone: false
            }, {
                text: 'learn drive',
                isDone: false
            }

        ],
        newItem: ""
    },
    computed: {
        doneItemsCount: function() {
            return this.list.filter(item => item.isDone).length;
        },
        doingItemsCount: function() {
            return this.list.filter(item => !item.isDone).length;
        }
    },
    methods: {
        addItem: function() {
            if (this.newItem) {
                this.list.push({
                    text: this.newItem,
                    isDone: false
                });
                this.newItem = '';
            }
        },
        removeItem: function(index) {
            this.list.splice(index, 1);
        },
        complete: function(index) {
            this.list[index].isDone = !this.list[index].isDone;
        }
    }
})
