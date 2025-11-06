<template>
  <section class="contact">
    <div class="contact__container">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :viewport-once="true"
        :transition="{ duration: 600 }"
        class="contact__header"
      >
        <h2 class="contact__title">Let's Connect</h2>
        <p class="contact__subtitle">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div class="contact__grid">
        <a
          v-motion
          href="https://linkedin.com/in/felicia-wallin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :viewport-once="true"
          :transition="{ duration: 500, delay: 100 }"
          :hovered="{ y: -8, scale: 1.05 }"
          :tapped="{ scale: 0.98 }"
        >
          <div class="contact-card__content">
            <div class="contact-card__inner">
              <div class="contact-card__icon-wrapper">
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="contact-card__icon"
                  :style="{ color: 'var(--accent-blue)' }"
                />
              </div>
              <h3 class="contact-card__title">LinkedIn</h3>
              <p class="contact-card__description">Connect professionally</p>
            </div>
          </div>
        </a>

        <a
          v-motion
          href="mailto:felicia@wallin.design"
          class="contact-card"
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :viewport-once="true"
          :transition="{ duration: 500, delay: 200 }"
          :hovered="{ y: -8, scale: 1.05 }"
          :tapped="{ scale: 0.98 }"
        >
          <div class="contact-card__content">
            <div class="contact-card__inner">
              <div class="contact-card__icon-wrapper">
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="contact-card__icon"
                  :style="{ color: 'var(--accent-blue)' }"
                />
              </div>
              <h3 class="contact-card__title">Email</h3>
              <p class="contact-card__description">Send me a message</p>
            </div>
          </div>
        </a>

        <a
          v-motion
          href="https://github.com/Weyenriah"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :viewport-once="true"
          :transition="{ duration: 500, delay: 300 }"
          :hovered="{ y: -8, scale: 1.05 }"
          :tapped="{ scale: 0.98 }"
        >
          <div class="contact-card__content">
            <div class="contact-card__inner">
                <div class="contact-card__icon-wrapper">
                    <font-awesome-icon
                      :icon="['fab', 'github']"
                      class="contact-card__icon"
                      :style="{ color: 'var(--accent-blue)' }"
                    />
                </div>
              <h3 class="contact-card__title">GitHub</h3>
              <p class="contact-card__description">View my code</p>
            </div>
          </div>
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }"
        :viewport-once="true"
        :transition="{ duration: 600, delay: 400 }"
        class="contact__footer"
      >
        <p>© 2025 Felicia. Crafted with passion.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 1.5rem 5rem 1.5rem; // py-20 px-6
}

.contact__container {
  max-width: 56rem; // max-w-4xl
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.contact__header {
  text-align: center;
  margin-bottom: 4rem; // mb-16
}

.contact__title {
  font-size: 3rem; // text-5xl
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem; // mb-6

  @media (min-width: 768px) {
    font-size: 3.75rem; // md:text-6xl
  }
}

.contact__subtitle {
  font-size: 1.25rem; // text-xl
  color: #d1d5db; // text-gray-300
  max-width: 42rem; // max-w-2xl
  margin-left: auto;
  margin-right: auto;
}

.contact__grid {
  display: grid;
  gap: 1.5rem; // gap-6

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // md:grid-cols-3
  }
}

.contact-card {
  position: relative;
  text-decoration: none;
  color: inherit;

  // Replaces 'group' logic
  &:hover {
    .contact-card__glow {
      opacity: 1;
    }
  }
}

.contact-card__content {
  padding: 2rem; // p-8
  border-radius: 1rem; // rounded-2xl
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
}

.contact-card__glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  /* v-motion handles opacity on hover */
}

.contact-card__inner {
  position: relative;
  z-index: 10;
}

.contact-card__icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem; // w-16
  height: 4rem; // h-16
  border-radius: 9999px; // rounded-full
  margin-bottom: 1rem; // mb-4
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(167, 139, 250, 0.1);
}

.contact-card__icon {
  width: 2rem; // w-8
  height: 2rem; // h-8
  font-size: 2rem; // Make Font Awesome icon correct size
  line-height: 1;
}

.contact-card__title {
  font-size: 1.25rem; // text-xl
  margin-bottom: 0.5rem; // mb-2
  color: white;
}

.contact-card__description {
  color: #9ca3af; // text-gray-400
}

.contact__footer {
  text-align: center;
  margin-top: 4rem; // mt-16
  color: #6b7280; // text-gray-500
}
</style>