<template>
  <div class="home">
    <p v-if="status.state">{{ `${status.state}: ${status.message}` }}</p>
    <h1 v-text="$store.state.privateSsid" />
    <p>
      Here's an insightful comment into the overall performance of your network!
    </p>

    <div class="overviewBubbles">
      <icon-bubble
        text="Internet"
        icon="globe"
        :onClick="() => $router.push('/network')"
      />
      <icon-bubble
        :text="`Wifi devices (${$store.state.wifiDevices.length})`"
        icon="network-wired"
        :onClick="() => $router.push('/points')"
      />
      <icon-bubble
        :text="`Devices (${
          $store.state.devices.filter((d) => d.connected).length
        })`"
        icon="laptop"
        :onClick="() => $router.push('/devices')"
      />
    </div>

    <div v-for="card in $store.state.insightCards" :key="card.id">
      <div v-if="card.category != 'INFO'">
        <insight-card :card="card" />
      </div>
    </div>

    <network-card />
    <devices-card />
  </div>
</template>

<style scoped>
.home {
  margin-top: 4rem;
}

.overviewBubbles {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;

  max-width: 45rem;
  margin: 0 auto;

  padding-bottom: 2rem;
}

p {
  color: #9aa0a6;
  font-weight: bold;
}
</style>

<script>
import IconBubble from "@/components/core/IconBubble.vue";
import NetworkCard from "@/components/core/NetworkCard.vue";
import DevicesCard from "../components/core/DevicesCard.vue";
import InsightCard from "@/components/core/InsightCard.vue";

export default {
  data() {
    return {
      status: {
        state: "",
        message: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("updateData");
  },
  components: {
    IconBubble,
    NetworkCard,
    DevicesCard,
    InsightCard
  },
};
</script>
    DevicesCard