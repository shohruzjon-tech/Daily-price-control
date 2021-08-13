import React from 'react';
import { 
    SignInContainer, SignInSubmitButton ,
} from './sign-ing.styles';
import FormControlComponent from '../../form-control/form-control.component';
import TextField from '@material-ui/core/TextField';


const SignInComponent = () => {


   const [form, setForm]=React.useState({
       email:"",
       password:""
   });

   const handleChnage=e=>{
       setForm({
           ...form,
           [e.target.name]:e.target.value
       })
   }

   const handleSubmit=async e=>{
              e.preventDefault();

              if(form.email===""){
                  alert("email is not avialable")
                  return;
              }
              if(form.password===""){
                  alert("password id not etered");
                  return;
              }
   }



    return (
        <SignInContainer>
            <FormControlComponent  handleSubmit={handleSubmit}>

                   <TextField 
                    onChange={handleChnage} 
                    name="email" 
                    value={form.email} 
                    id="standard-email" 
                    label="Email" 
                    style={{margin:"30px 0"}}
                   />

                  <TextField
                    onChange={handleChnage} 
                    name="password" 
                    value={form.password} 
                    id="standard-password" 
                    label="Password" 
                    style={{margin:"30px 0"}}
                   />
                   <SignInSubmitButton type="submit">SIGN IN</SignInSubmitButton>
             </FormControlComponent>
        </SignInContainer>
    );
}




export default SignInComponent;
