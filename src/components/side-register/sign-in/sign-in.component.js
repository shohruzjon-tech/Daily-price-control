import React from 'react';
import { 
    SignInContainer, SignInSubmitButton ,
} from './sign-ing.styles';
import FormControlComponent from '../../form-control/form-control.component';
import TextField from '@material-ui/core/TextField';


const SignInComponent = () => {





    return (
        <SignInContainer>
            <FormControlComponent>
                   <TextField id="standard-basic" label="Email" style={{margin:"30px 0"}}/>
                      <TextField id="standard-basic" label="Password" style={{margin:"30px 0"}}/>
                   <SignInSubmitButton type="submit">SIGN IN</SignInSubmitButton>
             </FormControlComponent>
        </SignInContainer>
    );
}




export default SignInComponent;
