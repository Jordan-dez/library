import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../constants'

const initialState = {
    isLoadind: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchedBooks = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoadind: true
            }
        case FETCH_BOOKS_SUCCESS:
            
            return {
                ...state,
                isLoadind:false,
                fetchedBooks:action.payload,
                error:''
            }
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                isLoadind:false,
                fetchedBooks:[],
                error:action.payload
            }
        default:
            return state
    }

}
export default reducerFetchedBooks