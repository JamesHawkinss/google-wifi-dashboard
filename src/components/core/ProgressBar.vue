<template>
    <div class="full">
        <div class="progress" :style="{ 'width': `${progress}%` }">
        </div>
    </div>
</template>

<style scoped>
.full {
    background-color: #364555;
    margin: .2rem;
    border-radius: 10rem;
    max-width: 100%;
    margin-top: 1rem;
    margin-right: 1rem;
}

.progress {
    background-color: #6099e8;
    padding: .2rem;
    border-radius: 10rem;
}
</style>

<script>
export default {
    props: {
        progress: {
            type: Number
        }
    }
}
</script>