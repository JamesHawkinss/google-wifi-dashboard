<template>
  <div class="deviceRow">
    <p class="title">{{ device.friendlyName }}</p>
    <p class="subtitle" :style="{ 'font-weight': 'bold' }">
      {{ device.friendlyType }}
    </p>
    <p class="subtitle" v-if="metrics.speed">
      {{ metrics.speed.expandedSpeedText }}
    </p>
    <p class="subtitle" v-if="!device.connected">Disconnected</p>
    <div v-if="metrics.traffic">
      <div class="metrics">
        <p class="subtitle">
          <font-awesome-icon icon="arrow-down" />
          {{
            metrics.traffic.receiveSpeedBps
              ? (metrics.traffic.receiveSpeedBps / 1000 / 1000).toPrecision(3)
              : 0
          }}
          Mbps
        </p>
        <p class="subtitle">
          <font-awesome-icon icon="arrow-up" />
          {{
            metrics.traffic.transmitSpeedBps
              ? (metrics.traffic.transmitSpeedBps / 1000 / 1000).toPrecision(3)
              : 0
          }}
          Mbps
        </p>
      </div>
      <progress-bar :progress="percentage || 0" />
    </div>
  </div>
</template>

<style scoped>
.deviceRow {
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 40rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  text-align: left;
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

.metrics {
  display: flex;
  flex-direction: row;
}
</style>

<script>
import ProgressBar from "@/components/core/ProgressBar.vue";

export default {
  data() {
    return {
      metrics: {},
      connected: null,
    };
  },
  components: {
    ProgressBar,
  },
  props: {
    device: {
      type: Object,
    },
  },
  watch: {
    "$store.state.realtimeMetrics"() {
      this.getMetrics();
    },
  },
  computed: {
    percentage() {
      const { transmitSpeedBps, receiveSpeedBps } = this.metrics.traffic;
      return (
        (Number(receiveSpeedBps) /
          (Number(transmitSpeedBps) + Number(receiveSpeedBps))) *
        100
      );
    },
  },
  mounted() {
    this.getMetrics();
  },
  methods: {
    getMetrics() {
      if (!this.device.connected) return;
      if (!this.$store.state.realtimeMetrics?.stationMetrics) return;

      const find = this.$store.state.realtimeMetrics?.stationMetrics.find(
        (i) => i.station.id === this.device.id
      );
      if (find) this.metrics = find;
    },
  },
};
</script>