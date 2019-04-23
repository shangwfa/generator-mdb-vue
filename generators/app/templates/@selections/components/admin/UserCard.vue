<!--
 * @Description: learn vue component
 * @Author: wulin
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-12 09:35:32
 * @LastEditTime: 2019-04-12 15:03:50
 -->
<template>
  <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
    <img :src="headimg" class="card-user-header" />
    <h4 class="card-user-name">
      {{ userName }}
    </h4>
    <p class="card-user-desc">
      {{ position }}
    </p>
    <div class="card-footer">
      <el-button type="primary" v-on:click="toUserCenter">个人主页</el-button>
      <el-button v-on:click="$emit('send-message', userId)">发送消息</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    userId: {
      type: [String, Number],
      required: true
    },
    userName: {
      type: String,
      default: ""
    },
    headimg: {
      type: String,
      default: ""
    },
    position: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      //   mUser: this.user
    };
  },
  computed: {},
  methods: {
    toUserCenter: function() {
      alert("toUserCenter");
    }
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  .card-user-header {
    border-radius: 50%;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 0px;
  }
  .card-user-name {
    font-weight: bold;
    margin: 20px 0px 10px;
    font-size: 16px;
  }
  .card-user-desc {
    font-weight: 400;
    margin: 0px 0px 20px;
    font-size: 14px;
  }
  .card-footer {
    clear: both;
    margin-bottom: 20px;
  }
}
</style>
