<template>
  <ul class="movie__list">
    <li
      v-for="movie in movies"
      :key="movie.imdbID"
      @click="getMovieDetails(movie.imdbID)"
    >
      <div class="movie__poster">
        <img :src="movie.Poster" :alt="movie.Title" class="poster-img" />
      </div>
      <div class="movie__content">
        <div class="movie__title">
          {{ movie.Title }}
        </div>
        <div class="movie__year">{{ movie.Year }} ㆍ {{ movie.Type }}</div>
      </div>
    </li>
  </ul>
  <MovePageBtns v-if="movieTotalResult" />
</template>

<script>
import MovePageBtns from "~/components/MovePageBtns";
export default {
  components: {
    MovePageBtns,
  },
  computed: {
    movies() {
      return this.$store.state.movies.movieList;
    },
    movieTotalResult() {
      return this.$store.state.movies.movieTotalResult;
    },
  },
  methods: {
    getMovieDetails(id) {
      this.$store.dispatch("movies/getMovieDetails", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5% 2%;
  li {
    .movie__poster {
      width: 100%;
      height: 83%;
      .poster-img {
        cursor: pointer;
        width: 100%;
        border-radius: 10px;
      }
    }

    .movie__content {
      width: 100%;
      cursor: pointer;
      padding: 5% 0;
      .movie__title {
        width: 250px;
        padding-bottom: 2%;
        font-size: 1.15em;
        font-weight: 700;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .movie__year {
        padding-bottom: 1%;
      }
    }
  }
}
</style>