<script lang="ts" setup>
</script>

<template>
    <article class="hero">
        <div class="hero__content">
            <h1>Under konstruktion.</h1>
            <router-link class="hero__cta" to="/case">
                Men kolla min case
            </router-link>
        </div>

        <a href="#projects">
            <font-awesome-icon class="hero__down" icon="fa-solid fa-arrow-down" />
        </a>
    </article>
</template>

<style lang="scss">
.hero {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: $secondary;
    border-bottom-right-radius: 90%;

    // On smaller screens, make the border radius less
    @media (max-width: 768px) {
        border-bottom-right-radius: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: $white;
        font-size: 5rem;
        font-weight: 100;
        margin: 0;
    }

    &__cta {
        display: block;
        width: fit-content;
        background-color: $white;
        color: $black;
        text-decoration: none;
        padding: .5rem 1.5rem;
        border-radius: 30px;
        text-align: center;
        margin-top: 2rem;
        transition: all .2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    &__down {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2rem;
        color: $secondary;
        animation: bounce 3s ease-in-out infinite;

        // On smaller screens, make the font size smaller
        @media (max-width: 768px) {
            font-size: 1.5rem;
            left: inherit;
            right: 1rem;
            bottom: 5.5rem;
            transform: translateX(0);
        }
    }
}

@keyframes bounce {
    0% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(.5rem);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}
</style>