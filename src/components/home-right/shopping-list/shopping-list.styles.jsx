import styled from "styled-components";
import ListItem from '@material-ui/core/ListItem';


export const ShoppingListContainer=styled.div`
     position:${props=>props.isAccount ? "block" : "fixed"};
     height:100vh;
     display:flex;
     align-items:center;
     margin-top:${props=>props.isAccount ? "10px" : "-50px"};
`


export const ShoppingListDelete=styled.div`
        color:red;
        display:none;
`

export const ShoppingListItem=styled(ListItem)`
      &:hover{
           ${ShoppingListDelete}{
                display:block;
           }
      }
`

export const ShoppingListButton=styled.div`
      display:${props=>props.account ? "none" : "flex"};
      position:absolute;
      bottom:15%;
      right:0;
      align-items:center;
      width:100%;
      justify-content:space-around;
`

export const ShoppingListTotal=styled.div`
      font-style:sans-serif;
      font-size:18px;
      
`