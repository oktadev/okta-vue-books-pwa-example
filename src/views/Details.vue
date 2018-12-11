<template>
<div class="details">
  <h1>Book Details</h1>
  <div class="content">
    <md-card class="details-card">
      <h3>{{book.title}}</h3>
      <img v-bind:src="getImageSrc()" />
      <h4>Authors</h4>
      <p> {{book.authors}} </p>
      <h4>Published</h4>
      <p>{{book.year}}</p>
    </md-card>
  </div>
</div>
</template>

<script>
export default {
  data: function (){
    return {
      book: {
        title: this.$route.query.title,
        cover_id: this.$route.query.cover_id,
        authors: this.$route.query.authors,
        year: this.$route.query.year,
      }
    }
  },
  methods: {
    getImageSrc() {
      return "http://covers.openlibrary.org/b/OLID/"+this.book.cover_id+"-M.jpg"
    }
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}

.details-card {
  max-width: 800px;
  padding: 1rem 2rem;
}

.details-card p {
  padding-left: 2rem;
}
</style>
