<template>
    <div class="iconBubble" @click="onClick()">
        <div class="bubble">
            <font-awesome-icon :icon="icon" />
        </div>
        <p class="text">{{ text }}</p>
    </div>
</template>

<style>
.iconBubble {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 1rem;
    flex: 1;
    width: 8rem;
    max-width: 100%;
}

.bubble {
    width: 4rem;
    height: 4rem;
    
    margin-bottom: .5rem;

    font-size: 2rem;

    border-radius: 100%;
    background-color: #374455;
    color: #81b4f3;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}

.text {
    color: #9aa0a6;
    font-weight: bold;
    flex-direction: row;

    margin: 0;
}
</style>

<script>
export default {
    props: {
        text: {
            type: String
        },
        icon: {
            type: String
        },
        statusColor: {
            type: String
        },
        onClick: {
            type: Function
        }
    }
}
</script>