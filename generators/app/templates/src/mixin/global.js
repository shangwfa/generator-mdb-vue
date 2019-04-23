export default {
  data() {
    return {};
  },
  watch: {
    $route: {
      handler: "handler",
      immediate: true
    }
  },
  created: function() {},
  mounted: function() {},
  methods: {
    handler(route) {
      console.log("当前路由", route);
    }
  }
};
