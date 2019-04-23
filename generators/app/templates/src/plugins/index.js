import constant from "./constant";
import utils from "./utils";
import formRules from "./formRules";

export default {
  install(Vue) {
    Vue.prototype.$const = { ...constant };
    Vue.prototype.$utils = { ...utils };
    Vue.prototype.$formRules = formRules;
  }
};
