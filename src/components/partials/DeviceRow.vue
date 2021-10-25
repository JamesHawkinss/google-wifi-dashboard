<template>
    <div class="deviceRow">
        <p class="title">{{ device.friendlyName }}</p>
        <p class="subtitle">{{ device.friendlyType }}</p>
        <p>{{ traffic }}</p>
    </div>
</template>

<style scoped>
.deviceRow {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
}

.title {
    color: #fff;
    margin: 0;
}

.subtitle {
    color: #9aa0a6;
    margin: 0;
    margin-top: .25rem;
}
</style>

<script>
export default {
    data() {
        return {
            traffic: {}
        }
    },
    props: {
        device: {
            type: Object
        }
    },
    watch: {
        "$store.state.realtimeMetrics"(newValue) {
            this.getTraffic()
        }
    },
    methods: {
        getTraffic() {
            if (!this.device.connected) return this.traffic = 'disconnected'; 

            const find = this.$store.state.realtimeMetrics?.stationMetrics.find((i) => i.station.id === this.device.id);
            if (find && find.traffic) {
                this.traffic = find.traffic;
            }
        }
    }
}
</script>