<template>
  <div class="home">
    <p v-if="status.state">{{ `${status.state}: ${status.message}` }}</p>
    {{ groupIds }}
    {{ groupStatus }}
  </div>
</template>

<script>
import { getGoogleWifiApi } from "@/lib/googleWifiApi.js";

export default {
  data() {
    return {
      status: {
        state: "",
        message: "",
      },
      groups: {},
      groupIds: [],
      groupStatus: {}
    };
  },
  async mounted() {
    this.status = { state: "loading", message: "loading group information" };
    await this.getGroupIds();
    await this.getStatus(this.groupIds[0]);
    this.status = { state: "", message: "" };
  },
  methods: {
    getGoogleWifiApi() {
      return getGoogleWifiApi();
    },
    async getGroupIds() {
      try {
        const groups = await getGoogleWifiApi().getGroups();
        groups.groups.forEach((grp) => this.groupIds.push(grp.id));
      } catch (e) {
        this.status = { state: 'error', message: e.message };
      }
    },
    async getStatus(groupId) {
      try {
        this.groupStatus = await getGoogleWifiApi().getGroupStatus(groupId);
      } catch (e) {
        this.status = { state: 'error', message: e.message };
      }
    },
  },
};
</script>
