<template>
  <div class="network">
    <navigation to="/" text="GO HOME" />
    <div v-for="device in $store.state.devices.sort(sortingFunction)" :key="device.id">
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
  methods: {
    sortingFunction(a, b) {
      if (a.connected && !b.connected) {
        return -1;
      } else if (!a.connected && b.connected) {
        return 1;
      } else {
        return 0;
      }
    }
  }
};
</script>