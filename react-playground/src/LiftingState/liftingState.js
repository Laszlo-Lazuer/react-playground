import React, { Component } from 'react';
import LiftStateSearchableList from './liftingStateSearchableList'


class LiftState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      query: value
    });
  }

  render() {
    return (
      <div>
        <h2>Example Lifting State Incomplete</h2>
        {this.props.children} <input
          type='text'
          value={this.state.query}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const List = ({ list }) =>
  <ul>
    {list.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>

const SearchableList = ({ list }) =>
  <div>
    <Search>Search List:</Search>
    <List list={list} />
  </div>

  const Search = ({ query, onChange, children }) =>
    <div>
      {children} <input
      type='text'
      value={query}
      onChange={onChange}
      />
    </div>

export default LiftState;
