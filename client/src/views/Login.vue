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