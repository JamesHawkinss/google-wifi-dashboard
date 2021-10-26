<template>
  <div>
    <h1>Google Wi-Fi: Web Dashboard</h1>
    <p>
      You're going to need a refresh token to view your network.
      <br />
      Click <a target="_blank" href="https://www.angelod.com/onhubauthtool/">here</a> to get one.
    </p>
    <p v-if="status.state">{{ `${status.state}: ${status.message}` }}</p>
    <div class="form">
      <input v-model="refreshToken" placeholder="refreshToken" />
      <button @click="setup()">submit</button>
    </div>
  </div>
</template>

<style scoped>
.form button {
  padding: 1rem;
  border: 1px solid black;
  border-radius: .5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}

.form button:active {
  background-color: #fff;
}

.form input {
  padding: 1rem;
  margin: 0;
  border: 0;

  border-radius: .5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>

<script>
import { setupGoogleWifiApi } from "@/lib/googleWifiApi.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      refreshToken: "",
      status: {
        state: "",
        message: "",
      },
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    async setup() {
      try {
        const res = await setupGoogleWifiApi(this.refreshToken);

        if (!res) return;

        this.$store.commit('setLoggedIn', true);
        this.$store.commit('setRefreshToken', this.refreshToken);
        await this.$store.dispatch('setGroup');
        await Promise.all([
          this.$store.dispatch('setDevices'),
          this.$store.dispatch('getSpeedTestResults'),
          this.$store.dispatch('startRealtimeMetrics')
        ]);
      } catch (e) {
        this.status = { state: "error", message: e.message };
      }
    },
  },
};
</script>