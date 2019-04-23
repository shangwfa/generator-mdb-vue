<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AppMain from "./AppMain";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      classObj: state => {
        let sidebar = state.app.sidebar;
        return {
          hideSidebar: !sidebar.opened,
          openSidebar: sidebar.opened,
          withoutAnimation: sidebar.withoutAnimation
        };
      }
    })
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
