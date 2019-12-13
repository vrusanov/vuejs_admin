<template>
    <div class="container">
        <h2>User List</h2>
        <user-list  v-bind:userlist="users"></user-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import USERLIST from '../components/UserList.vue'

    export default {
        name: "Users",
        components: {
            'user-list': USERLIST,
        },
        data: function () {
            return {
                users: []
            }
        },
        mounted: function() {
          this.loadData()
        },
        methods: {
            loadData: function () {
                // var self = this;
                axios
                    .get('http://localhost:3001/users/')
                    .then(response => {
                        this.users = response.data
                    })
                    // .catch(error => console.log(error))

            }
        }
    }
</script>

<style scoped>

</style>