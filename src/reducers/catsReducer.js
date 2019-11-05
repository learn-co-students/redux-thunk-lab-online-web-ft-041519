// add the catsReducer

const catsReducer = (state = { cats:[], loading: false },
    action) => {
        switch(action.type) {

            case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                // state.loading becomes true, while the rest of the state is just copied to a new object.  
                loading: true
            }

            case 'ADD_CATS':
                return {
                    ...state,
                    // expects payload object with a cats key
                    cats: action.cats,
                    loading: false
                }
                default:
                    return state
        }
    }

export default catsReducer;