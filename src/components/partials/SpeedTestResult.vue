<template>
    <div class="speedTestResult" :style="{ 'background-color': backgroundColor }" >
        <h1>{{ speed }}</h1>
        <p>{{ subtext }}</p>
    </div>
</template>

<style scoped>
.speedTestResult {
    border-radius: .5rem;
    padding: 1.5rem;
    margin: 1rem;
    width: 100%;
}

h1 {
    margin: 0;
}

p {
    margin: 0;
}
</style>

<script>
export default {
    props: {
        backgroundColor: {
            type: String
        },
        speed: {
            type: String
        },
        subtext: {
            type: String
        }
    }
}
</script>
