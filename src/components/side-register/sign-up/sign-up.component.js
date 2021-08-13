import React from 'react';
import { SignUpContainer } from './sign-up.styles';
import FormControlComponent from '../../form-control/form-control.component';
import TextField from '@material-ui/core/TextField';
import { SignInSubmitButton } from '../sign-in/sign-ing.styles';
import Checkbox from '@material-ui/core/Checkbox';

const SignUpComponent = () => {

    const [form , setForm]=React.useState({
        name:"",
        email:"",
        password:"",
        repassword:"",
    });
  
    const [checked, setChecked]=React.useState(false);


    const handleChecked=(e)=>{
        setChecked(e.target.checked)
    }

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }


   const {name, email, password, repassword}=form;

   const handleSubmit=async e=>{
       e.preventDefault();
       if(name==="") {
           alert("Please, enter your name");
           return;
       };
       if(email==="") {
           alert("Please, enter your email");
           return;
       };
       if(password==="") {
           alert("Please, enter your password");
           return;
       };

       if(password!==repassword) {
           alert("Please, check your passwords again!");
           return;
       }
      if(!checked) {
          alert("Please, check it")
      };


       console.log("hello");
   }





    return (
        <SignUpContainer>
              <FormControlComponent handleSubmit={handleSubmit}>

                 <TextField 
                 onChange={handleChange}
                  value={name} 
                  name="name" 
                  id="standard-basic" 
                  label="Name" 
                  style={{margin:"10px 0", color:"red"}}
                  />

                 <TextField 
                  onChange={handleChange} 
                  value={email}
                  name="email"
                  id="standard-old"
                  label="Email" 
                  style={{margin:"10px 0"}}
                  />


                 <TextField 
                 onChange={handleChange}
                 value={password}
                 name="password" 
                 type="password" 
                 id="standard-young" 
                 label="Password" 
                 style={{margin:"10px 0"}}
                 />


                 <TextField 
                 onChange={handleChange} 
                 value={repassword} 
                 name="repassword" 
                 type="password" 
                 id="standard-advanced" 
                 label="Confirm Password" 
                 style={{margin:"10px 0"}}
                 />


                 <Checkbox
                  style={{alignSelf:"flex-start", width:"max-content", marginLeft:40}}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  onChange={handleChecked}
                  checked={checked}
                  />

                 <SignInSubmitButton type="submit">SIGN UP</SignInSubmitButton>
              </FormControlComponent>
        </SignUpContainer>
    );
}




export default SignUpComponent;
