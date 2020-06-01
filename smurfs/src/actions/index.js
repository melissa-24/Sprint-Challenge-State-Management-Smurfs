import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const EDIT_SMURF_SUCCESS = "EDIT_SMURF_SUCCESS";
export const EDIT_SMURF_FAILURE = "EDIT_SMURF_FAILURE";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
    console.log("ml: actions/index: getSmurfs");
    dispatch({type: FETCH_START});

    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("ml: actions/index: getSmurfs: success: res", res.data);
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data
        });
    })
    .catch(err => {
        console.log("ml: actions/index: getSmurfs: failure: err", err.response.status, "Smurfs List " + err.response.statusText);
        if(err.response.status === 404) {
            dispatch({
                type: FETCH_FAILURE,
                payload: "Smurfs List " + err.response.statusText
            });
        }
    })
};

export const addSmurf = smurf => dispatch => {

    axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
        console.log("ml: actions/index.js: addSmurf: res", res.data);
        dispatch({
            type: ADD_SMURF_FAILURE,
            payload: ""
        });
    })
    .catch(err => {
        console.log("ml: actions/index.js: addSmurf: err", err.response.data.Error);

        dispatch({
            type: ADD_SMURF_FAILURE,
            payload: err.response.data.Error
        });
    })
}

export const editSmurf = smurf => dispatch => {

    axios.put(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
        console.log("ml: actions/index: editSmurf: res", res.data);
        dispatch({
            type: EDIT_SMURF_SUCCESS,
            payload: smurf
        });
    })
    .catch(err => {
        console.log("ml: actions/index: editSmurf: err", err.response.data.Error);
        dispatch({
            type: EDIT_SMURF_FAILURE,
            payload: err.response.data.Error
        });
    });
}

export const deleteSmurf = id => dispatch => {

    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log("ml: actions/index: deleteSmurf: res", res.data);
        dispatch({
            type: DELETE_SMURF_SUCCESS,
            payload: id
        });
    })
    .catch(err => {
        console.log("ml: actions/index: deleteSmurf: err", err.response.data.Error);
        dispatch({
            type: DELETE_SMURF_FAILURE,
            payload: err.response.data.Error
        });
    });
}