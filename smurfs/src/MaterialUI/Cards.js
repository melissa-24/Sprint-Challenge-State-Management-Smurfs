import React, { useState } from 'react';
import useStyles from "./useStyles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {deleteSmurf, editSmurf} from "../actions";
import { useDispatch } from 'react-redux';
import useForm from "../hooks/useForm";

export default function Cards(smurf) {
    const [isEditing, setIsEditing] = useState(false);
    const [values, handleChanges] = useForm({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
    })
    const classes = useStyles;
    const dispatch = useDispatch();
    const toggleEdit = e => {
        e.preventDefault();
        if(isEditing) {
            dispatch(editSmurf(smurf));  
        }
        setIsEditing(!isEditing); 
    }
    const deleteHandler = e => {
        e.preventDefault();
        dispatch(deleteSmurf(smurf.id));
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                </Typography>
                {!isEditing ? ( <>
                    <Typography variant="h5" component="h2">
                        {smurf.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {smurf.age} Years Old
                    </Typography>
                    <Typography variant="body2" component="p">
                        {smurf.height} cm
                    </Typography>
                    </>) :
                    (<form>
                        <label htmlFor = "name">Name:</label>
                        <input id = "name" type= "text" name = "name" value = {values.name} onChange = {handleChanges} />
                        <br />
                        <label htmlFor = "name">Age:</label>
                        <input id = "age" type= "number" name = "age" value = {values.age} onChange = {handleChanges} />
                        <br />
                        <label htmlFor = "name">Height:</label>
                        <input id = "height" type= "number" name = "height" value = {values.height} onChange = {handleChanges} />
                    </form>)
                }
            </CardContent>
            <CardActions>
                <Button size="small" onClick = {toggleEdit}>{isEditing ? "Save" : "Edit"}</Button>
                {!isEditing && <Button size="small" onClick = {deleteHandler}>Delete</Button>}
            </CardActions>
        </Card>
    );
}