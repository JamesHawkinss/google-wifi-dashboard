<template>
  <div class="network">
    <navigation />
    <network-card />
  </div>
</template>

<style scoped>
.network {
  margin-top: 4rem;
}
</style>

<script>
import IconBubble from "@/components/core/IconBubble.vue";
import NetworkCard from "@/components/core/NetworkCard.vue";
import DevicesCard from '../components/core/DevicesCard.vue';
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
    IconBubble,
    NetworkCard,
    DevicesCard,
    Navigation
  },
};
</script>
    DevicesCard