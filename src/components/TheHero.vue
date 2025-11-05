<template>
  <section class="hero">
    <div class="hero__orb-container">
      <div
        v-motion
        class="hero__orb"
        :style="{
          top: '25%',
          left: '25%',
          width: '384px',
          height: '384px',
          background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)',
        }"
        :animate="{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }"
        :transition="{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />
      <div
        v-motion
        class="hero__orb"
        :style="{
          bottom: '25%',
          right: '25%',
          width: '384px',
          height: '384px',
          background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
        }"
        :animate="{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }"
        :transition="{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />
    </div>

    <div class="hero__content">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        class="hero__title-container"
      >
        <h1
          v-motion
          class="hero__title"
          :animate="{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }"
          :transition="{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }"
          :style="{
            backgroundImage:
              'linear-gradient(90deg, #ffffff 0%, var(--accent-purple) 25%, var(--accent-blue) 50%, var(--accent-purple) 75%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }"
        >
          Hey there!
        </h1>
      </div>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 200 }"
        class="hero__subtitle"
      >
        I'm Felicia. Designer & Developer crafting beautiful digital experiences
      </p>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 400 }"
        class="hero__description"
      >
        I blend creativity with code to build intuitive, modern interfaces that
        people love to use. Passionate about design systems, user experience, and
        bringing ideas to life.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 600 }"
        class="hero__buttons"
      >
        <a
          v-motion
          href="#projects"
          class="hero__button hero__button--primary"
        >
          <span class="hero__button-text">
            View My Work
          </span>
        </a>
        <a href="#contact" class="hero__button hero__button--secondary">
          <span class="hero__button-text hero__button-text--secondary">
            Get In Touch
          </span>
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 800 }"
        class="hero__scroll-indicator-container"
      >
        <div
          v-motion
          :animate="{
            y: [0, 10, 0],
          }"
          :transition="{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }"
          class="hero__scroll-indicator"
        >
          <font-awesome-icon :icon="['fas', 'arrow-down']" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.hero__orb-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 9999px;
  opacity: 0.2; // This is the base opacity
}

.hero__content {
  position: relative;
  z-index: 10;
  max-width: 56rem; // 896px (max-w-4xl)
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 6rem;
}

.hero__title-container {
  margin-bottom: 2rem;
}

.hero__title {
  font-size: 5.625rem; // ~text-8xl
  line-height: 1;
  margin-bottom: 1rem;
  color: white; // Fallback in case gradient fails
  
  @media (min-width: 768px) {
    font-size: 6.75rem; // ~md:text-9xl
  }
}

.hero__subtitle {
  font-size: 1.25rem; // text-xl
  line-height: 1.75rem;
  color: #d1d5db; // text-gray-300
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem; // md:text-2xl
    line-height: 2rem;
  }
}

.hero__description {
  color: #9ca3af; // text-gray-400
  max-width: 42rem; // max-w-2xl
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.hero__button {
  padding: 1rem 2rem;
  border-radius: 0.75rem; // rounded-xl
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  will-change: transform, border-color;

  &--primary {
    border-color: rgba(255, 255, 255, 0.2); // border-white/20
    background: linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%);
  }

  &--secondary {
    border-color: rgba(255, 255, 255, 0.1); // border-white/10
    background: rgba(255, 255, 255, 0.03);
  }

  &--primary:hover {
    border-color: var(--accent-purple);
  }
  &--secondary:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
}

.hero__button-hover-bg {
  position: absolute;
  inset: 0;
  opacity: 0;
  /* v-motion will handle the opacity on hover */
}

.hero__button-text {
  position: relative; // Ensures text is above the hover-bg
  z-index: 2;
  color: white;

  &--secondary {
    color: #d1d5db; // text-gray-300
  }
}

.hero__scroll-indicator-container {
  margin-top: 4rem; // mt-16

  svg {
    font-size: 1.5rem;
  }
}

.hero__scroll-indicator {
  display: inline-block;
  color: #6b7280; // text-gray-500
}
</style>