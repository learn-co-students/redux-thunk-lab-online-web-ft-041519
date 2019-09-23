const initialState = {
  loading: false,
  pictures: []
}

export default function catsReducer(state = initialState, action) {
  switch (action.type) {

    case "LOADING CATS":
      return {...state, loading: true};

    case 'FETCH_CATS':
      return {...state, loading: false, pictures: action.payload};

    default:
      return state;
  }
};
