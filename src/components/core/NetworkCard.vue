<template>
    <div class="card">
        <div class="title" @click="$router.push('/network')">
            <font-awesome-icon icon="wifi" class="icon" />
            <p>NETWORK</p>
        </div>
        <div class="content">
            <div class="row">
                <speed-test-result backgroundColor="#35483e" :speed="($store.state.speedTestResults.receiveWanSpeedBps / 1000 / 1000).toPrecision(3)" subtext="Mbps download" />
                <speed-test-result backgroundColor="#493955" :speed="($store.state.speedTestResults.transmitWanSpeedBps / 1000 / 1000).toPrecision(3)" subtext="Mbps upload" />
            </div>
            <p>Your last speed test was on {{ new Date($store.state.speedTestResults.timestamp).toDateString() }}</p>
            <!-- <p class="action" @click="runSpeedTest()">Run speed test</p> -->
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
}

.icon {
    margin-right: .75rem;
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
import SpeedTestResult from '@/components/partials/SpeedTestResult.vue'
import { getGoogleWifiApi } from '@/lib/googleWifiApi'

export default {
    components: {
        SpeedTestResult
    },
    methods: {
        async runSpeedTest() {
            const apId = this.$store.state.realtimeMetrics.meshMetrics[0].apId
            
            if (apId) {
                const res = await getGoogleWifiApi().requestAccessPointLocalSpeedTest(apId);
                console.log(res);
            }
        }
    }
}
</script>