// Std modules
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";

import injectGlobalStyles from "css/globalStyles";
import stores from "stores";
import config from "config";

// Styles
import "css/main.css";

// Components
import AppLoader from "components/AppLoader";

// etc
import { initApp } from "core";

// Allow modity MobX store only by using @actions
configure({ enforceActions: true });

// Apply global styles
injectGlobalStyles();

// Render app
ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <Fragment>
        <AppLoader/>
        {config.displayDevTools && <DevTools/>}
      </Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// Init Application
initApp();
