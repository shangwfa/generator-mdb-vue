<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapState } from "vuex";
import variables from "styles/variables.scss";
import SidebarItem from "./SidebarItem";

export default {
  name: "Sidebar",
  components: { SidebarItem },
  computed: {
    ...mapState({
      isCollapse: state => !state.app.sidebar.opened
    }),
    routes() {
      return this.$router.options.routes[0].children;
    },
    variables() {
      return variables;
    }
  },
  created() {
    console.log("created", this.$router);
  }
};
</script>
