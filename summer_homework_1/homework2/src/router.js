import { render } from "./render.js";

let currentRouterView = () => "";
let base = "";

export const createHashRouter = (baseUrl, routes) => {
  base = baseUrl;
  const routesMap = new Map(); // JS 中 Map 可以实现 LRU 算法
  routes.forEach((route) => {
    routesMap.set(route.path, route.component);
  });

  const go = (path) => {
    if (routesMap.has(path)) {
      console.log(path);
      window.location.hash = path;
    } else throw new Error("url is not exist.");
  };

  const handleHashChange = (e) => {
    const path = window.location.hash.slice(1); // #/about => /about
    console.log("path:" + path);
    currentRouterView = routesMap.get(path ? path : "/"); // 处理 url 没有 hash 时当作首页处理，127.0.0.1/ => 127.0.0.1/#/
    render();
  };

  window.addEventListener("load", handleHashChange);
  window.addEventListener("hashchange", handleHashChange);

  return { go };
};

export const createHistoryRouter = (baseUrl, routes) => {
  // TODO: homework

  base = baseUrl;
  //保存路由
  const routesMap = new Map(); // JS 中 Map 可以实现 LRU 算法
  routes.forEach((route) => {
    routesMap.set(route.path, route.component);
  });
  //访问路由
  const go = (path) => {
    if (routesMap.has(path)) {
      history.pushState({}, "", base + path);
      handlehistoryChange();
    } else throw new Error("url is not exist.");
  };
  //处理路由变化
  const handlehistoryChange = (e) => {
    let url = window.location.pathname;
    let path = url.substr(url.lastIndexOf("/")); //获取路由
    if (path == "/index.html") path = "";
    currentRouterView = routesMap.get(path ? path : "/");
    render();
    bindA(); //重新绑定被render()刷新的a标签
  };
  //阻止a标签默认跳转事件并注册点击事件=>go()
  const bindA = (e) => {
    let as = document.getElementsByTagName("a");
    let path = [];
    for (let i = 0; i < as.length; i++) path.push(as[i]);
    path.forEach((e) => {
      let url = e.href;
      let path = url.substr(url.lastIndexOf("/"));
      e.onclick = () => {
        go(path);
        bindA();
        return false;
      };
    });
  };

  window.addEventListener("load", handlehistoryChange);
  window.addEventListener("load", bindA);
  window.addEventListener("popstate", handlehistoryChange);

  return { go };
};

export const RouterView = (props) => currentRouterView(props);
export const RouterLink = (props) =>
  `<a href="${base}${props.url}" >${props.text}</a>`;
