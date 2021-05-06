<template>
  <div>
      <FormUser :type="type" @submitForm="register" :error='error'/>
  </div>
</template>

<script>
import FormUser from '@/components/FormUser.vue'
export default {
    name: "Register",
    data(){
        return {
            type: "register",
            error: {}
        }
    },
    methods: {
        register (values) {
            this.$store.dispatch('register', values)
        }
    },
    components: {
        FormUser
    }
}
</script>

<style>

</style>