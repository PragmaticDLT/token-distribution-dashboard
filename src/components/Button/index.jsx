'use strict';

import React from "react";
import { Wrapper } from "./style";

class Button extends React.Component {
  render() {
    return (
      <Wrapper disabled={this.props.disabled} onClick={this.props.clickHandler}>
        {this.props.caption}
      </Wrapper>
    );
  }
}

export default Button;