<template>
  <div class="card">
    <div class="content">
      <h3>{{ card.card.title }}</h3>
      <p class="subtitle">{{ card.card.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #595c61;
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 40rem;
  margin-bottom: 2rem;
  text-align: left;
}

.content {
  padding: 1rem;
}

h3 {
    margin: 0;
}

.title {
  color: #fff;
  margin: 0;
}

.subtitle {
  color: #9aa0a6;
  margin: 0;
  margin-top: 0.25rem;

  padding-right: 1rem;
}
</style>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>