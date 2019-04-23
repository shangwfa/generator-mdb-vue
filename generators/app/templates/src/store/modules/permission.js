import MTYPES from "../mutation-types";
import { constantRoutes, asyncRoutes } from "../../router";

const initState = {
  routes: [],
  addRoutes: []
};

const permission = {
  state: {
    ...initState,
    initState
  },
  mutations: {
    [MTYPES.GENERATE_ROUTES]: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    }
  },
  actions: {
    async [MTYPES.GENERATE_ROUTES]({ commit }, { roles }) {
      return new Promise(resolve => {
        let accessedRoutes;
        if (roles.includes("admin")) {
          accessedRoutes = asyncRoutes;
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        }
        commit(MTYPES.GENERATE_ROUTES, accessedRoutes);
        console.log(MTYPES.GENERATE_ROUTES, roles, accessedRoutes);
        resolve(accessedRoutes);
      });
    }
  }
};

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}
export default permission;
