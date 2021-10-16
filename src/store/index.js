import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tag: 0
    };
  },
  mutations: {
    select_tag(state, number) {
      state.tag = number;
    }
  }
});

export default store;
