import React from "react";

import { MenuContext } from "./menu";

const WithMenuContext = WrappedComponent => props => (
  <MenuContext.Consumer>
    {context => <WrappedComponent {...context} {...props} />}
  </MenuContext.Consumer>
);

export default WithMenuContext;
