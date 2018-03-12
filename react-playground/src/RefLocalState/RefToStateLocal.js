import React, { Component } from 'react';

class SearchLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ' ',
    }
  }

  onChange = (event) => {
    const { value } = event.target;

    this.setState({
      query: value,
    });
  }

  onSubmit = ()

  render() {
    return (
      <div>
        <h2>Example Ref component</h2>
        <form onSubmit={this.onSubmit}>
          <input
            ref={node => this.input = node}
            type='text'
          />
          <button type='submit'>
            search
          </button>
        </form>
      </div>
    );
  }
}



export default SearchLocal;
