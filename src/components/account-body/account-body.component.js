import React from 'react';
import { 
    AccountBodyContainer, AccountBodyInfo,
    AccountProfile, AccountProfileImageBox,
    AccountProfileImage, AccountProfileImageActions,
    AccountProfileImageUpdate, AccountProfileImageDelete,
    AccountNamePlate, AccountNameLine, AccountLocation,
    AccountContentDevider,AccountEditButton, AccountDividerName,
    AccountDividerEdit, AccountContact, AccountContactDetail,
    AccountContactDetailContainer, AccountContactDetailInfo, AccountProfileUpdate,
    AccountProfileUpdateButtons, AccountContactUpdate
 } from './account-body.styles';
import MessagingBar from '../messaging-bar/messaging-bar.component';
import ChatUsComponent from '../chat-us/chat-us.component';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CustomButton from '../custom-btn/custom-btn';
import FormControlComponent from '../form-control/form-control.component';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingList from '../home-right/shopping-list/shopping-list.component';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const AccountBody = () => {

    const classes = useStyles();
    const [state, setState]=React.useState(true);
    const [display, setDisplay]=React.useState(false);
    const [contact, setContact]=React.useState(false);
    const fileInputRef=React.useRef(null);
    const [formData, setFormData]=React.useState({
        name:'',
        surname:'',
        country:'',
        city:''
    });
    

    const changePage=()=>{
         if(state){
            setState(false);
            setDisplay(true)
            return;
         }

         setState(true);
         setDisplay(false)
     }

     const changeContact=()=>{
          if(!contact){
              setContact(true);
              return;
          }

          setContact(false);
     }

    const handleSubmit=async e=>{
          e.preventDefault();
      }


    const handleChange=e=>{

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }
  





    // Delete message popper


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
    setOpen(true);
      };

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

       setOpen(false);
    };


    return (
        <AccountBodyContainer>
                  <ChatUsComponent/>
                  <MessagingBar/>
           <AccountBodyInfo>
                 <AccountProfile  full={!display ? "1fr 3fr 1fr" : "1fr 3fr"}>
                     <AccountProfileImageBox>
                            <AccountProfileImage src="http://www.newdesignfile.com/postpic/2015/06/user-icon_291726.jpg"/>
                            <AccountProfileImageActions>
                                 <AccountProfileImageUpdate onClick={()=>fileInputRef.current.click()}>
                                 <input
                                  name="file" 
                                  type="file"
                                  style={{display:"none"}}
                                  ref={fileInputRef}
                                  multiple={false}
                                  />
                                     <EditIcon style={{fontSize:12}}/>edit
                                 </AccountProfileImageUpdate>
                                 <AccountProfileImageDelete onClick={handleClick}>
                                     <DeleteForeverIcon style={{fontSize:12}}/>delete
                                 </AccountProfileImageDelete>
                                    <Snackbar
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                      }}
                                   open={open}
                                   autoHideDuration={6000}
                                   onClose={handleClose}
                                   message="Photo deleted !"
                                   action={
                               <React.Fragment>
                                    <Button color="secondary" size="small" onClick={handleClose}>
                                 UNDO
                                 </Button>
                               <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                              <CloseIcon fontSize="small" />
                           </IconButton>
                              </React.Fragment>
                              }
                                />
                            </AccountProfileImageActions>
                     </AccountProfileImageBox>

                      {state ? 
                      <React.Fragment>
                           <AccountNamePlate>
                                <AccountNameLine>John Smith</AccountNameLine>
                                <AccountLocation><LocationOnIcon style={{color:"#ddd", fontSize:"24px", margin:"0 5px"}}/> Poland, Warsaw</AccountLocation>
                     </AccountNamePlate>
                     <AccountEditButton>
                          <CustomButton onClick={changePage} name="EDIT" color="primary" icon={<EditIcon style={{fontSize:22, padding:"0 5px"}}/>} fill="outlined" />
                     </AccountEditButton>
                    </React.Fragment>:

           <FormControlComponent handleSubmit={handleSubmit}>
             <AccountProfileUpdate>
              <TextField 
                 name="name" 
                 id="name_007" 
                 label="Name" 
                 style={{margin:"10px 0", color:"red"}}
                 onChange={handleChange}
               />
               <TextField 
                 name="surname" 
                 id="surname_007" 
                 label="Surname" 
                 style={{margin:"10px 0", color:"red"}}
                 onChange={handleChange}
                />
                 <TextField 
                  name="country" 
                  id="country_007" 
                  label="Country" 
                  style={{margin:"10px 0", color:"red"}}
                  onChange={handleChange}
                  />
                 <TextField 
                  name="city" 
                  id="city_007" 
                  label="City" 
                  style={{margin:"10px 0", color:"red"}}
                  onChange={handleChange}
                  />
                
                       </AccountProfileUpdate>
                  <AccountProfileUpdateButtons>
                        <CustomButton fill="outlined" color="secondary" name="cancel" onClick={changePage}/>
                        <CustomButton type="submit" fill="contained" color="primary" name="save"/>
                 </AccountProfileUpdateButtons>
             </FormControlComponent>
                    }
                 </AccountProfile>


                 {/* Divider start */}
              <AccountContentDevider>
                  <AccountDividerName>Contact Details</AccountDividerName>
                  <AccountDividerEdit onClick={changeContact}><EditIcon style={{fontSize:"12px"}}/>  edit</AccountDividerEdit>
              </AccountContentDevider>
                 {/* Divider end */}

 
                {/* Account info section start */}
                 <AccountContact contact={contact ? true : false }>
                   {contact ?
                     <FormControlComponent>
                     <AccountContactUpdate>
                     <AccountContactDetailContainer>
                         <TextField 
                          name="email" 
                          id="email_007" 
                          label="Email" 
                          style={{margin:"10px 0", color:"red"}}
                          onChange={handleChange}
                          style={{width:"80%"}}
                          value="abdivakilov1981@gmail.com"
                          disabled
                          />
                     </AccountContactDetailContainer>
                     <AccountContactDetailContainer>
                         <TextField 
                          name="phone" 
                          id="phone_007" 
                          label="Telephone" 
                          style={{margin:"10px 0", color:"red"}}
                          onChange={handleChange}
                          style={{width:"80%"}}
                          />
                     </AccountContactDetailContainer>
                     <AccountContactDetailContainer>
                     <TextField
                        id="date"
                        label="Date of birth"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                         }}
                         style={{width:"80%"}}
                       />
                     </AccountContactDetailContainer>
                   </AccountContactUpdate>
                   <AccountProfileUpdateButtons>
                        <CustomButton fill="outlined" color="secondary" name="cancel" onClick={changeContact}/>
                        <CustomButton type="submit" fill="contained" color="primary" name="save"/>
                   </AccountProfileUpdateButtons>
                    </FormControlComponent> :
                     <React.Fragment>
                          <AccountContactDetailContainer>
                             <AccountContactDetail>Email: </AccountContactDetail>
                               <AccountContactDetailInfo>abdivakilov1981@gmail.com</AccountContactDetailInfo>
                                 </AccountContactDetailContainer>
                                   <AccountContactDetailContainer>
                                   <AccountContactDetail>Telephone: </AccountContactDetail>
                                  <AccountContactDetailInfo>+48602117560</AccountContactDetailInfo>
                                </AccountContactDetailContainer>
                              <AccountContactDetailContainer>
                             <AccountContactDetail>Date  of birth: </AccountContactDetail>
                           <AccountContactDetailInfo>2001-11-11</AccountContactDetailInfo>
                         </AccountContactDetailContainer>
                     </React.Fragment>
                   }
                </AccountContact >
                 {/* Account info section end */}
                 <ShoppingList isAccount/>
           </AccountBodyInfo>
        </AccountBodyContainer>
    );
}

export default AccountBody;
