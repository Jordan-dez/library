import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from '../constants'
import axios from 'axios'
const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}
const fetchBooksSuccess = data => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}
const fetchBooksError = error => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

export const fetchBooks = title => {
    const keyApi = process.env.REACT_APP_API_KEY
    return disptach => {
        disptach(fetchBooksLoading());
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${keyApi}&maxResults=20`)
            .then(res => {
                const booksItemsArray = res.data.items;
               disptach(fetchBooksSuccess(booksItemsArray));

            }).catch(err =>{
                disptach(fetchBooksError(err.message));
            });
    }
}
