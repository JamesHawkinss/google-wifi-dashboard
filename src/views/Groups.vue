<template>
    <div>
        <p v-if="!groups">loading groups...</p>
        <p>{{ groups }}</p>
    </div>
</template>

<script>
import { getGoogleWifiApi } from '@/lib/googleWifiApi.js'

export default {
    data() {
        return {
            groups: null
        }
    },
    mounted() {
        this.getGroups();
    },
    methods: {
        async getGroups() {
            this.groups = await getGoogleWifiApi().getGroups();
        }
    }
}
</script>