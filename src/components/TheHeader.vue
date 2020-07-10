<template>
  <article>
    <div class="header-content">
      <h1>
        felicia <br/>
        wallin<span class="red-dot">.</span>
      </h1>
      <section>
        <p>Short text about me.</p>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
    article {
      width: 100%;
      height: 300px;
      background-color: black;
      color: white;
      display: grid;
      grid-template-columns: 15% 70% 15%;
      .header-content {
        grid-column: 2;
        display: flex;
        align-items: center;
        h1 {
          font-size: 55px;
          font-family: "Times New Roman", serif;
          font-weight: 200;
          line-height: 0.9;
          padding-right: 50px;
        }
        section {
          font-family: "Helvetica", sans-serif;
          height: 150px;
          padding: 10px 0 10px 50px;
          border-left: 1px solid white;
        }
      }
    }
</style>
