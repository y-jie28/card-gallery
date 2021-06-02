<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="card in cards" :key="card.id">
      <img :src="thumbUrl(card.filename)">
    </div>
  </div>
</template>

<script>
import cards from '@/cards.json';

export default {
  name: 'Gallery',
  data() {
    return {
      cards,
    };
  },
  methods: {
    thumbUrl(filename) {
      return require(`../../public/assets/images/thumbnails/${filename}`);
    },
  },
}
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  max-width: 80rem;
  margin: 5rem auto;
  padding: 0 5rem;
}

.gallery-panel img {
  width: 100%;
  height: 100%;
  /* height: 22vw; */
  object-fit: cover;
  border-radius: 0.75rem;
}

</style>