<template>
  <div class="gallery">
    <div v-for="card in cards" :key="card.id">
      <router-link :to="`/card/${card.id}`">
      <img :src="thumbUrl(card.filename)">
      </router-link>
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

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
}

</style>