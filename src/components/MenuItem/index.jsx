'use strict';

import React from 'react';
import {MenuIcon, MenuLabel, Wrapper} from './styles';

const MenuItem = ({clickHandler, active, url, caption}) => (
  <Wrapper onClick={clickHandler} active={active}>
    <MenuIcon url={url} />
    <MenuLabel>{caption}</MenuLabel>
  </Wrapper>
);

export default MenuItem;
