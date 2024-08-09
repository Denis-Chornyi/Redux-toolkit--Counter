import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clean, decrement, increment, incrementAsync } from '../state/counter/counterSlice';
import './counter.scss';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2 className="counter__title" onClick={() => dispatch(clean())}>
        {count}
      </h2>

      <button className="counter__button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="counter__button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button className="counter__button" onClick={() => dispatch(incrementAsync(10))}>
        Increment Async by 10
      </button>
    </div>
  );
};

export default Counter;
