<template>
    <div class="deviceRow">
        <p class="title">{{ friendlyName }}</p>
        <p class="subtitle">{{ friendlyType }}</p>
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
    props: {
        friendlyName: {
            type: String
        },
        friendlyType: {
            type: String
        }
    }
}
</script>