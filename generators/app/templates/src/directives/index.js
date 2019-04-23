import store from "../store";

/**
 * v-login
 */

export function login(el, binding) {
  el.addEventListener("click", () => {
    if (store.state.user.isLogin) {
      typeof binding.value === "function" && binding.value();
    } else {
      if (typeof binding.value === "function") {
        binding.value();
      } else {
        //未登录时，处理逻辑
      }
    }
  });
}
/**
 *v-focus
 *功能：页面加载完成之后自动让输入框获取到焦点的功能
 *作用目标：input标签
 */
export function focus(el) {
  el.focus();
}
/**
 * v-outside
 * 功能：点击到dom节点之外
 * 作用目标：dom节点
 */
export const outside = {
  bind: function(el, binding, vNode) {
    if (typeof binding.value !== "function") {
      let msg = `in [clickoutside] directives, provided expression '${
        binding.expression
      }' is not a function `;

      const compName = vNode.context.name;

      if (compName) {
        msg += `in ${compName}`;
      }
      console.error(msg);
    }

    var handler = e => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e);
      } else {
        return false;
      }
    };

    el.__clickOutSide__ = handler;

    document.addEventListener("click", handler, true);
  },

  unbind: function(el) {
    document.removeEventListener("click", el.__clickOutSide__, true);
    el.__clickOutSide__ = null;
  }
};
/**
 * v-permission
 * 功能：按钮级别权限控制
 * 作用目标：dom节点
 */
export function permission() {
  /**
   * meta:{
   *  page:'页面',
   *  role:'具体的功能按钮'
   * }
   */
  //let meta = binding.value;
  //根据meta提供的信息，对dom进行权限处理
  //1.显示or隐藏
  //2.特殊化逻辑处理
  //3.等等
}
