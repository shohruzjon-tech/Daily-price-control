import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import {
     HeaderTopContainer, HeaderTopData ,
     HeaderTopDivision, HeaderTopdataText,
     HeaderTopDataBtn, HeaderTopContact
    } from './header-top.styles';






const HeaderTopComponent = () => {




    return (
        <HeaderTopContainer >
            <HeaderTopData>
                <HeaderTopDivision>
                      <HeaderTopdataText>Latest news stream with DPR pro</HeaderTopdataText>
                      <HeaderTopDataBtn>Transfer now</HeaderTopDataBtn>
                </HeaderTopDivision>
                      <HeaderTopContact >
                           <MailIcon style={{color:"#06c76f"}}/>
                          <HeaderTopdataText>Contact us</HeaderTopdataText>
                      </HeaderTopContact>
            </HeaderTopData>
        </HeaderTopContainer>
    );
}

export default HeaderTopComponent;
