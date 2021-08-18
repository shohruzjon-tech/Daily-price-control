import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


export default function CustomButton({fill, color, name, icon, onClick, type, padding}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        padding:()=>padding ? "8px 15px" : "2px 10px",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type={type} variant={fill} color={color} onClick={onClick}>
          {icon}  {name}
      </Button>
    </div>
  );
}