import React, { Component } from 'react';

class Counter extends Component {
  getChildContext() {
    return {
      coloredTheme: 'green'
    };
  }

  render() {
    return <D />
  }
}

A.childContextTypes = {
  coloredTheme: PropTypes.string
};

class C extends Component { render() {
return (
<div style={{ color: this.context.coloredTheme }}>
{this.children} </div>
); }
}

C.contextTypes = {
  coloredTheme: PropTypes.string
};
