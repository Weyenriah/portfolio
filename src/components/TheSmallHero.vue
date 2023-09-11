<script lang="ts" setup>
    defineProps<{
        title: string;
    }>()
</script>

<template>
    <article class="small-hero">
        <div class="small-hero__background">
            <h1 class="small-hero__title small-hero__title--accent" aria-hidden="true">
                {{ title }}
            </h1>
        </div>
        <h1 class="small-hero__title">
            {{ title }}
        </h1>
    </article>
</template>

<style lang="scss" scoped>
.small-hero {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    height: 35vh;
    width: 100%;

    &__background {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: $secondary;
        border-bottom-right-radius: 100%;
        overflow: hidden;
    }

    &__title {
        margin: 0;
        color: $black;
        text-transform: uppercase;
        font-size: 10rem;
        font-weight: 100;
        padding: 0 5rem 0 0;

        span {
            margin-right: 1rem;
        }

        &--accent {
            color: $white;
        }
    }

    @media (max-width: 768px) {
        &__title {
            font-size: 7rem;
            padding: 0 2rem;
        }
    }
}
</style>