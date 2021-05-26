<template>
  <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">PhotoApp</span>
            </a>
            <ul class="nav nav-pills">
                <li class="nav-item" v-if="loginStatus">
                    <router-link v-bind:to="{name : 'Home'}" class="nav-link"><i class="fas fa-list"></i> Photo List</router-link>
                </li>
                <li class="nav-item" v-if="loginStatus">
                    <router-link v-bind:to="{name : 'Home'}" class="nav-link"><i class="fas fa-plus"></i> Create New</router-link>
                </li>
                <li class="nav-item" v-if="!loginStatus">
                    <router-link v-bind:to="{name : 'Login'}" class="nav-link"><i class="fas fa-sign-in-alt"></i> Sign In</router-link>
                </li>
                <li class="nav-item" v-if="!loginStatus">
                    <router-link v-bind:to="{name : 'Register'}" class="nav-link"><i class="fas fa-user-plus"></i> Sign Up</router-link>
                </li>
                <li class="nav-item" v-if="loginStatus">
                    <a href="#" @click="logout" class="nav-link"><i class="fas fa-sign-out-alt"></i> Sign Out</a>
                </li>
            </ul>
        </header>
    </div>
</template>

<script> 
export default {
    name: "Navbar",
    props: ["menuLogin"],
    data(){
        return {}
    },
    computed: {
      loginStatus(){
        return this.$store.state.login
      }
    },
    methods: {
        logout () {
            this.$store.dispatch("logout")
        }
    }
}
</script>

<style>

</style>