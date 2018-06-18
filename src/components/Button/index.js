import React from "react";
import { observer, inject } from "mobx-react";
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