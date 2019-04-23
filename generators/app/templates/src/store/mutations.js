import MTYPES from "./mutation-types";

const whiteList = ["containerWidth", "leftTabHeight"];

function resetState(state, moduleState) {
  const mState = state[moduleState];
  const { initState } = mState;
  if (initState) {
    for (const key in initState) {
      if (!whiteList.includes(key)) mState[key] = initState[key];
    }
  }
}

export default {
  [MTYPES.RESET_STORE_MUTATION](state) {
    for (const moduleState in state) {
      if (moduleState) resetState(state, moduleState);
    }
  }
};
