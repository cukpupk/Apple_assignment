import { ADD_MOVIE, REMOVE_MOVIE, RECEIVE_DATA } from './ActionTypes'

const addMovie = (movie) => ({
    type: ADD_MOVIE,
    movie
})

const removeMovie = (movie) => ({
    type: REMOVE_MOVIE,
    movie
})

const reveiveData = (data) => ({
    type: RECEIVE_DATA,
    data
})
const getData = () => dispatch => {
    return fetch('/movie.json')
        .then(res => res.json())
        .then(res => 
            dispatch(reveiveData(res))
        )       
}

export { addMovie, removeMovie, getData }