<!--
 * @Description: learn Vue compoment
 * @Author: wulin
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-11 19:54:34
 * @LastEditTime: 2019-04-12 14:51:26
 -->
<template>
  <el-main class="invitation">
    <el-row>
      <el-col
        :span="6"
        v-for="o in userArrs"
        :key="o.userId"
        class="box-container"
      >
        <user-card
          v-bind:user-id="o.userId"
          v-bind:user-name="o.userName"
          v-bind:headimg="o.headimg"
          v-bind:position="o.position"
          v-on:send-message="parentSendMessage"
        >
        </user-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import UserCard from "components/UserCard.vue";
const MACK_USER_DATA = [
  {
    userId: 1,
    userName: "wuln",
    position: "Android",
    headimg: "https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png"
  },
  {
    userId: 2,
    userName: "wuln",
    position: "Android",
    headimg: "https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png"
  },
  {
    userId: 3,
    userName: "wuln",
    position: "Android",
    headimg: "https://img.alicdn.com/tfs/TB1n3HkAH2pK1RjSZFsXXaNlXXa-90-90.png"
  }
];
export default {
  components: { UserCard },
  data() {
    return {
      userArrs: MACK_USER_DATA
    };
  },
  methods: {
    parentSendMessage: function(userId) {
      alert("sendmessage to User_id::" + userId);
    }
  }
};
</script>

<style>
.box-container {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
