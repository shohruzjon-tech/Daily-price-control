import React from 'react';
import {RegisterPageContainer, RegisterPageBgc}  from './register.styles';
import SideRegisterComponent from '../../components/side-register/side-register.component';



const RegisterPage= () => {



    return (
        <RegisterPageContainer> 
            <RegisterPageBgc>
                  <SideRegisterComponent/>
            </RegisterPageBgc>
        </RegisterPageContainer>
    );
}

export default  RegisterPage;
