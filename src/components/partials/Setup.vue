<template>
  <div>
    <p v-if="status.state">{{ `${status.state}: ${status.message}` }}</p>
    <input v-model="refreshToken" />
    <button @click="setup()">submit</button>
  </div>
</template>

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
        this.status = { state: "loading", message: "setting up" };

        const res = await setupGoogleWifiApi(this.refreshToken);

        if (res) this.$store.commit('setLoggedIn', true);
        this.status = { state: "", message: "" };
      } catch (e) {
        this.status = { state: "error", message: e.message };
      }
    },
  },
};
</script>