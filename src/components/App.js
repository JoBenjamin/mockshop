import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch({
      type: "INCREMENT"
    });
  }

  return <>
    <div>
      {count}
    </div>
    <button onClick={increaseCount}>
      increase count
    </button></>;
}

export default App;
