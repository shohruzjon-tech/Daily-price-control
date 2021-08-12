import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding:"9px 10px",
    },
  },
}));

export default function CustomButton({fill, color, name, icon}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant={fill} color={color}>
          {icon}  {name}
      </Button>
    </div>
  );
}