export default {
  mail: /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/,
  phone: /^1[34578]\d{9}$/,
  code: /\d{6}/, // 验证码
  positiveInteger: /^[1-9]{1,}[\d]*$/,
  web: /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
};
