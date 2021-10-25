<template>
  <div class="network">
    <navigation to="/" text="GO HOME" />
    <points-card />
  </div>
</template>

<style scoped>
.network {
  margin-top: 4rem;
}
</style>

<script>
import PointsCard from "@/components/core/PointsCard.vue";
import Navigation from '../components/core/Navigation.vue';

export default {
  data() {
    return {
      status: {
        state: "",
        message: "",
      },
    };
  },
  components: {
    PointsCard,
    Navigation
  },
};
</script>