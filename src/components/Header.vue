<template>
  <div class="header__title">
    <RouterLink to="/">
      <span class="title" @click="resetTotalResult('0')"> MOVIE SEARCH </span>
    </RouterLink>
  </div>
  <div class="header__search">
    <Search />
  </div>
</template>

<script>
import Search from "./Search";
export default {
  components: {
    Search,
  },
  methods: {
    resetTotalResult(resetNum) {
      this.$store.commit("movies/assignMovieTotalResult", resetNum);
    },
  },
};
</script>

<style scoped lang="scss">
.header__title {
  margin-bottom: 23px;

  .title {
    color: $point-color;
    font-size: 2em;
    font-weight: 700;
  }
  & a {
    text-decoration: none;
  }
}

.header__search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
