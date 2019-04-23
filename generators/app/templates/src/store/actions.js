import MTYPES from "./mutation-types";

const actions = {
  increment({ commit }) {
    commit(MTYPES.RESET_STORE_MUTATION);
  }
};
export default actions;
