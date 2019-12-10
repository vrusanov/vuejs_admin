<template>
    <div>
        <h1 style="color: red;">
            Component2
        </h1>
        <div class="container">
            <div class="form-group">
                <label>name</label>
                {{user.name}}
                <input type="text" class="form-control" v-model="user.name" />
            </div>
            <div class="form-group">
                <p>username</p>
                {{user.username}}
                <input type="text" class="form-control" v-model="user.username" />
            </div>
            <div class="form-group">
                <p>email</p>
                {{user.email}}
                <input type="text" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
                <p>address</p>
                {{user.address}}
                <input  type="text" class="form-control" v-model="user.address.street" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UsersComponent"

    }
</script>

<style scoped>

</style>