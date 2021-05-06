<template>
  <div class="home">
    <PhotoList :photos="photos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoList from '@/components/PhotoList.vue'
export default {
  name: 'Home',
  components: {
    PhotoList
  },
  computed: {
    photos(){
      console.log(this.$store.state.photos)
      return this.$store.state.photos
    }
  },
  created(){
      this.$store.dispatch("fetchPhotos") // cara memanggil action di vuex pakai dispatch dan bisa diisi payload di parameter kedua
  }
}
</script>
