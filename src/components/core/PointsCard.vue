<template>
    <div class="card">
        <div class="content" v-for="point in $store.state.wifiDevices" :key="point.id">
            <h3>{{ point.accessPointSettings.accessPointOtherSettings.apName }}</h3>
            <p>Room: {{ point.accessPointSettings.accessPointOtherSettings.roomData.name }}</p>
            <p>Light: {{ point.accessPointSettings.lightingSettings.intensity ? point.accessPointSettings.lightingSettings.intensity + '%' : 'off' }}</p>
            <p>Local IP: {{ point.accessPointProperties.ipAddress }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 2px solid #595c61;
    border-radius: .5rem;
    margin: 0 auto;
    max-width: 40rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    text-align: left;
}

.content {
    padding-left: 1.5rem;
}

.icon {
    margin-right: .75rem;
}

.title {
    display: flex;
    flex-direction: row;
    
    align-items: left;

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
import SpeedTestResult from '@/components/partials/SpeedTestResult.vue'
import { getGoogleWifiApi } from '@/lib/googleWifiApi'

export default {
    components: {
        SpeedTestResult
    },
    methods: {
        runSpeedTest() {
            console.log('gotta get an ap id first')
        }
    }
}
</script>