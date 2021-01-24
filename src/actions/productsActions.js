export const POPULATE_PRODUCTS = (payload) => {
    return {
        type: 'POPULATE_PRODUCTS',
        payload: payload
    }
}

export const FETCH_DATA = (url) => {
    return (dispatch) => {
      fetch(url).then((res)=>{
        return res.json()
      }).then((res)=>{
        dispatch(POPULATE_PRODUCTS(res))  
      }).catch((err)=>{
        console.error(err.message)
      })
    }
  }
