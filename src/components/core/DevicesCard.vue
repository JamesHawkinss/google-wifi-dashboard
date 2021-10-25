<template>
    <div class="card">
        <div class="title">
            <font-awesome-icon icon="laptop" class="icon" />
            <p>DEVICES</p>
        </div>
        <div class="content" v-for="device in $store.state.devices.filter((d) => d.connected).slice(0, 3)" :key="device.id">
            <div class="row">
                <device-row :friendlyName="device.friendlyName" :friendlyType="device.friendlyType" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 2px solid #595c61;
    border-radius: .5rem;
    margin: 0 auto;
    max-width: 40rem;
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
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

<script>
import DeviceRow from '../partials/DeviceRow.vue'

export default {
    components: {
        DeviceRow
    },
    methods: {
        runSpeedTest() {
            console.log('gotta get an ap id first')
        }
    }
}
</script>