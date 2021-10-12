<template>
  <h1 v-if="movieTotalResult > 0">
    {{ movieTotalResult }}개의 검색 결과가 있습니다.
  </h1>
  <h1 v-else>검색 결과가 없습니다.</h1>
</template>

<script>
export default {
  props: {
    movieTotalResult: Number,
  },
};
</script>