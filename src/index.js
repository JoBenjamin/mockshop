import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {count: 0}

const reducer = (state=initialState, action) => {
  console.log('root reducer', state, action)
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1 
    }
  }
  return state;
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
