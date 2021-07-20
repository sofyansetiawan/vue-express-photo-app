<template>
  <div class="home">
    <loading :active="loading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
    <PhotoList v-if="!loading" :photos="photos"/>
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'Home',
  components: {
    PhotoList,
    Loading
  },
  computed: {
    photos(){
      return this.$store.state.photos
    },
    loading(){
      return this.$store.state.loading
    }
  },
  created(){
    this.$store.dispatch("fetchPhotos")
    this.$store.dispatch('resetError')
    document.title = "Home | Photo App";
  }
}
</script>