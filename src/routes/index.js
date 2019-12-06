import React from "react";
// import { Router, Route, Switch } from "react-router";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./routeConstants";
import CommonRoute from "./CommonRoute";
import LoadRoute from "./LoadRoute";
import { history } from "../helpers/helperConst";
import NoPageFound from "./NoPageFound";

function Routes(props) {
  return (
    <Router history={history}>
    <Switch>
      {Object.keys(routes).map(routeKey => {
        return (
            <CommonRoute
              key={routeKey}
              render={LoadRoute}
              importPath={routes[routeKey].path}
              {...routes[routeKey]}
            />
        )
      })}
      
    <Route path="*" component={NoPageFound} />
    </Switch>
    </Router>
  );
}

export default Routes;
