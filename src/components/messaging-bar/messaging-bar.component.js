import React from 'react';
import { MessagingContainer } from './messaging-bar.styles';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles((theme)=>(
    { 
       root: {
        '& > *': {
         margin: theme.spacing(1),},
         position:"fixed",
         bottom:"10%",
         right:"5%"
        },
        extendedIcon: {
        marginRight: theme.spacing(1),},
        list: {
        width: 350,
        },
        fullList: {
        width: 'auto',
        },
}));


const MessagingBar = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
         
        </List>
          <Divider />
        <List>
         
        </List>
      </div>
    );

    return (
        <MessagingContainer>
             <div className={classes.root}>
               <Fab onClick={toggleDrawer("right", true)} color="secondary" aria-label="edit">
                  <MailOutlineIcon />
               </Fab>
              </div>
          <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
        </MessagingContainer>
    );
}

export default MessagingBar;
