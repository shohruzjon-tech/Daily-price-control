import React from 'react';
import {
     ChatUsContainer,ChatUsContainerList,
     ChatUsContainerListItem, ChatUsTrigger
     } from './chat-us.styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


const ChatUsComponent = () => {


  const listRef=React.useRef();
  const [state, setState]=React.useState(true);

  const openClick=()=>{
            listRef.current.style.transform="translateX(0)";
            listRef.current.style.transition="1s";
            setState(true)
  }
  const closeClick=()=>{
            listRef.current.style.transform="translateX(-48px)";
            listRef.current.style.transition="1s";
            setState(false)
  }

    return (
        <ChatUsContainer>
            <ChatUsContainerList ref={listRef}>
                  <ChatUsContainerListItem style={{background:"#f7345e"}}><InstagramIcon/></ChatUsContainerListItem>
                  <ChatUsContainerListItem style={{background:"#4dc247"}}><WhatsAppIcon/></ChatUsContainerListItem>
                  <ChatUsContainerListItem style={{background:"#1976d2"}}><FacebookIcon/></ChatUsContainerListItem>
                  <ChatUsContainerListItem style={{background:"#4dc247"}}><PhoneIcon/></ChatUsContainerListItem>
                  <ChatUsContainerListItem style={{background:"#6CADDE"}}><TwitterIcon/></ChatUsContainerListItem>
            </ChatUsContainerList>
             {
              state?               
              <ChatUsTrigger onClick={closeClick}><ArrowRightIcon /></ChatUsTrigger>:
              <ChatUsTrigger onClick={openClick}><ArrowLeftIcon /></ChatUsTrigger>
             }
        </ChatUsContainer>
    );
}

export default ChatUsComponent;
