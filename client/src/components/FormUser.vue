<template>
  <div class="container container-login">
        <main class="form-signin">
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="error.length">
                <strong>Warning!</strong>
                <ul>
                    <li v-for="(item, index) in error" v-bind:key="index">{{item}}</li>
                </ul>
            </div>
            <form @submit.prevent="actionSubmit">
                <i class="fas fa-user-plus" style="font-size: 40px;display:block;"></i>
                <h1 class="h3 mb-3 fw-normal">{{title}}</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        name="email" v-model="email">
                    <label for="floatingInput">Email address</label>
                    
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        name="password" v-model="password">
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">{{button}}</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2021 - Sofyan Setiawan</p>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    name: "FormUser",
    props: {
        type: {
            type: String,
            default: 'login'
        }
    },
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        actionSubmit () {
            this.$emit('submitForm', { email: this.email, password: this.password })
        }
    },
    computed: {
        title(){
            return this.type == "login" ? "Please sign in" : "Please sign up"
        },
        button(){
            return this.type == "login" ? "Sign In" : "Sign Up"
        },
        error(){
            return this.$store.state.error
        }
    }
}
</script>

<style>

</style>