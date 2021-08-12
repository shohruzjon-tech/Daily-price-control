import React from 'react';
import {
     SideRegisterContainer, SideRegisterHeader ,
     SideRegisterHeaderTitle, SideregisterDes,
     SideRegTextInfo, SideRegTextInfoPar, SideRegLink
    } from './side-register.styles';
import { useHistory } from 'react-router-dom';
import SignInComponent from './sign-in/sign-in.component';
import SignUpComponent from './sign-up/sign-up.component';


const SideRegisterComponent= () => {
   
    const history=useHistory();

    return (
        <SideRegisterContainer>
             <SideRegisterHeader>
                 <SideRegisterHeaderTitle onClick={()=>history.push('/')}>DPREPORT.COM</SideRegisterHeaderTitle>
                 <SideregisterDes>Latest News On Markets</SideregisterDes>
             </SideRegisterHeader>
             <SignInComponent/> 
             <SignUpComponent></SignUpComponent>
             <SideRegTextInfo>
                 <SideRegTextInfoPar>
                     Become our member and descover the prices of any kind of products
                     in no time and save your  expensive time. Invite your other friends and
                     obtain a discount card for your purchases.
                 </SideRegTextInfoPar>
                 <SideRegTextInfoPar>You do not have an ccount?</SideRegTextInfoPar>
                 <SideRegLink>SIGN UP</SideRegLink>
             </SideRegTextInfo>
        </SideRegisterContainer>
    );
}

export default SideRegisterComponent;
