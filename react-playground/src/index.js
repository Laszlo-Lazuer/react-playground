import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import Search from './Ref/formRef';
import SearchLocal from './RefLocalState/RefToStateLocal';

ReactDOM.render(
  <div>
  <Counter />
  <Search />
  <SearchLocal />
  </div>
  , document.getElementById('root'));


if (module.hot) {
  module.hot.accept()
}
