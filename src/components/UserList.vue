<template>
    <div>
        <div v-if="!userlist.length" class="alert alert-warning">
            Загрузка...
        </div>
        <table v-else class="table table-hover">
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Company</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in userlist" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName}}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th colspan="8">
                    Total users: {{ totalUsers }}
                </th>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

    export default {
        name: "UserList",
        props: {
            userlist: {
                type: Array,
                required: true
            }

        },
        data() {
            return {
                users: [],
            }
        },
        computed: {
            haveUsers() {
                return this.userlist.length > 0
            },
            totalUsers() {
                return this.userlist.length
            }
        }
    }
</script>

<style scoped>

</style>