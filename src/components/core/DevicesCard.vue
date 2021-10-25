<template>
  <div class="card">
    <div class="title" @click="$router.push('/devices')">
      <font-awesome-icon icon="laptop" class="icon" />
      <p>DEVICES</p>
    </div>
    <div
      class="content"
      v-for="device in $store.state.devices.sort(sortingFunction).slice(0, 3)"
      :key="device.id"
    >
      <div class="row">
        <device-row :device="device" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid #595c61;
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 40rem;
}

.icon {
  margin-right: 0.75rem;
}

p.action {
  color: #84b2ef;
  font-weight: bold;
  cursor: pointer;
}

.title {
  display: flex;
  flex-direction: row;

  align-items: center;

  border-bottom: 2px solid #595c61;
  padding-left: 1rem;
  text-align: left;

  cursor: pointer;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

<script>
import DeviceRow from "../partials/DeviceRow.vue";

export default {
  components: {
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
    },
  },
};
</script>