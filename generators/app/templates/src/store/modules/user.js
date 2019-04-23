import MTYPES from "../mutation-types";
import api from "../../api";
import path from "../../api/path";

const initState = {
  isLogin: false,
  roles: [],
  avatar: ""
};

const user = {
  state: {
    ...initState,
    initState
  },
  mutations: {
    [MTYPES.USER_LOGIN]: state => {
      state.isLogin = true;
    },
    [MTYPES.GET_USER_INFO]: (state, { roles, avatar }) => {
      console.log(MTYPES.GET_USER_INFO, roles, avatar);
      state.roles = roles;
      state.avatar = avatar;
    }
  },
  actions: {
    async [MTYPES.USER_LOGIN]({ commit }, params) {
      const response = await api(path.USER_LOGIN, params);
      commit(MTYPES.USER_LOGIN, response);
      return response;
    },
    async [MTYPES.GET_USER_INFO]({ commit }, params) {
      const response = await api(path.GET_USER_INFO, params);
      commit(MTYPES.GET_USER_INFO, response.data);
      return response;
    }
  },
  getters: {}
};

export default user;
