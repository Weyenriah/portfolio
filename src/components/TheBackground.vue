<template>
    <article class="background">
      <svg height="100%" width="100%" preserveAspectRatio="xMidYMax slice">
        <polygon points="0,0 0,500 550,0"
                 style="fill: #eeeeee;" />
      </svg>
      <svg height="100%" width="100%" preserveAspectRatio="xMidYMax slice">
        <polygon points="0,500 550,0 0,800"
                 style="fill: #f6f6f6;" />
      </svg>
      <svg height="100%" width="100%" preserveAspectRatio="xMidYMax slice">
        <polygon points="550,0 1500,0 1500,500"
                 style="fill: #990b0b;" />
      </svg>
      <svg height="100%" width="100%" preserveAspectRatio="xMidYMax slice">
        <polygon points="550,0 1500,0 1500,250"
                 style="fill: #820707;" />
      </svg>
    </article>
</template>

<script>
export default {
  name: 'TheBackground',
}
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    svg {
      position: absolute;
    }
  }
</style>
