<template>
    <div>
        <div class="container">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="editUser.name" />
            </div>
            <div class="form-group">
                <p>Lastname</p>
                <input type="text" class="form-control" v-model="editUser.username" />
            </div>
            <div class="form-group">
                <p>Email</p>
                <input type="text" class="form-control" v-model="editUser.email" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserForm",
        props: {
            userform: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            editUser: null
        }),
        created() {
            this.editUser = Object.assign({}, this.user)
        }
    }
</script>

<style scoped>

</style>