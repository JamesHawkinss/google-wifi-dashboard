<template>
  <div class="network">
    <navigation to="/" text="GO HOME" />
    <div v-if="$store.state.devices.length == 0">
      <p>loading devices</p>
    </div>
    <div
      v-for="device in sortedDevices"
      :key="device.id"
    >
      <device-row :device="device" />
    </div>
  </div>
</template>

<style scoped>
.network {
  margin-top: 4rem;
}
</style>

<script>
import Navigation from "../components/core/Navigation.vue";
import DeviceRow from "../components/partials/DeviceRow.vue";

export default {
  components: {
    Navigation,
    DeviceRow,
  },
  computed: {
    sortedDevices() {
      return this.$store.state.devices.sort((a, b) => {
        return !!b.connected - !!a.connected;
      });
    },
  },
};
</script>