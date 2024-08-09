import React from 'react';
import Counter from '../counter/Counter';
import './app.scss'


const App = () => {
  return (
    <div className='page'>
      <h2 className='page__title'>Redux Complete Tutorial</h2>
      <Counter />
    </div>
  );
};

export default App;
