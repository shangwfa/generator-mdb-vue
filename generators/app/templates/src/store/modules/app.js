import Cookies from "js-cookie";
import MTYPES from "../mutation-types";
// import api from "../../api";
// import path from "../../api/path";
const initState = {
  language: Cookies.get("language") || "zh",
  sidebar: {
    opened: !+Cookies.get("sidebarStatus"),
    withoutAnimation: false
  }
};

const app = {
  state: {
    ...initState,
    initState
  },
  mutations: {
    [MTYPES.SET_LANGUAGE]: (state, payload) => {
      console.log("language", payload);
      state.language = payload;
      Cookies.set("language", payload);
    },
    [MTYPES.RESET_STORE_MUTATION]: (state, payload) => {
      state.data = payload;
    },
    [MTYPES.TOGGLE_SIDEBAR]: state => {
      if (state.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    [MTYPES.CLOSE_SIDEBAR]: (state, withoutAnimation) => {
      Cookies.set("sidebarStatus", 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    }
  },
  actions: {
    // async GetPolicySignature({ commit }, params) {
    //   const response = await api(path.GET_POLICY_SIGNATURE, params);
    //   return response;
    // }
  },
  getters: {}
};

export default app;
