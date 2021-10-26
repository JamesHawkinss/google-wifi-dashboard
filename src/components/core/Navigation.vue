<template>
    <div class="nav" @click="$router.push(to)">
        <font-awesome-icon icon="arrow-left" class="icon" />
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
.nav {
    border: 2px solid #595c61;
    border-radius: .5rem;
    margin: 0 auto;
    max-width: 40rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: row;
    
    align-items: center;
    text-align: left;

    cursor: pointer;
}

.nav:hover .icon {
    transform: translateX(-.3rem);
}

.icon {
    padding-left: 1rem;
    margin-right: .75rem;
}
</style>

<script>
export default {
    props: {
        to: {
            type: String
        },
        text: {
            type: String
        }
    }
}
</script>