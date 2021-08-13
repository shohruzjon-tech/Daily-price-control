import React from 'react';
import {
    FooterBottom, FooterContainer,
    FooterList, FooterListItem, FooterListItemHead
 } from './footer.styles';





const FooterComponent = () => {





    return (
        <FooterContainer >
              <FooterList>
                      <FooterListItemHead>MENU</FooterListItemHead>
                      <FooterListItem>Need a help?</FooterListItem>
                      <FooterListItem>Partners</FooterListItem>
                      <FooterListItem>Daily News</FooterListItem>
                      <FooterListItem>Graphic data</FooterListItem>
              </FooterList>
             <FooterBottom>
                    © Copyright 2021 by Shohruzjon Abdivakilov
             </FooterBottom>
        </FooterContainer >
    );
}

export default FooterComponent;
