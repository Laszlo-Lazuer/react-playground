import React, { Component } from 'react';

class SearchLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // onChange(event) {
  onChange = (event) => {
      const { value } = event.target;
      this.setState({ query: value
    });
  }

  // onSubmit(event) {
  onSubmit = (event) => {

    const { query } = this.state;
    // do something with the search value
    // e.g. propagate it up to the parent component
    this.props.onSearch(query); //Disable to test input
    // console.log(query);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Example Local State component</h2>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            value={this.state.query}
        />
        <button type="submit">
          Search
        </button>
      </form>
      </div>
    );
  }
}



export default SearchLocal;
