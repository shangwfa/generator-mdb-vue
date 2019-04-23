import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import app from "./modules/app";
import user from "./modules/user";
import permission from "./modules/permission";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations,
  actions,
  getters,
  modules: {
    app,
    user,
    permission
  },
  plugins: [createPersistedState()]
});
