export default {
  // 获取url中的参数
  getUrlParam(name) {
    const reg = new RegExp(`(^|&?)${name}=([^&]*)(&|$)`, "i");
    const r = window.location.href.substr(1).match(reg);
    if (r != null) {
      return decodeURI(r[2]);
    }
    return undefined;
  },
  blur(message) {
    return [{ required: true, message, trigger: "blur" }];
  },
  change(message) {
    return [{ required: true, message, trigger: "change" }];
  }
};
