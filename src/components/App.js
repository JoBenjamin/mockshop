import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { FETCH_DATA} from '../actions/productsActions';
import { CategoriesList } from './CategoriesList';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(FETCH_DATA('https://fakestoreapi.com/products'))
  },[]);

  return <CategoriesList />
}

export default App;
