<template>
  <div class="home">
    <PhotoList :photos="photos"/>
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
export default {
  name: 'Home',
  components: {
    PhotoList
  },
  computed: {
    photos(){
      return this.$store.state.photos
    }
  },
  created(){
      this.$store.dispatch("fetchPhotos")
  }
}
</script>
