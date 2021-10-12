<template>
  <div class="app__inner">
    <div class="app__header">
      <Header />
    </div>
    <div class="app__page">
      <RouterView />
    </div>
    <Modal></Modal>
  </div>
</template>

<script>
import Modal from "~/components/Modal";
import Header from "~/components/Header";
export default {
  components: {
    Header,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
.app__inner {
  position: relative;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  width: 100%;
  .app__header {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .app__page {
    padding: 1% 5% 0 5%;
  }
}
</style>