<template>
    <div class="nav" @click="$router.push('/')">
        <font-awesome-icon icon="arrow-left" class="icon" />
        <p>GO HOME</p>
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

.icon {
    padding-left: 1rem;
    margin-right: .75rem;
}

p.action {
    color: #84b2ef;
    font-weight: bold;
    cursor: pointer;
}

.title {
    
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>