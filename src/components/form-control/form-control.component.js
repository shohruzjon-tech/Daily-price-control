import React from 'react';
import { FormControlContianer } from './form-control.styles';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
    },
  },
}));





const FormControlComponent=({children}) => {

    const classes = useStyles();


    return(
              <FormControlContianer className={classes.root} noValidate autoComplete="off">
                    {children}
             </FormControlContianer>
        )
}
export default FormControlComponent;
