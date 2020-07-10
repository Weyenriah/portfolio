<template>
  <article class="projects">
    <h2>projects<span class="red-dot">.</span></h2>
    <div class="project-box">
      <section class="project one">
        <div class="information">
          <section class="focus">
            <p>ux/ui - php - mysql - html - css</p>
          </section>
          <div class="project-name">
            <h3>örebro katthem</h3>
          </div>
        </div>
      </section>
      <section class="project">
        <div class="information">
          <section class="focus">
            <p>ux/ui - vue - scss</p>
          </section>
          <div class="project-name">
            <h3>laggIT</h3>
          </div>
        </div>
      </section>
      <section class="project">
        <div class="information">
          <section class="focus">
            <p>ux/ui - html - css - c#/mvc - prototyping</p>
          </section>
          <div class="project-name">
            <h3>help in posifoncare</h3>
          </div>
        </div>
      </section>
    </div>
    <div class="project-box">
      <section class="project four">
        <div class="information">
          <section class="focus">
            <p>ux/ui - wordpress theme</p>
          </section>
          <div class="project-name">
            <h3>mobilatrygghetslarm.se</h3>
          </div>
        </div>
      </section>
      <section class="project">
        <div class="information">
          <section class="focus">
            <p>processing (p5.js) - game design</p>
          </section>
          <div class="project-name">
            <h3>undefined game title</h3>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: 'TheSkills',
}
</script>

<style lang="scss" scoped>
  .projects {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    h2 {
      font-size: 30px;
      font-family: "Times New Roman", serif;
      grid-column: 2;
      margin: 40px 0 15px 0;
    }
    .project-box {
      grid-column: 2;
      display: flex;
      .one {
        background-image: url('../assets/orebro-katthem.png');
      }
      .four {
        background-image: url('../assets/mobilatrygghetslarm.png');
      }
      .project {
        display: flex;
        width: calc(100%/3);
        height: 300px;
        background-color: lightgrey;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: 1px solid white;
        transition: all .2s ease-in-out;
        .information {
          overflow: hidden;
          height: 0;
          width: 0;
          transition: all .2s ease-in;
          .project-name {
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: auto;
            width: 0;
            background-color: rgba(255, 255, 255, 0.7);
            h3 {
              opacity: 0;
              transition: all 1s;
              font-size: 30px;
              font-family: "Times New Roman", serif;
            }
          }
          .focus {
            width: 0;
            height: 24px;
            background-color: #990000;
            padding: 0 10px;
            color: white;
            font-family: "Helvetica", sans-serif;
            p {
              opacity: 0;
              transition: all 1s;
            }
          }
        }
        &:hover {
          width: 90%;
          height: 500px;
          .information {
            height: auto;
            width: 100%;
            .project-name {
              width: 100%;
              h3 {
                opacity: 10;
              }
            }
            .focus {
              width: 100%;
              p {
                opacity: 10;
              }
            }
          }
        }
      }
    }
  }
</style>
