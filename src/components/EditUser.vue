<template>
    <div>
        <div v-if="!users" class="alert alert-warning">
            Загрузка...
        </div>
        <div class="container">
            <div class="form-group">
                <label>ID</label>
                <input type="text" class="form-control" v-model="users.id" />
            </div>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" v-model="users.firstName" />
            </div>
            <div class="form-group">
                <p>Last Name</p>
                <input type="text" class="form-control" v-model="users.lastName" />
            </div>
            <div class="form-group">
                <p>Company</p>
                <input type="text" class="form-control" v-model="users.company" />
            </div>
            <div class="form-group">
                <p>Phone Number</p>
                <input type="text" class="form-control" v-model="users.phone" />
            </div>
            <div class="form-group">
                <p>Email</p>
                <input type="text" class="form-control" v-model="users.address" />
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import USERS from '../components/Users.vue'

    export default {
        name: "UserForm",
        props: {
            users: {
                type: Object,
                required: true
            }
        },
        comments: {
            'edit-user': USERS
        },
        mounted: function() {
            this.loadData()
        },
        methods: {
            loadData: function () {
                axios
                    .get('http://localhost:3001/users/')
                    .then(response => {

                        this.users = response.data[2]
                    })
            }
        }
    }
</script>

<style scoped>

</style>