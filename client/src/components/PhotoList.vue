<template>
  <div class="container">
    <h1 class="h3 mb-3 fw-normal"><i class="fas fa-list"></i> Photo list</h1>
    <button type="button" class="btn btn-primary"><i class="fas fa-plus"></i> Create New</button>
    <table class="table">
        <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Album</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">URL</th>
              <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="photo in photos" v-bind:key="photo.id">
              <th scope="row">{{photo.id}}</th>
              <td>Album #{{photo.id}}</td>
              <td>{{photo.title}}</td>
              <td><img v-bind:src="photo.thumbnailUrl" onerror='this.src="https://maidcleantx.com/wp-content/uploads/2017/10/logo.png"' class="img-thumbnail"></td>
              <td><a v-bind:href="photo.url">{{photo.url}}</a></td>
              <td><button type="button" class="btn btn-success"><i class="fas fa-pen"></i> Edit</button>&nbsp;
              <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i> Delete</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "PhotoList",
    props: ['photos']
}
</script>

<style>

</style>