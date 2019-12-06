// containerPath will always be relative to src

/*
  {
    path: string,
    exact: oneOf([true, false]),
    routeComponentParent: oneOf(["containers", "components", "UIComponents", "common"]),
    routeComponentPath: string,
    isAuthenticated: oneOf([true, false])
  }
*/

const routes = {
  HOME: {
    path: "/",
    routeComponentParent: "containers",
    routeComponentPath: "HomeContainer"
  }
};

export default routes;
