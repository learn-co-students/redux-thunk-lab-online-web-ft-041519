const catURL = "http://localhost:4000/db"
export function fetchCats(){
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
      return fetch(catURL)
        .then(response => response.json())
        .then(cats => dispatch({type: 'FETCH_CATS', payload: cats.images}))
  }
}
