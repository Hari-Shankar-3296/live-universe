/*
    Redirect to /home if logged in otherwise open the given route
*/

import React from "react";
import { Route } from "react-router-dom";

function CommonRoute({ render: Component, ...rest }) {
  
  function renderComponent(props) {
    return <Component {...props} {...rest} />;
  }

  return <Route {...rest} render={renderComponent} />;
}

export default CommonRoute;
