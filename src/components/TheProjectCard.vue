<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { ProjectCard } from "@/types/projects";

const props = defineProps<{
    card: ProjectCard;
    categories: string[];
}>()

const imgScrollPosX = ref(10.0);
let scrollInterval: number | null = null;

/**
 * Only first letter of string.
 *
 * @param str String to get first letter from.
 */
const firstLetter = (str: string) => {
    return str.charAt(0);
}

/**
 * Scroll the image slowly.
 */
const scrollImg = () => {
    const card = document.getElementById(`card-${props.card.id}`) as HTMLElement;
    const imgContainer = card.querySelector(".project-card__img-container") as HTMLElement;
    const imgScroll = card.querySelector(".project-card__img-scroll") as HTMLElement;

    const imgContainerRightEdge = imgContainer.getBoundingClientRect().right;
    const imgScrollRightEdge = imgScroll.getBoundingClientRect().right;

    if (scrollInterval !== null || imgScrollRightEdge <= imgContainerRightEdge) {
        return;
    }

    imgScrollPosX.value -= 6;

    scrollInterval = setInterval(() => {
        imgScrollPosX.value -= 6;

        const imgContainerRightEdge = imgContainer.getBoundingClientRect().right;
        const imgScrollRightEdge = imgScroll.getBoundingClientRect().right;

        if (imgScrollRightEdge <= imgContainerRightEdge) {
            stopScroll();
        }
    }, 200);
}

/**
 * Stop scrolling the image.
 */
const stopScroll = (): void => {
    if (scrollInterval === null) {
        return;
    }

    clearInterval(scrollInterval);
    scrollInterval = null;
}

/**
 * Stop scrolling the image.
 */
const resetImgScroll = (): void => {
    imgScrollPosX.value = 10;
}

/**
 * Stop scrolling the image.
 */
const stopScrollImg = (): void => {
    stopScroll();
    resetImgScroll();
}
</script>

<template>
    <router-link
        class="project-card__link"
        to="/"
        @mouseover="scrollImg"
        @mouseleave="stopScrollImg"
        :id="'card-' + card.id"
    >
        <article class="project-card">
            <div
                class="project-card__img-container"
                :style="{ backgroundColor: card.color }"
            >
                <div class="project-card__img-scroll" :style="{ left: imgScrollPosX + 'px' }">
                    <img
                        v-for="(image, i) in card.images"
                        :key="i"
                        class="project-card__img"
                        :src="image" alt=""
                        loading="lazy"
                    />
                </div>
            </div>

            <div class="project-card__info">
                <h3 class="project-card__title">
                    <span class="project-card__title-detail">
                        {{ firstLetter(card.name) }}
                    </span>
                    {{ card.name }}
                </h3>

                <div class="project-card__categories">
                    <div
                        v-if="card.category.includes('design')"
                        class="project-card__category project-card__category--design"
                        :class="{ 'project-card__category--active': categories.includes('design') }"
                    >
                        <img src="@/assets/icons/palette-solid.svg" alt="Design" />
                    </div>
                    <div
                        v-if="card.category.includes('development')"
                        class="project-card__category project-card__category--development"
                        :class="{ 'project-card__category--active': categories.includes('development') }"
                    >
                        <img src="@/assets/icons/code-solid.svg" alt="Utveckling" />
                    </div>
                    <div
                        v-if="card.category.includes('project')"
                        class="project-card__category project-card__category--project"
                        :class="{ 'project-card__category--active': categories.includes('project') }"
                    >
                        <img src="@/assets/icons/diagram-project-solid.svg" alt="Projektledning" />
                    </div>
                </div>
            </div>
        </article>
    </router-link>
</template>

<style lang="scss">
.project-card {
    display: flex;
    flex-direction: column;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.03);
        z-index: 2;
    }

    &__link {
        text-decoration: none;
        color: $black;
    }

    &__img-container {
        position: relative;
        width: 100%;
        height: 250px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
    }

    &__img-scroll {
        position: absolute;
        display: flex;
        gap: 1.5rem;
        height: 95%;
        bottom: -10px;
        left: 10px;
        transition: all .2s linear;
    }

    &__img {
        height: 100%;
        border-radius: 8px;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .6rem;
    }

    &__title {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin: 0;
        font-weight: 500;
        font-size: 1rem;

        &-detail {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.4rem;
            width: 1.4rem;
            font-size: .7rem;
            font-weight: 400;
            text-transform: uppercase;
            background-color: black;
            color: white;
            border-radius: 100%;
        }
    }

    &__categories {
        height: 100%;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    &__category {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        width: 1.4rem;
        background-color: black;
        font-size: .5rem;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 100%;
        transition: all .2s ease-in-out;

        &--active {
            &.project-card__category {
                &--design {
                    background-color: $accent-purple;
                }

                &--development {
                    background-color: $accent-pink;
                }

                &--project {
                    background-color: $accent-blue;
                }
            }
        }

        img {
            height: .6rem;
            filter: invert(1);
        }
    }
}
</style>