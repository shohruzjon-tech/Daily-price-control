import React from 'react';
import {
     SideRegisterContainer, SideRegisterHeader ,
     SideRegisterHeaderTitle, SideregisterDes,
     SideRegTextInfo, SideRegTextInfoPar, SideRegLink
    } from './side-register.styles';
import { useHistory } from 'react-router-dom';
import SignInComponent from './sign-in/sign-in.component';
import SignUpComponent from './sign-up/sign-up.component';
import { openSignUp } from '../../redux/register/register.actions';
import {connect} from 'react-redux'

const SideRegisterComponent= ({openSignUp, register}) => {
   
    const history=useHistory();

    return (
        <SideRegisterContainer>
             <SideRegisterHeader>
                 <SideRegisterHeaderTitle onClick={()=>history.push('/')}>DPREPORT.COM</SideRegisterHeaderTitle>
                 <SideregisterDes>Latest News On Markets</SideregisterDes>
             </SideRegisterHeader>
               {register ?  <SignUpComponent/> :   <SignInComponent/> }
             <SideRegTextInfo>
                 <SideRegTextInfoPar>
                     Become our member and descover the prices of any kind of products
                     in no time and save your  expensive time. Invite your other friends and
                     obtain a discount card for your purchases.
                 </SideRegTextInfoPar>
                    {
                        register ? 
                        <SideRegTextInfoPar>You  have already an account?</SideRegTextInfoPar>:
                        <SideRegTextInfoPar>You do not have an ccount?</SideRegTextInfoPar>
                    }
                    {
                    register ? 
                    <SideRegLink onClick={()=>openSignUp(false)}>SIGN IN</SideRegLink>:
                    <SideRegLink onClick={()=>openSignUp(true)}>SIGN UP</SideRegLink>
                    }
             </SideRegTextInfo>
        </SideRegisterContainer>
    );
}


const mapDispatchToProps=dispatch=>({
       openSignUp:register=>dispatch(openSignUp(register))
})

const mapStateToProps=state=>({
      register:state.register.signup
})

export default connect(mapStateToProps,mapDispatchToProps)(SideRegisterComponent);
