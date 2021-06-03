<template>
  <div class="lightbox" @click.self="closeLightbox">

    <img :src="cardUrl(card.filename)">

      <div class="lightbox-info">
        <div class="lightbox-info-inner">
        Info
        </div>
      </div>
  </div>
</template>

<script>
import cards from '@/cards.json';

export default {
  name: 'Card',
  data() {
    return {
      cards,
    };
  },
  methods: {
    cardUrl(filename) {
      return require(`../../public/assets/images/${filename}`);
    },
    closeLightbox() {
      this.$router.push('/');
    }
  },
  computed: {
    card() {
      return this.cards.find(card => card.id === Number(this.$route.params.id));
    },
  }
}
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
  border: #F1ECE7 2px solid;
}

.lightbox-info {
  margin: auto 2rem auto 0;
}

.lightbox-info-inner {
  background-color: #FFFFFF;
  display: inline-block;
  padding: 2rem;
}
</style>