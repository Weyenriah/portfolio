<script lang="ts" setup>
import { ref } from "vue";
import TheProjectCard from "@/components/TheProjectCard.vue";
import { projects } from "@/data/projects";

const filteredProjects = ref(projects);
const chosenCategories = ref<string[]>([]);

/**
 * Filter the projects.
 *
 * @param category Category to filter on.
 */
const filter = (category: string) => {
    if (category) {
        if(!chosenCategories.value.includes(category)) {
            chosenCategories.value.push(category);
        } else {
            chosenCategories.value = chosenCategories.value.filter((cat) => {
                return cat !== category;
            });
        }
    }

    if (chosenCategories.value.length === 0) {
        filteredProjects.value = projects;
        return;
    }

    filteredProjects.value = projects.filter((project) => {
        for(let i = 0; i < project.category.length; i++) {
            if (chosenCategories.value.includes(project.category[i])) {
                return true;
            }
        }
        return false;
    });
}
</script>

<template>
    <article class="project-grid" id="projects">
        <div class="project-grid__top">
            <div class="project-grid__filter">
                <a
                    class="project-grid__filter-link project-grid__filter-link--design"
                    href=""
                    @click.prevent="filter('design')"
                    :class="{ 'project-grid__filter-link--active': chosenCategories.includes('design') }"
                >
                    <img src="../assets/icons/check-solid.svg" />
                    Design
                </a>

                <a
                    class="project-grid__filter-link project-grid__filter-link--development"
                    href=""
                    @click.prevent="filter('development')"
                    :class="{ 'project-grid__filter-link--active': chosenCategories.includes('development') }"
                >
                    <img src="../assets/icons/check-solid.svg" />
                    Utveckling
                </a>

                <a
                    class="project-grid__filter-link project-grid__filter-link--project"
                    href=""
                    @click.prevent="filter('project')"
                    :class="{ 'project-grid__filter-link--active': chosenCategories.includes('project') }"
                >
                    <img src="../assets/icons/check-solid.svg" />
                    Projektledning
                </a>
            </div>

            <div class="project-grid__amount">
                <p>
                    {{ filteredProjects.length }} projekt
                </p>
            </div>
        </div>

        <div class="project-grid__grid">
            <TheProjectCard
                v-for="(project, i) in filteredProjects"
                :key="i"
                :card="project"
                :categories="chosenCategories"
            />
        </div>
    </article>
</template>

<style lang="scss">
.project-grid {
    margin-top: 4rem;
    max-width: calc(100vw - 3.5rem);

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 2rem;
    }

    &__amount {
        p {
            margin: 0;
            color: lightgrey;
            text-transform: uppercase;
            font-size: .8rem;
        }
    }

    &__filter {
        position: relative;
        display: flex;
        justify-content: center;
        gap: 1rem;

        &-link {
            display: flex;
            align-items: center;
            gap: .5rem;
            text-decoration: none;
            color: $white;
            font-size: .8rem;
            text-transform: uppercase;
            background-color: black;
            padding: .4rem 1.4rem;
            border-radius: 30px;
            transition: all .2s ease-in-out;

            &--active {
                &.project-grid__filter-link {
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

                img {
                    opacity: 1 !important;
                }
            }

            &--design {
                &:hover {
                    background-color: $accent-purple;
                }
            }

            &--development {
                &:hover {
                    background-color: $accent-pink;
                }
            }

            &--project {
                &:hover {
                    background-color: $accent-blue;
                }
            }

            img {
                height: 1rem;
                filter: invert(1);
                opacity: .5;
                transition: all .2s ease-in-out;
            }
        }

        // On smaller screens make the filter links stack
        @media (max-width: 650px) {
            flex-direction: column;
            align-items: flex-start;
            gap: .5rem;
        }
    }

    @media (max-width: 650px) {
        max-width: 100%;
    }

    &__grid {
        // Grid with three beside each other
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem 1.5rem;
        padding: 2rem;

        // On smaller screens, make the grid two beside each other
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
        }

        // On even smaller screens, make the grid one on top of each other
        @media (max-width: 650px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>