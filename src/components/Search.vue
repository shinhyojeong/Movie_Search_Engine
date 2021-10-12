<template>
  <div class="search">
    <form @submit.prevent="searchMovieList">
      <input
        v-model="searchWord"
        type="text"
        class="search__input"
        placeholder="검색어를 입력하세요"
      />
    </form>
    <div class="search__btn" @click="searchMovieList">
      <span class="material-icons"> search </span>
    </div>
  </div>
  <div class="search__result">
    <SearchResult :movieTotalResult="movieTotalResult" />
  </div>
</template>

<script>
import SearchResult from "./SearchResult";
export default {
  components: {
    SearchResult,
  },
  data() {
    return {
      searchWord: "",
    };
  },
  computed: {
    movieTotalResult() {
      return this.$store.state.movies.movieTotalResult;
    },
  },
  methods: {
    searchMovieList() {
      this.$router.push("/search");
      this.$store.commit("movies/resetCurrentPage");
      this.$store.commit("movies/assignSearchWord", this.searchWord);
      this.$store.dispatch("movies/getMoviesList");
      this.searchWord = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 40%;
  height: 35px;
  border-radius: 15px;
  border: 1px solid gray;
  display: grid;
  grid-template-columns: 10fr 1fr;
  padding: 0 2%;
  background-color: white;
  margin-bottom: 0.7%;

  .search__input {
    width: 98%;
    height: 90%;
    font-size: 1.1em;
    border: none;

    &:focus {
      outline: none;
    }
  }
  .search__btn {
    display: flex;
    justify-content: right;
    align-items: center;
    color: gray;
    cursor: pointer;
  }
}

.search__result {
  font-size: 1.05em;
}
</style>