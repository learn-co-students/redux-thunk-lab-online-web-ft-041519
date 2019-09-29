import uuid from "uuid";
 
function catsReducer(state={pictures: [], loading: false} ,action) {
    switch (action.type) {
   
      case 'FETCH_CATS':
        return {...state, pictures: action.payload, loading: false}
   
      case 'LOADING_CATS':    
        return {...state.loading, loading: true}

      default:
        return state;
    }
  };

export default catsReducer 