import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK, FETCH_BOOKS} from '../actions/types';

const bookReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_BOOK:  
            return [...state, action.payload];
        case EDIT_BOOK:         
            const idx  = state.findIndex((book) => { return book.id === action.payload.id; });
            const newState = [...state];
            newState[idx] = action.payload;             
            return newState;         
        case DELETE_BOOK:
            return state.filter(book => book.id != action.payload.id);
        case FETCH_BOOKS:
            return action.payload;
        default:
            return state;
    }
}

export default bookReducer;