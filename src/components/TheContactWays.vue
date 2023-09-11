<script lang="ts" setup>
</script>

<template>
    <article class="contact-ways">
        <a
            class="contact-ways__link"
            href="mailto:felicia@wallin.design?subject=Let us work together!"
            target="_blank"
            aria-label="Mejla mig!"
        >
            <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>

        <a
            class="contact-ways__link"
            href="https://www.linkedin.com/in/felicia-wallin/"
            target="_blank"
            aria-label="Kolla in min LinkedIn-profil!"
        >
            <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>

        <a
            class="contact-ways__link"
            href="https://github.com/Weyenriah"
            target="_blank"
            aria-label="Kolla in min GitHub-profil!"
        >
            <font-awesome-icon icon="fa-brands fa-github" />
        </a>

        <!--<a
            class="contact-ways__link"
            href="../assets/cv.pdf"
            target="_blank"
            aria-label="Ladda ner mitt CV!"
        >
            <font-awesome-icon icon="fa-solid fa-file-arrow-down" />
        </a>-->
    </article>
</template>

<style lang="scss">
.contact-ways {
    z-index: 1000;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    &__link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: $secondary;
        border-radius: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
        color: $white;
        font-size: 1.5rem;
        text-decoration: none;
        transition: all .2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    // On smaller screens, make the buttons smaller and make them go in a row
    @media (max-width: 768px) {
        flex-direction: row;
        bottom: 1rem;
        right: 1rem;

        &__link {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
        }
    }
}
</style>