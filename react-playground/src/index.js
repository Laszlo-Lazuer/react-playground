import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter/Counter';
import Search from './Ref/formRef';
import SearchLocal from './RefLocalState/RefToStateLocal';
import Headline from './Header/header';
import LiftState from './LiftingState/liftingState';

ReactDOM.render(
  <div>
    <Headline />
    <Counter />
    <Search />
    <SearchLocal />
    <LiftState />
  </div>
  , document.getElementById('root'));


if (module.hot) {
  module.hot.accept()
}
