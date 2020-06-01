import React from 'react';
import useStyles from "../MaterialUI/useStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux';
import { addSmurf } from "../actions";

const SmurfForm = () => {
    const classes = useStyles();
    const state = useSelector(state => state.smurfsReducer);
    const dispatch = useDispatch();
    const [values, handleChanges] = useForm({
        name: "",
        age: "",
        height: ""
    });
    const submitSmurf = e => {
        e.preventDefault();
        dispatch(addSmurf(values));
    }

    return (
        <React.Fragment>
            <form className = {classes.formRoot} noValidate autoComplete="off" onSubmit = {submitSmurf}>
                <TextField id = "name" type = "text" name = "name" label = "Smurf's Name" value = {values.name} onChange = {handleChanges} />
                <TextField id = "age" type = "number" name = "age" label = "Smurf's Age" value = {values.age} onChange = {handleChanges} />
                <TextField id = "height" type = "number" name = "height" label = "Smurf's Height" value = {values.height} onChange = {handleChanges} placeholder = "Enter Height in centimeters" />
                <Button variant = "contained" type = "submit">Submit</Button>
            </form>
            {state.error !== ""  && <p>{state.error}</p>}
        </React.Fragment>
    );
};

export default SmurfForm;