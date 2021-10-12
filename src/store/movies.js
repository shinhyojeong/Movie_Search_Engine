import { fetchApi } from "~/api";

export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      searchWord: "",
      currentPage: 1,
      movieTotalResult: 0,
      movieDetail: {},
      openModal: false,
      lastPage: 0,
    };
  },
  getters: {},
  mutations: {
    assignMovieList(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    assignSearchWord(state, payload) {
      state.searchWord = payload;
    },
    assignMovieTotalResult(state, payload) {
      state.movieTotalResult = Number(payload);
    },
    assignMovieDetail(state, payload) {
      state.movieDetail = payload;
    },
    changeModal(state) {
      state.openModal = !state.openModal;
    },
    assginLastPage(state) {
      state.lastPage = Math.ceil(state.movieTotalResult / 10);
    },
    addCurrentPage(state) {
      state.currentPage += 1;
    },
    minusCurrentPage(state) {
      state.currentPage -= 1;
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
  },
  actions: {
    async getMoviesList({ state, commit }) {
      const movies = await fetchApi({
          s: state.searchWord,
          page: state.currentPage,
      });

      const movieTotalResult = movies.totalResults;
      const movieList = movies.Search;

      commit("assignMovieList", {
        movieList,
      });
      commit("assignMovieTotalResult", movieTotalResult);
      commit("assginLastPage");
    },

    async getMovieDetails({ commit }, id) {
      const movieDetail = await fetchApi({
          i: id,
          plot: "full",
      });
      commit("changeModal");
      commit("assignMovieDetail", movieDetail);
    },
    goPreviousPage({ state, commit, dispatch }) {
      if (state.currentPage != 1) {
        commit("minusCurrentPage");
        dispatch("getMoviesList");
      }
    },
    goNextPage({ state, commit, dispatch }) {
      if (state.currentPage < state.lastPage) {
        commit("addCurrentPage");
        dispatch("getMoviesList");
      }
    },
  },
};
