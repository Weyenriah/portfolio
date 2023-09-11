<script lang="ts" setup>
import { onMounted, ref } from "vue";

const isScrolled = ref<boolean>(false);

onMounted(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            isScrolled.value = true;
        } else {
            isScrolled.value = false;
        }
    });
})
</script>

<template>
    <nav
        class="navigation"
        :class="{ 'navigation--scrolled': isScrolled }"
    >
        <router-link
            to="/"
            class="navigation__link"
        >
            Hem
        </router-link>
        <router-link
            to="/case"
            class="navigation__link"
        >
            Case
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    transition: all 0.3s ease-in-out;

    &--scrolled {
        background-color: $primary;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);

        .navigation__link {
            color: $secondary;
        }
    }

    &__link {
        color: $white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        &.router-link-active {
            transform: scale(1.1);
        }
    }
}
</style>