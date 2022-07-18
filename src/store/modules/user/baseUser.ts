export default {
  namespaced: true,
  state: {
    userId: "undefined"
  },
  getters: {
  },
  mutations: {
    setUserId (state: any, payload: { userId: string }) {
      console.log("setUserId", payload);
      state.userId = payload.userId;
    }
  },
  actions: {

  },
  modules: {
  }
};
