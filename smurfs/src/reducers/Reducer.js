import { 
    FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF_FAILURE, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE, EDIT_SMURF_SUCCESS, EDIT_SMURF_FAILURE,
} from "../actions";

export const initialState = {
    smurfs: [],
    isFetching: false,
    isEditing: false,
    error: ""
};
export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.payload
            };
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
            };
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case EDIT_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: state.smurfs.map(smurf => {
                    if(smurf.id === action.payload.id) {
                        return action.payload;
                    }
                    return smurf;
                }),
                error: ""
            };
        case EDIT_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload
                };
        default:
            return state;
    }
}