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
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "HomeContainer"
  },
  PLANETS: {
    path: "/planets",
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "PlanetsContainer"
  }
};

export default routes;
