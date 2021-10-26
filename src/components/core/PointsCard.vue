<template>
  <div class="card">
    <div
      class="content"
      v-for="point in $store.state.wifiDevices"
      :key="point.id"
    >
      <p class="title">
        {{ point.accessPointSettings.accessPointOtherSettings.apName }}
      </p>
      <p class="subtitle">
        {{ point.accessPointSettings.accessPointOtherSettings.roomData.name }}
      </p>
      <p class="subtitle">
        {{ getConnectionStatus(point.id) }}
      </p>
      <p class="subtitle">
        Light: {{ point.accessPointSettings.lightingSettings.intensity || 0 }}%
      </p>
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

  display: flex;
  flex-direction: column;
  text-align: left;
}

.content {
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.icon {
  margin-right: 0.75rem;
}

.title {
  color: #fff;
  margin: 0;
}

.subtitle {
  color: #9aa0a6;
  margin: 0;
  margin-top: 0.25rem;
  font-size: 80%;
  padding-right: 1rem;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

<script>
import SpeedTestResult from "@/components/partials/SpeedTestResult.vue";

export default {
  components: {
    SpeedTestResult,
  },
  methods: {
    getConnectionStatus(apId) {
      if (!this.$store.state.realtimeMetrics?.meshMetrics) return;

      const find = this.$store.state.realtimeMetrics?.meshMetrics.find(
        (i) => i.apId === apId
      );
      if (!find) return;
      return find.speed.expandedSpeedText;
    }
  },
};
</script>