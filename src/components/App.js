import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesList } from './CategoriesList';

function App() {
  const dispatch = useDispatch();

  const fetchData = (url) => {
    return (dispatch, getState) => {
      fetch('https://fakestoreapi.com/products').then((res)=>{
        return res.json()
      }).then((res)=>{
        dispatch({
          type: 'POPULATE_PRODUCTS',
          payload: res
        })  
      })
    }
  }

  useEffect(()=>{
    dispatch(fetchData('https://fakestoreapi.com/products'))
  },[]);

  return <CategoriesList />
}

export default App;
