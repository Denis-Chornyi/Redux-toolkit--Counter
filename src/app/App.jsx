import React from 'react';
import Counter from '../components/counter/Counter';
import './app.scss';

const App = () => {
  return (
    <div className="page">
      <h2 className="page__title">Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
};

export default App;
