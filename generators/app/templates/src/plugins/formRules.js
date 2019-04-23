import regExp from "./regExp";
export default {
  loginName: () => {
    return [
      {
        required: true,
        message: this.$t("login.noEmptyUserName"),
        trigger: "blur"
      }
    ];
  },
  pwd: () => {
    return [{ required: true, message: "密码不能为空", trigger: "blur" }];
  },
  skillDescription: () => {
    return [{ required: true, message: "技能简介不能为空", trigger: "blur" }];
  },
  skillTime: () => {
    return [
      { required: true, message: "技能时长不能为空", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          if (regExp.positiveInteger.test(value)) {
            callback();
          } else {
            callback(new Error("请输入正整数"));
          }
        },
        trigger: "change"
      }
    ];
  },
  skillName: () => {
    return [{ required: true, message: "技能名称不能为空", trigger: "change" }];
  },
  jobDescription: () => {
    return [{ required: true, message: "工作简介不能为空", trigger: "blur" }];
  },
  jobExperienceTime: () => {
    return [{ required: true, message: "日期不能为空", trigger: "change" }];
  },
  jobPosition: () => {
    return [{ required: true, message: "请输入任职岗位", trigger: "blur" }];
  },
  companyName: () => {
    return [{ required: true, message: "请输入公司名称", trigger: "blur" }];
  },
  rewardTime: () => {
    return [
      {
        required: true,
        message: "请选择或输入问题时限",
        trigger: "change"
      }
    ];
  },
  rewardAmount: () => {
    return [
      {
        required: true,
        message: "请选择或输入悬赏金额",
        trigger: "change"
      }
    ];
  },
  richText: () => {
    return [{ required: true, message: "请输入问题描述", trigger: "blur" }];
  },
  questionTitle: () => {
    return [{ required: true, message: "请输入问题标题", trigger: "blur" }];
  },
  mail: () => {
    return [
      { required: true, message: "请输入邮箱", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          if (regExp.mail.test(value)) {
            callback();
          } else {
            callback(new Error("邮箱输入不正确"));
          }
        },
        trigger: "blur"
      }
    ];
  },

  phone: () => {
    return [
      { required: true, message: "请输入手机号", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          if (regExp.phone.test(value)) {
            callback();
          } else {
            callback(new Error("手机号输入不正确"));
          }
        },
        trigger: "blur"
      }
    ];
  },
  code: () => {
    return [
      { required: true, message: "请输入验证码", trigger: "blur" },
      {
        validator: (rule, value, callback) => {
          if (regExp.code.test(value)) {
            callback();
          } else {
            callback(new Error("必须为6位数字"));
          }
        },
        trigger: "blur"
      }
    ];
  }
};
