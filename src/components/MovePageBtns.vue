<template>
  <div class="more__btn">
    <button class="previous-btn" @click="clickPreviousBtn">
      Previous Page
    </button>
    <button class="next-btn" @click="clickNextBtn">Next Page</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickPreviousBtn() {
      this.$store.dispatch("movies/goPreviousPage");
    },
    clickNextBtn() {
      this.$store.dispatch("movies/goNextPage");
    },
  },
};
</script>

<style lang="scss" scoped>
.more__btn {
  text-align: center;
  padding: 6% 0;
  button {
    margin: 0 1%;
    cursor: pointer;
    padding: 1.4% 3.5%;
    border-radius: 30px;
    border: 2px solid white;
    font-weight: 600;
    color: rgb(255, 255, 255);
    outline: 0;
    background-color: $point-color;

    &:hover {
      background-color: white;
      transition: 0.3s ease-in-out;
      color: $point-color;
      border: 3px solid $point-color;
    }
  }
}
</style>
