import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import {
   ShoppingListContainer,ShoppingListButton,
    ShoppingListDelete, ShoppingListItem ,
    ShoppingListTotal
  } from './shopping-list.styles';
import { connect } from 'react-redux';
import { removeFromCart, resetCart } from '../../../redux/cart/cart.actions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CustomButton from '../../custom-btn/custom-btn';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';









const ShoppingList = ({isAccount, messages, removeFromCart, resetCart}) => {



  const useStyles = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
      paddingTop: 50,
      background:()=>isAccount ? "rgba(255, 255, 255)" : "rgba(255, 255, 255, 0.57)" ,
      boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter:" blur(5px)",
      border:"1px solid rgba(255, 255, 255, 0.3)",
      height:"100%",
      width:()=>isAccount ? "100%" : "470px"
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  }));
    const classes = useStyles();

    const clearCart=()=>{
      resetCart([])
    }

  const [totalPrice, setTotal]=React.useState(0)

  React.useEffect(()=>{
          const prices=[0];
          messages.map(item=>prices.push(item.price));
          const TotalPrice=prices.reduce((a,b)=>{
            return a+b
          })

          setTotal(TotalPrice);
  },[messages])

    return (
      <ShoppingListContainer isAccount={isAccount ? true : false}>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            SHOPPING LIST
          </Typography>
          <List className={classes.list}>
            {messages.map(({ id, primary, secondary, person , name}) => (
              <React.Fragment key={id}>
                {id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
                {id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
                <ShoppingListItem button>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={name} />
                  </ListItemAvatar>
                  <ListItemText primary={name} secondary={secondary} />
                  <ShoppingListDelete>
                           <DeleteForeverIcon onClick={()=>removeFromCart(id)}/>
                  </ShoppingListDelete>
                </ShoppingListItem>
              </React.Fragment>
            ))}
          </List>
          <ShoppingListButton
           account={messages.length===0? true : false}
          >       
                <ShoppingListTotal>
                 Total:  {messages.length}
                </ShoppingListTotal>
                <ShoppingListTotal>
                 Price:  {totalPrice} PLN
                </ShoppingListTotal>
                 <CustomButton  
                 icon={<RotateLeftIcon 
                 style={{marginRight:"4px"}}/>}
                 fill="contained" 
                 color="secondary" 
                 name="Clear The Cart" 
                 padding
                 onClick={clearCart}
                 />
            </ShoppingListButton>
        </Paper>
      </ShoppingListContainer>
    );
}

const mapStateToProps=state=>({
    messages:state.cart.cartList
})


const mapDispatchToProps=dispatch=>({
  removeFromCart:cart=>dispatch(removeFromCart(cart)),
  resetCart:cart=>dispatch(resetCart(cart))
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);
