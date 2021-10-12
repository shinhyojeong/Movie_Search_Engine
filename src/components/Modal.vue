<template>
  <div class="modal" v-show="openModal">
    <div class="modal__inner">
      <div class="modal__closebtn">
        <span class="material-icons" @click="closeModal"> highlight_off </span>
      </div>
      <div class="modal__poster">
        <img
          :src="movieDetail.Poster"
          :alt="movieDetail.Title"
          class="poster-img"
        />
      </div>
      <div class="modal__content">
        <span class="movie__title content__section">
          {{ movieDetail.Title }}
          <br />
        </span>
        <span class="movie__released content__section">
          <span class="section-title">Released</span>
          {{ movieDetail.Released }}
          <br />
        </span>
        <span class="movie__runtime content__section">
          <span class="section-title">Runtime</span>
          {{ movieDetail.Runtime }}
          <br />
        </span>
        <span class="movie__genre content__section">
          <span class="section-title">Genre</span>
          {{ movieDetail.Genre }}
          <br />
        </span>
        <span class="movie__director content__section">
          <span class="section-title">Director</span>
          {{ movieDetail.Director }}
          <br />
        </span>
        <span class="movie__actors content__section">
          <span class="section-title">Actor</span>
          {{ movieDetail.Actors }}
          <br />
        </span>
        <span class="movie__plot">
          <span class="section-title">Plot</span>
          <br />
          {{ movieDetail.Plot }}
          <br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posterId: String,
  },
  computed: {
    movieDetail() {
      return this.$store.state.movies.movieDetail;
    },
    openModal() {
      return this.$store.state.movies.openModal;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("movies/changeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.349);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal__inner {
    display: grid;
    padding: 1.2% 2% 3% 2%;
    grid-template-columns: 1fr 1fr;
    gap: 0 3%;
    box-sizing: border-box;
    opacity: 1;
    width: 55%;
    height: 75vh;
    background-color: rgb(255, 255, 255);
    position: fixed;
    border-radius: 10px;

    .modal__closebtn {
      grid-column: 1 / 3;
      text-align: right;

      .material-icons {
        color: rgb(51, 51, 51);
        cursor: pointer;
        font-size: 2em;
      }
    }

    .modal__poster {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      .poster-img {
        width: 80%;
      }
    }
    .modal__content {
      display: grid;
      gap: 10px;
      align-content: start;
      height: 100%;
      box-sizing: border-box;
      height: 100%;
      padding: 3%;
      text-align: justify;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .movie__title {
        color: $point-color;
        font-size: 1.2em;
        font-weight: 600;
      }

      .section-title {
        font-size: 1.1em;
        font-weight: 600;
      }

      .movie__plot {
        line-height: 20px;
      }
    }
  }
}
</style>