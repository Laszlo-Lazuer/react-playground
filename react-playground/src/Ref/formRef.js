import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (event) => {
    const { value } = this.input;

    //Do something with the search value
    //e.g. propogate it up to the parent Component
    this.props.onSearch(value);  //Disable to test
    // console.log(value);

    event.preventDefault();
  }

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



export default Search;
