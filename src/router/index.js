import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.path.startsWith("/login") && localStorage.bypass !== "OK") {
    next("/login")
  }
   next()
})
export default router;