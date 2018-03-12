import React, { Component } from 'react';
import LiftState from './liftingState'

class LiftStateSearchableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

  }

  onChange = (event) => {
    const {value } = event.target;

    this.setState({
      query: value
    });
  }

  return() {
    const { list } = this.props;
    const { query } = this.state;

    return (
      <div>
        <h2>Example Lifting State</h2>
      </div>
    );
  }
}

const byQuery = (query) => (item) =>
  !query || item.name.toLowerCase().includes(query.toLowerCase());

const List = ({ list, onArchive }) =>
  <ul>
    {list.map(item =>
    <li key={item.id}>
      <span>
        {item.name}
      </span>
      <span>
        <button
          type="button"
          onClick={() => onArchive(item.id)}
        >
          Archive
        </button>
      </span>
    </li>
    )}
  </ul>


export default LiftStateSearchableList;
