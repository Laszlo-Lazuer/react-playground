import React, { Component } from 'react';
import './headline.css';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: 'Demo Components',
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.headline}</h1>
      </div>
    );
  }
}



export default Headline;
