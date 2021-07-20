<template>
  <div>
      <FormUser :type="type" @submitForm="login"/>
  </div>
</template>

<script>
import FormUser from '@/components/FormUser.vue'
export default {
    name: "Login",
    data(){
        return {
            type: "login"
        }
    },
    created () {
        document.title = "Login | Photo App";
        this.$store.dispatch('resetError')
    },
    methods: {
        login (values) {
            this.$store.dispatch('login', values)
        }
    },
    components: {
        FormUser
    }
}
</script>

<style>

</style>