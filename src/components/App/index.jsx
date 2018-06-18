'use strict';

import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from 'scenes/home';
import {Wrapper} from './styles';

const DynamicContent = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Wrapper>
);

export default DynamicContent;
