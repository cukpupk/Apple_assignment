import { ADD_MOVIE, REMOVE_MOVIE, RECEIVE_DATA } from '../actions/ActionTypes';

const defaultState = {
    mylist: [],
    recommendations: []
}

const Movie = (state = defaultState, action) => {
    switch (action.type) {

        case RECEIVE_DATA:
            return action.data;

        case ADD_MOVIE:
            const itemIds = state.recommendations.map(item => item.id);
            const index = itemIds.indexOf(action.movie.id);
            return {
                ...state,
                mylist: [...state.mylist,
                ...state.recommendations.splice(index, 1)]
            }
        case REMOVE_MOVIE:
            // Use movie as the action payload
            const itemIds1 = state.mylist.map(item => item.id)
            const index1 = itemIds1.indexOf(action.movie.id);
            return {
                ...state,
                recommendations: [...state.recommendations,
                ...state.mylist.splice(index1, 1)]
            }
        default:
            return state;
    }
}

export default Movie